"use client";
import confetti from "canvas-confetti";

export default function QuitButton() {
  const handleFirework = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ff4d6d', '#ffb3c1', '#fd5d93'],
    });
  };

  return (
    <div
      className="fixed bottom-6 right-6 
        px-6 py-3 rounded-full text-sm font-semibold text-white 
        bg-gradient-to-r from-pink-500 via-rose-500 to-pink-400 
        backdrop-blur-md shadow-xl ring-1 ring-white/20 
        cursor-pointer transition-all duration-300 ease-in-out 
        hover:scale-110 hover:brightness-110 hover:shadow-2xl"
      onMouseEnter={handleFirework}
      onTouchStart={handleFirework} // 👈 thêm dòng này cho mobile
    >
      Bỏ cuộc sớm
    </div>
  );
}
