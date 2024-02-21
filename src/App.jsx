import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./pages/Cart";
import Jewerly from "./pages/JewerlySection";
import Women from "./pages/WomenSection";
import Men from "./pages/MenSection";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/jewerly" element={<Jewerly />} />,
        <Route path="/women" element={<Women />} />,
        <Route path="/men" element={<Men />} />,
      </Routes>
    </Router>
  );
}

export default App;
