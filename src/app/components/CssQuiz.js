"use client";
import { useState } from "react";

// Component Card UI + CSS Editor using Tailwind
export default function CssEditorCard() {
  const [css, setCss] = useState('');
  const [previewStyle, setPreviewStyle] = useState({});
  
  // Cập nhật style khi người dùng nhập CSS
  const handleCssChange = (e) => {
    const newCss = e.target.value;
    setCss(newCss);

    // Parse CSS string thành đối tượng JS style
    const newStyle = parseCSS(newCss);
    setPreviewStyle(newStyle);
  };

  // Hàm chuyển đổi CSS string thành đối tượng style
  const parseCSS = (cssString) => {
    const style = {};
    const cssRules = cssString.split(';').filter(rule => rule.trim() !== '');

    cssRules.forEach(rule => {
      const [property, value] = rule.split(':');
      if (property && value) {
        style[property.trim()] = value.trim();
      }
    });

    return style;
  };

  return (
    <div className="max-w-5xl mx-auto h-screen bg-gray-200 rounded-lg shadow-lg flex flex-col">
      {/* Phần mẫu kết quả (Card UI đã có CSS) */}
      <div className="flex-1 p-8 bg-gray-100 overflow-auto">
        <div className="card shadow-xl rounded-lg overflow-hidden bg-white" style={previewStyle}>
          <img
            className="card-img w-full h-48 object-cover"
            src="https://via.placeholder.com/300x200"
            alt="Product"
          />
          <div className="card-content p-4 text-center">
            <h3 className="card-title text-xl font-bold">Product Name</h3>
            <p className="card-description text-gray-600 my-2">This is a short description of the product.</p>
            <button className="card-btn bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Phần giao diện chưa có CSS */}
      <div className="flex-1 p-8 bg-gray-200 border-t">
        <div className="card shadow-xl rounded-lg overflow-hidden bg-white">
          <img
            className="card-img w-full h-48 object-cover"
            src="https://via.placeholder.com/300x200"
            alt="Product"
          />
          <div className="card-content p-4 text-center">
            <h3 className="card-title text-xl font-bold">Product Name</h3>
            <p className="card-description text-gray-600 my-2">This is a short description of the product.</p>
            <button className="card-btn bg-gray-300 text-gray-700 px-6 py-3 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Khung nhập CSS */}
      <div className="p-8 bg-white border-t">
        <h3 className="text-lg font-bold mb-4">Enter CSS Below:</h3>
        <textarea
          className="w-full h-32 p-4 border border-gray-300 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={css}
          onChange={handleCssChange}
          placeholder="Enter CSS here..."
        ></textarea>
      </div>
    </div>
  );
}
