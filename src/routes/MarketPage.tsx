import React from "react";

const products = [
  { name: "Áo thun Pi", price: 2.5, image: "https://via.placeholder.com/150" },
  { name: "Sticker Pi", price: 0.8, image: "https://via.placeholder.com/150" },
  { name: "Cà phê Costa Rica", price: 5.0, image: "https://via.placeholder.com/150" },
  { name: "Khóa học React", price: 10.0, image: "https://via.placeholder.com/150" },
];

const MarketPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4 pt-6">
      <h1 className="text-xl font-bold mb-4">🛒 Chợ mua bán</h1>

      <div className="grid grid-cols-2 gap-4">
        {products.map((item, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-2">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-28 object-cover rounded"
            />
            <div className="text-sm font-semibold mt-2 text-center">{item.name}</div>
            <div className="text-yellow-400 text-xs text-center">{item.price} Ⓣ Pi</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketPage;
