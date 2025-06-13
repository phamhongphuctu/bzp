import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="flex-1 bg-white text-black px-4 pt-0">

      {/* 🛒 BANNER CHÀO MỪNG */}
      <div className="bg-yellow-100 rounded-xl p-6 mb-6 text-center shadow-md">
        <div className="text-2xl font-bold mb-2 text-purple-800">
          🛍️ Chào mừng đến với Pi Market
        </div>
        <div className="text-base font-semibold text-black mb-1">
          🎁 MIỄN PHÍ GIAO DỊCH TRONG TUẦN NÀY
        </div>
        <div className="text-sm text-gray-700 mb-3">
          Tham gia ngay để nhận phần quà Pi
        </div>
        <button className="bg-black text-white px-5 py-2 rounded-full font-semibold">
          Mua ngay
        </button>
      </div>

      {/* 🔥 Sản phẩm nổi bật */}
      <div>
        <h2 className="text-md font-semibold mb-2">🔥 Sản phẩm nổi bật</h2>
        <div className="flex space-x-3 overflow-x-auto">
          <div className="w-28 h-28 bg-gray-200 rounded flex items-center justify-center text-sm">
            Áo Pi
          </div>
          <div className="w-28 h-28 bg-gray-200 rounded flex items-center justify-center text-sm">
            Cà phê
          </div>
          <div className="w-28 h-28 bg-gray-200 rounded flex items-center justify-center text-sm">
            Sticker
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
