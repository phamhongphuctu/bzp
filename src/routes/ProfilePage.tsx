import React from "react";
import { Link } from "react-router-dom";

const ProfilePage: React.FC = () => {
  const username = localStorage.getItem("username") || "chưa đăng nhập";

  return (
    <div className="bg-black text-white min-h-screen p-4 pt-6">
      <h1 className="text-xl font-bold mb-4">👤 Hồ sơ cá nhân</h1>

      <div className="bg-gray-800 rounded-xl p-4 mb-4">
        <div className="text-sm text-gray-300">Tên người dùng:</div>
        <div className="text-lg font-semibold mt-1">{username}</div>
      </div>

      <div className="bg-gray-800 rounded-xl p-4 mb-4">
        <h2 className="text-md font-semibold mb-2">🌐 Ngôn ngữ</h2>
        <select
          className="w-full p-2 bg-gray-700 rounded text-white"
          onChange={(e) => {
            localStorage.setItem("lang", e.target.value);
            window.location.reload();
          }}
          defaultValue={localStorage.getItem("lang") || "vi"}
        >
          <option value="vi">Tiếng Việt</option>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="ph">Philippines</option>
        </select>
      </div>

      <div className="text-center mt-6">
        <Link to="/" className="text-sm text-blue-400 underline">
          ⬅️ Quay về trang chủ
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
