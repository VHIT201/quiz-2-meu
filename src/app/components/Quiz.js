"use client";
import { useState, useEffect, useRef } from "react";
import {
  CheckCircle,
  Circle,
  Send,
  Trophy,
  Heart,
  Sparkles,
} from "lucide-react";
import questions from "../data/questions";
import axios from "axios";
export default function Quiz() {
  const [answers, setAnswers] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(90 * 60);


  // Cập nhật thời gian còn lại mỗi giây và lưu vào localStorage
  useEffect(() => {
    const savedTimeLeft = localStorage.getItem("quiz_time_left");
    if (savedTimeLeft) {
      setTimeLeft(parseInt(savedTimeLeft, 10)); // Lấy thời gian còn lại từ localStorage
    }

    if (timeLeft === 0) {
      handleSubmit(); // Gọi hàm nộp bài khi hết thời gian
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        localStorage.setItem("quiz_time_left", newTime); // Lưu thời gian vào localStorage mỗi giây
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, [timeLeft]);

  // Định dạng thời gian đếm ngược (mm:ss)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  // Khôi phục từ localStorage khi trang load
  useEffect(() => {
    const savedAnswers = localStorage.getItem("quiz_answers");
    const savedSubmitted = localStorage.getItem("quiz_submitted");

    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    } else {
      setAnswers(Array(questions.length).fill(null));
    }

    if (savedSubmitted === "true") {
      setSubmitted(true);
    }

    setLoading(false);
  }, []);

  //   useEffect(() => {
  //   const handleMouseDown = (e) => {
  //     if (e.button !== 0) {
  //       // Không phải chuột trái
  //       e.preventDefault();
  //     }
  //   };

  //   const handleClick = (() => {
  //     let clicked = false;
  //     return (e) => {
  //       if (clicked) {
  //         e.preventDefault();
  //       } else {
  //         clicked = true;
  //       }
  //     };
  //   })();

  //   document.addEventListener("mousedown", handleMouseDown);
  //   document.addEventListener("click", handleClick, true);

  //   return () => {
  //     document.removeEventListener("mousedown", handleMouseDown);
  //     document.removeEventListener("click", handleClick, true);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleBlur = () => {
  //     alert("Không được rời khỏi trang! Bạn đã vi phạm quy định.");
  //     // Optionally: window.location.href = "/logout" hoặc show modal
  //   };

  //   const handleVisibilityChange = () => {
  //     if (document.visibilityState === "hidden") {
  //       alert("Bạn đang chuyển tab! Hành động này không được phép.");
  //     }
  //   };

  //   window.addEventListener("blur", handleBlur);
  //   document.addEventListener("visibilitychange", handleVisibilityChange);

  //   return () => {
  //     window.removeEventListener("blur", handleBlur);
  //     document.removeEventListener("visibilitychange", handleVisibilityChange);
  //   };
  // }, []);

  useEffect(() => {
    // Chặn F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S
    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.key === "U") ||
        (e.ctrlKey && e.key === "S")
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Chặn chuột phải (context menu)
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Chặn hành vi copy
    const handleCopy = (e) => {
      e.preventDefault();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

  useEffect(() => {
    const checkDevTools = () => {
      const threshold = 160; // ngưỡng chiều cao bất thường
      if (window.outerHeight - window.innerHeight > threshold) {
        alert("Vui lòng không mở DevTools!");
        window.close(); // hoặc redirect
      }
    };

    const interval = setInterval(checkDevTools, 1000);
    return () => clearInterval(interval);
  }, []);

  // Lưu vào localStorage khi answers thay đổi
  useEffect(() => {
    if (answers) {
      localStorage.setItem("quiz_answers", JSON.stringify(answers));
    }
  }, [answers]);

  // Lưu trạng thái submitted
  useEffect(() => {
    localStorage.setItem("quiz_submitted", submitted);
  }, [submitted]);

  const handleSelect = (questionIndex, optionIndex) => {
    const updated = [...answers];
    updated[questionIndex] = optionIndex;
    setAnswers(updated);
  };

  const handleSubmit = async () => {
    setSubmitted(true);

    const scoreValue = answers.reduce((total, answer, idx) => {
      return answer === questions[idx].correctAnswer ? total + 1 : total;
    }, 0);

    const payload = {
      name: localStorage.getItem("quiz_user_name") || "Ẩn danh",
      answers,
      score: scoreValue,
    };

    try {
      await axios.post("/api/submit", payload);
      console.log("Gửi Google Sheet thành công ✅");
    } catch (err) {
      console.error("Gửi Google Sheet thất bại ❌:", err);
    }
  };

  const score = answers?.reduce((total, answer, idx) => {
    return answer === questions[idx].correctAnswer ? total + 1 : total;
  }, 0);

  const progress =
    (answers?.filter((answer) => answer !== null).length / questions.length) *
    100;

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "Xuất sắc! 🌟";
    if (percentage >= 80) return "Rất tốt! 🎉";
    if (percentage >= 70) return "Tốt! 👏";
    if (percentage >= 60) return "Khá! 👍";
    return "Cần cố gắng thêm! 💪";
  };

  if (loading || !answers) {
    return (
      <div className="text-center py-20 text-pink-600 font-medium">
        Đang tải dữ liệu...
      </div>
    );
  }

  return (
    <div className="h-full bg-gradient-to-br from-pink-50 via-white to-rose-50 py-8 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Sparkles className="text-pink-500 w-8 h-8" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Bài Trắc Nghiệm Frontend
            </h1>
            <Heart className="text-pink-500 w-8 h-8" />
          </div>
          <p className="text-pink-600 font-medium">
            JavaScript • TypeScript • Tailwind • React
          </p>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="flex justify-between text-sm text-pink-600 mb-2">
              <span>Tiến độ</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-pink-100 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-pink-500 to-rose-500 h-3 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          {/* Countdown Timer */}
          {/* <div className="fixed top-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-xl hover:shadow-[0_0_15px_4px_rgba(59,130,246,0.5)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 animate-heartbeat">
            <span className="font-bold text-base tracking-wide drop-shadow-sm">
              Thời gian còn lại: {formatTime(timeLeft)}
            </span>
          </div> */}
          <div
            className="fixed top-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-xl hover:shadow-[0_0_15px_4px_rgba(59,130,246,0.5)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 animate-heartbeat"
          >
            <span className="font-bold text-base tracking-wide drop-shadow-sm">
              Thời gian còn lại: {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Questions */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-pink-100">
          <div className="space-y-8">
            {questions.map((q, idx) => (
              <div
                key={q.id}
                className="p-6 bg-gradient-to-r from-pink-25 to-rose-25 rounded-2xl border border-pink-100 hover:shadow-lg transition-all duration-300"
              >
                <h2 className="font-bold text-lg mb-4 text-gray-800 flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{q.question}</span>
                </h2>

                <div className="grid grid-cols-1 gap-3 ml-11">
                  {q.options.map((opt, optIdx) => (
                    <label
                      key={optIdx}
                      className={`group flex items-center px-5 py-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:scale-[1.02] ${
                        answers[idx] === optIdx
                          ? "bg-gradient-to-r from-pink-100 to-rose-100 border-pink-400 shadow-md"
                          : "bg-white border-pink-200 hover:border-pink-300 hover:bg-pink-50"
                      }`}
                    >
                      <div className="flex items-center w-full">
                        {answers[idx] === optIdx ? (
                          <CheckCircle className="w-5 h-5 text-pink-500 mr-3 flex-shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-pink-300 mr-3 flex-shrink-0 group-hover:text-pink-400" />
                        )}
                        <input
                          type="radio"
                          name={`q-${idx}`}
                          value={optIdx}
                          className="sr-only"
                          checked={answers[idx] === optIdx}
                          onChange={() => handleSelect(idx, optIdx)}
                        />
                        <span
                          className={`text-gray-700 ${
                            answers[idx] === optIdx ? "font-semibold" : ""
                          }`}
                        >
                          {opt}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button or Results */}
        {!submitted ? (
          <div className="text-center">
            <button
              onClick={handleSubmit}
              disabled={answers.some((answer) => answer === null)}
              className="group bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto"
            >
              <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              Nộp bài
              <Sparkles className="w-5 h-5" />
            </button>
            {answers.some((answer) => answer === null) && (
              <p className="text-pink-500 mt-3 text-sm">
                Vui lòng trả lời tất cả câu hỏi trước khi nộp bài ✨
              </p>
            )}
          </div>
        ) : (
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-8 text-center text-white shadow-xl">
            <Trophy className="w-16 h-16 mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold mb-2">{getScoreMessage()}</h3>
            <p className="text-xl mb-4">
              Bạn đã trả lời đúng{" "}
              <span className="font-bold text-3xl">{score}</span> /{" "}
              {questions.length} câu hỏi
            </p>
            <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
              <p className="text-lg">
                Điểm số:{" "}
                <span className="font-bold text-2xl">
                  {Math.round((score / questions.length) * 100)}%
                </span>
              </p>
            </div>
            <button
              onClick={() => {
                setAnswers(Array(questions.length).fill(null));
                setSubmitted(false);
                // localStorage.removeItem("quiz_answers");
                localStorage.removeItem("quiz_submitted");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-6 bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Làm lại 🔄
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
