"use client";

import { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import QuitButton from "./components/QuitButton";
import NameForm from "./components/NameForm";
import CssEditorCard from "./components/CssQuiz";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [checking, setChecking] = useState(true);

  // Kiểm tra tên người dùng và cấu hình Snowstorm
  useEffect(() => {
    const storedName = localStorage.getItem("quiz_user_name");
    if (storedName) setUserName(storedName);
    setChecking(false);

    // Cấu hình Snowstorm
    if (window.snowStorm) {
      // Màu sắc bông tuyết (hỗ trợ nhiều màu ngẫu nhiên)
      const colors = [
        "#FF0000",
        "#FF2A00",
        "#FF5500",
        "#FF7F00",
        "#FFAA00",
        "#FFD400",
        "#FFFF00",
        "#AFFF00",
        "#00FF00",
        "#00FF2A",
        "#00FF55",
        "#00FF7F",
        "#00FFAA",
        "#00FFD4",
        "#00FFFF",
        "#00AAFF",
        "#0055FF",
        "#002AFF",
        "#0000FF",
      ];

      window.snowStorm.snowColor = () =>
        colors[Math.floor(Math.random() * colors.length)]; // Màu ngẫu nhiên

      // Số lượng bông tuyết
      window.snowStorm.flakesMax = 10; // Tối đa 60 bông tuyết
      window.snowStorm.flakesMaxActive = 20; // Hoạt động cùng lúc 40 bông

      // Tốc độ và hiệu ứng
      window.snowStorm.animationInterval = 30; // Tốc độ mượt (30fps)
      window.snowStorm.useTwinkleEffect = false; // Nhấp nháy
      window.snowStorm.followMouse = true; // Không theo chuột
      window.snowStorm.vMaxX = 3; // Tốc độ gió ngang (3px/frame)
      window.snowStorm.vMaxY = 2; // Tốc độ rơi dọc (5px/frame)

      // Hành vi bông tuyết
      window.snowStorm.snowStick = true; // Dính vào đáy
      window.snowStorm.useMeltEffect = false; // Tan chảy khi chạm đáy
      window.snowStorm.freezeOnBlur = true; // Tạm dừng khi không focus

      // Ký tự và kích thước bông tuyết
      window.snowStorm.snowCharacter = "💐"; // Dùng biểu tượng bông tuyết
      window.snowStorm.flakeWidth = 20; // Chiều rộng bông tuyết
      window.snowStorm.flakeHeight = 20; // Chiều cao bông tuyết

      // Tối ưu hiệu suất
      // window.snowStorm.useGPU = true; // Dùng GPU nếu có
      window.snowStorm.flakeBottom = null; // Rơi toàn màn hình

      // Đảm bảo bông tuyết ở dưới các component khác
      window.snowStorm.zIndex = 0; // Đặt z-index thấp
    }
  }, []);

  if (checking) return null;

  return (
    <div className="w-full min-h-screen flex flex-col justify-center bg-pink-100 relative">
      {!userName && <NameForm onNameSaved={setUserName} />}
      {userName && (
        <>
          <Quiz />
          {/* <CssEditorCard /> */}
          <QuitButton />
        </>
      )}
    </div>
  );
}
