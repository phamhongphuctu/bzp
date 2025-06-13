import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Home, ShoppingCart, Wallet, Gift, User } from "lucide-react";
import HomePage from "./routes/HomePage.tsx";
import MarketPage from "./routes/MarketPage.tsx";
import WalletPage from "./routes/WalletPage.tsx";
import EarnPage from "./routes/EarnPage.tsx";
import ProfilePage from "./routes/ProfilePage.tsx";

function BottomNav() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black text-white flex justify-around py-2 border-t border-gray-800 z-50">
      <Link to="/" className="flex flex-col items-center text-xs" style={{ color: path === "/" ? "#FFD700" : "white" }}>
        <Home size={20} /> Casino
      </Link>
      <Link to="/market" className="flex flex-col items-center text-xs" style={{ color: path === "/market" ? "#FFD700" : "white" }}>
        <ShoppingCart size={20} /> Chợ
      </Link>
      <Link to="/wallet" className="flex flex-col items-center text-xs" style={{ color: path === "/wallet" ? "#FFD700" : "white" }}>
        <Wallet size={20} /> Ví
      </Link>
      <Link to="/earn" className="flex flex-col items-center text-xs" style={{ color: path === "/earn" ? "#FFD700" : "white" }}>
        <Gift size={20} /> Kiếm tiền
      </Link>
      <Link to="/profile" className="flex flex-col items-center text-xs" style={{ color: path === "/profile" ? "#FFD700" : "white" }}>
        <User size={20} /> Hồ sơ
      </Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/earn" element={<EarnPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
