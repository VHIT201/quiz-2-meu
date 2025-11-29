"use client";
import { useState, useEffect, useRef, useCallback } from "react";
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
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [isViolationSubmitted, setIsViolationSubmitted] = useState(false); // Flag để tránh submit trùng lặp

  // Di chuyển handleSubmit lên trên để tránh dependency issues
  const handleSubmit = useCallback(async () => {
    setSubmitted(true);

    const scoreValue = answers?.reduce((total, answer, idx) => {
      return answer === questions[idx].correctAnswer ? total + 1 : total;
    }, 0) || 0;

    const payload = {
      name: localStorage.getItem("quiz_user_name") || "Ẩn danh",
      answers: answers || Array(questions.length).fill(null),
      score: scoreValue,
    };

    try {
      await axios.post("/api/submit", payload);
      console.log("Gửi Google Sheet thành công ✅");
    } catch (err) {
      console.error("Gửi Google Sheet thất bại ❌:", err);
    }
  }, [answers]);

  // Hàm xử lý submit do vi phạm - sau đó reset về trang chủ
  const handleViolationSubmit = useCallback(async (violationType = "vi phạm") => {
    // Tránh gọi multiple lần
    if (isViolationSubmitted) return;
    setIsViolationSubmitted(true);
    
    // Submit bài với điểm 0 do vi phạm
    const payload = {
      name: localStorage.getItem("quiz_user_name") || "Ẩn danh",
      answers: answers || Array(questions.length).fill(null),
      score: 0, // Điểm 0 do vi phạm
      violation: true,
      violationType: violationType
    };

    try {
      await axios.post("/api/submit", payload);
      console.log("Gửi Google Sheet (vi phạm) thành công ✅");
    } catch (err) {
      console.error("Gửi Google Sheet (vi phạm) thất bại ❌:", err);
    }

    // Hiển thị thông báo cuối cùng
    alert(`🚫 Bài thi đã bị hủy do ${violationType}. Bạn sẽ được chuyển về trang chủ.`);
    
    // Xóa toàn bộ dữ liệu localStorage
    localStorage.removeItem("quiz_answers");
    localStorage.removeItem("quiz_submitted");
    localStorage.removeItem("quiz_tab_switch_count");
    localStorage.removeItem("quiz_time_left");
    localStorage.removeItem("quiz_user_name");
    
    // Delay nhỏ rồi reload trang để về trang chủ
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }, [answers, isViolationSubmitted]);

  // Cập nhật thời gian còn lại mỗi giây và lưu vào localStorage
  useEffect(() => {
    const savedTimeLeft = localStorage.getItem("quiz_time_left");
    if (savedTimeLeft) {
      setTimeLeft(parseInt(savedTimeLeft, 10)); // Lấy thời gian còn lại từ localStorage
    }

    if (timeLeft === 0) {
      handleViolationSubmit("hết thời gian"); // Gọi hàm nộp bài khi hết thời gian
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
  }, [timeLeft, handleViolationSubmit]);

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
    const savedTabSwitchCount = localStorage.getItem("quiz_tab_switch_count");

    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    } else {
      setAnswers(Array(questions.length).fill(null));
    }

    if (savedSubmitted === "true") {
      setSubmitted(true);
    }

    if (savedTabSwitchCount) {
      setTabSwitchCount(parseInt(savedTabSwitchCount, 10));
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

  useEffect(() => {
    let lastViolationTime = 0;
    
    const handleBlur = () => {
      // Dừng hoàn toàn nếu đã submit vi phạm hoặc đã nộp bài
      if (isViolationSubmitted || submitted) return;
      
      const now = Date.now();
      // Tránh duplicate event trong vòng 100ms
      if (now - lastViolationTime < 100) return;
      lastViolationTime = now;
      
      setTabSwitchCount(prev => {
        // Nếu đã >= 5, không đếm nữa
        if (prev >= 5) return prev;
        
        const newCount = prev + 1;
        if (newCount >= 5) {
          handleViolationSubmit(`chuyển tab ${newCount} lần`);
          return newCount;
        }
        alert(`Cảnh báo ${newCount}/5: Không được rời khỏi trang! Bạn đã vi phạm quy định.`);
        return newCount;
      });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        // Dừng hoàn toàn nếu đã submit vi phạm hoặc đã nộp bài
        if (isViolationSubmitted || submitted) return;
        
        const now = Date.now();
        // Tránh duplicate event trong vòng 100ms
        if (now - lastViolationTime < 100) return;
        lastViolationTime = now;
        
        setTabSwitchCount(prev => {
          // Nếu đã >= 5, không đếm nữa
          if (prev >= 5) return prev;
          
          const newCount = prev + 1;
          if (newCount >= 5) {
            handleViolationSubmit(`ẩn tab ${newCount} lần`);
            return newCount;
          }
          alert(`Cảnh báo ${newCount}/5: Bạn đang chuyển tab! Hành động này không được phép.`);
          return newCount;
        });
      }
    };

    window.addEventListener("blur", handleBlur);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [handleViolationSubmit, isViolationSubmitted, submitted]);

  useEffect(() => {
    // Chặn F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S
    const handleKeyDown = (e) => {
      // Dừng tracking nếu đã nộp bài
      if (submitted) return;
      
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
      // Dừng tracking nếu đã nộp bài
      if (submitted) return;
      e.preventDefault();
    };

    // Chặn hành vi copy
    const handleCopy = (e) => {
      // Dừng tracking nếu đã nộp bài
      if (submitted) return;
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
  }, [submitted]);

  useEffect(() => {
    const checkDevTools = () => {
      // Dừng tracking nếu đã nộp bài
      if (submitted) return;
      
      const threshold = 160; // ngưỡng chiều cao bất thường
      if (window.outerHeight - window.innerHeight > threshold) {
        alert("Vui lòng không mở DevTools!");
        window.close(); // hoặc redirect
      }
    };

    const interval = setInterval(checkDevTools, 1000);
    return () => clearInterval(interval);
  }, [submitted]);

  // Chặn Selection/Highlight Text (Cơ chế 1)
  useEffect(() => {
    const handleSelectStart = (e) => {
      // Dừng tracking nếu đã nộp bài
      if (submitted) return;
      e.preventDefault();
      return false;
    };

    const handleMouseDown = (e) => {
      // Dừng tracking nếu đã nộp bài
      if (submitted) return;
      if (e.detail > 1) { // Double click or more
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('mousedown', handleMouseDown);
    
    // Chỉ thêm CSS khi chưa nộp bài
    let style;
    if (!submitted) {
      document.onselectstart = () => false; // IE compatibility
      document.onmousedown = () => false; // IE compatibility

      // CSS to prevent text selection
      style = document.createElement('style');
      style.textContent = `
        * {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
          -webkit-touch-callout: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }
        input, textarea {
          -webkit-user-select: text !important;
          -moz-user-select: text !important;
          -ms-user-select: text !important;
          user-select: text !important;
        }
      `;
      document.head.appendChild(style);
    }

    return () => {
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('mousedown', handleMouseDown);
      document.onselectstart = null;
      document.onmousedown = null;
      if (style && style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [submitted]);

  // Chặn Drag & Drop (Cơ chế 2)
  useEffect(() => {
    const handleDragStart = (e) => {
      // Dừng tracking nếu đã nộp bài
      if (submitted) return;
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const handleDrop = (e) => {
      // Dừng tracking nếu đã nộp bài
      if (submitted) return;
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const handleDragOver = (e) => {
      // Dừng tracking nếu đã nộp bài
      if (submitted) return;
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('drop', handleDrop);
    document.addEventListener('dragover', handleDragOver);
    document.addEventListener('dragleave', handleDragStart);
    document.addEventListener('dragend', handleDragStart);
    document.addEventListener('dragenter', handleDragStart);

    return () => {
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('drop', handleDrop);
      document.removeEventListener('dragover', handleDragOver);
      document.removeEventListener('dragleave', handleDragStart);
      document.removeEventListener('dragend', handleDragStart);
      document.removeEventListener('dragenter', handleDragStart);
    };
  }, [submitted]);

  // Chặn Print Screen (Cơ chế 4)
  useEffect(() => {
    const handlePrintScreen = (e) => {
      // Dừng hoàn toàn nếu đã submit vi phạm hoặc đã nộp bài
      if (isViolationSubmitted || submitted) return;
      
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        e.stopPropagation();
        
        // Clear clipboard
        if (navigator.clipboard) {
          navigator.clipboard.writeText('').catch(() => {});
        }
        
        alert('🚫 Chức năng chụp màn hình đã bị vô hiệu hóa!');
        
        // Đếm vi phạm
        setTabSwitchCount(prev => {
          // Nếu đã >= 5, không đếm nữa
          if (prev >= 5) return prev;
          
          const newCount = prev + 1;
          if (newCount >= 5) {
            handleViolationSubmit(`chụp màn hình vi phạm ${newCount} lần`);
          }
          return newCount;
        });
        
        return false;
      }

      // Chặn Ctrl+Shift+S (Save as)
      if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        e.stopPropagation();
        alert('🚫 Không được phép lưu trang!');
        return false;
      }

      // Chặn Alt+Print (Alt + PrtSc)
      if (e.altKey && e.key === 'PrintScreen') {
        e.preventDefault();
        e.stopPropagation();
        alert('🚫 Không được phép chụp cửa sổ hiện tại!');
        return false;
      }
    };

    // Detect screenshot via clipboard change (advanced)
    const handlePaste = async (e) => {
      try {
        const clipboardItems = await navigator.clipboard.read();
        for (const clipboardItem of clipboardItems) {
          for (const type of clipboardItem.types) {
            if (type.startsWith('image/')) {
              e.preventDefault();
              alert('🚫 Phát hiện hình ảnh trong clipboard! Không được phép.');
              navigator.clipboard.writeText(''); // Clear clipboard
              return false;
            }
          }
        }
      } catch (err) {
        // Clipboard access denied or not supported
      }
    };

    document.addEventListener('keydown', handlePrintScreen);
    document.addEventListener('keyup', handlePrintScreen);
    document.addEventListener('paste', handlePaste);

    return () => {
      document.removeEventListener('keydown', handlePrintScreen);
      document.removeEventListener('keyup', handlePrintScreen);
      document.removeEventListener('paste', handlePaste);
    };
  }, [handleViolationSubmit, isViolationSubmitted, submitted]);

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

  // Lưu số lần chuyển tab
  useEffect(() => {
    localStorage.setItem("quiz_tab_switch_count", tabSwitchCount);
  }, [tabSwitchCount]);

  const handleSelect = (questionIndex, optionIndex) => {
    const updated = [...answers];
    updated[questionIndex] = optionIndex;
    setAnswers(updated);
  };

  // Hàm xóa toàn bộ data và trở về trang chủ
  const handleGoHome = () => {
    // Xóa toàn bộ dữ liệu localStorage
    localStorage.removeItem("quiz_answers");
    localStorage.removeItem("quiz_submitted");
    localStorage.removeItem("quiz_tab_switch_count");
    localStorage.removeItem("quiz_time_left");
    localStorage.removeItem("quiz_user_name");
    
    // Reload trang để trở về trang chủ (NameForm)
    window.location.reload();
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

  // Ngăn render nếu đã vi phạm và đang xử lý
  if (isViolationSubmitted) {
    return (
      <div className="text-center py-20 text-red-600 font-medium">
        <div className="text-2xl mb-4">🚫</div>
        <div>Đang xử lý vi phạm...</div>
        <div className="text-sm mt-2">Bạn sẽ được chuyển về trang chủ</div>
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
          <div className="fixed top-5 right-5 space-y-3">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-xl hover:shadow-[0_0_15px_4px_rgba(59,130,246,0.5)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 animate-heartbeat">
              <span className="font-bold text-base tracking-wide drop-shadow-sm">
                Thời gian còn lại: {formatTime(timeLeft)}
              </span>
            </div>
            {tabSwitchCount > 0 && (
              <div className={`px-4 py-2 rounded-lg shadow-xl transition-all duration-300 ${
                tabSwitchCount >= 4 
                  ? 'bg-red-600 animate-pulse' 
                  : tabSwitchCount >= 2 
                    ? 'bg-orange-500' 
                    : 'bg-yellow-500'
              } text-white`}>
                <span className="font-bold text-sm">
                  ⚠️ Cảnh báo: {tabSwitchCount}/5 lần vi phạm
                </span>
              </div>
            )}
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
              onClick={handleGoHome}
              className="mt-6 bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Trở về trang chủ 🏠
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
