import React from "react";

const WalletPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4 pt-6">
      <h1 className="text-xl font-bold mb-4">👛 Ví Pi</h1>

      <div className="bg-gray-800 rounded-xl p-4 mb-4">
        <div className="text-sm text-gray-300">Số dư hiện tại</div>
        <div className="text-3xl font-bold text-green-400 mt-2">ⓝ 12.345 Pi</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="bg-yellow-500 text-black font-bold py-3 rounded-lg">
          Nạp Pi
        </button>
        <button className="bg-gray-600 text-white font-bold py-3 rounded-lg">
          Rút Pi
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-md font-semibold mb-2">Lịch sử giao dịch</h2>
        <ul className="text-sm">
          <li className="py-2 border-b border-gray-700">
            +5 Pi từ Game Slot 🎰 <span className="float-right text-green-400">+5</span>
          </li>
          <li className="py-2 border-b border-gray-700">
            -2 Pi rút về ví <span className="float-right text-red-400">-2</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WalletPage;
