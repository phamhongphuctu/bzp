import React from "react";

const EarnPage: React.FC = () => {
  const referralLink = "https://betzone.pi/ref/anh-tu";

  return (
    <div className="bg-black text-white min-h-screen p-4 pt-6">
      <h1 className="text-xl font-bold mb-4">🎁 Kiếm Pi miễn phí</h1>

      {/* Mời bạn bè */}
      <div className="bg-gray-800 rounded-xl p-4 mb-4">
        <h2 className="text-md font-semibold mb-2">Mời bạn bè</h2>
        <p className="text-sm text-gray-300 mb-2">
          Gửi link giới thiệu của bạn cho bạn bè. Khi họ đăng ký và chơi, bạn nhận được phần thưởng Pi!
        </p>
        <input
          value={referralLink}
          readOnly
          className="w-full p-2 rounded bg-gray-700 text-white text-sm mb-2"
        />
        <button
          onClick={() => {
            navigator.clipboard.writeText(referralLink);
            alert("Đã sao chép link!");
          }}
          className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full"
        >
          Sao chép link
        </button>
      </div>

      {/* Nhiệm vụ */}
      <div className="bg-gray-800 rounded-xl p-4">
        <h2 className="text-md font-semibold mb-2">Nhiệm vụ mỗi ngày</h2>
        <ul className="text-sm space-y-2">
          <li>✅ Đăng nhập mỗi ngày: +0.1 Pi</li>
          <li>🎰 Chơi 1 game slot: +0.2 Pi</li>
          <li>👥 Mời bạn thành công: +1 Pi</li>
        </ul>
      </div>
    </div>
  );
};

export default EarnPage;
