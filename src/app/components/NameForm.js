"use client";
import { useEffect, useState } from "react";

export default function NameForm({ onNameSaved }) {
  const [name, setName] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("quiz_user_name");
    if (storedName) {
      setName(storedName);
      setSaved(true);
      onNameSaved(storedName);
    }
  }, []);

  const handleSave = () => {
    if (name.trim()) {
      localStorage.setItem("quiz_user_name", name.trim());
      setSaved(true);
      onNameSaved(name.trim());
    }
  };

  if (saved) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm text-center space-y-4">
        <h2 className="text-xl font-semibold text-pink-600">Nhập tên của bạn</h2>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Tên của bạn..."
          className="w-full border border-pink-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-red-500"
        />
        <button
          onClick={handleSave}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-semibold transition"
        >
          Bắt đầu
        </button>
      </div>
    </div>
  );
}
