import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./pages/Cart";
import Jewerly from "./pages/JewerlySection";
import Women from "./pages/WomenSection";
import Men from "./pages/MenSection";
import {  useState } from "react";

function App() {
//SAMPLE ACCOUNT --- id: 1, email: 'john@gmail.com', username: 'johnd', password: 'm38rmF$'
  const [cart, setCart] = useState([]);
  const cartedItemsCount = cart.length;

  const addCart = (product) => {
    setCart(prevCart => [...prevCart, product])
  }

  const deleteCart = (id) => {
    setCart(prevCart => prevCart.filter(cartedItem => cartedItem.id != id))
  }


  return (
    <div className="w-full min-h-screen bg-primary">
      <Router>
      <Header cartedItemsCount={cartedItemsCount} />
      <Routes>
        <Route path="/" element={<Home addCart={addCart} />} errorElement={<ErrorPage />} />
        <Route path="/cart" element={<Cart cartedItems={cart} deleteCart={deleteCart} />} />
        <Route path="/jewerly" element={<Jewerly deleteCart={deleteCart} />} />,
        <Route path="/women" element={<Women deleteCart={deleteCart} />} />,
        <Route path="/men" element={<Men deleteCart={deleteCart} />} />,
      </Routes>
    </Router>
    </div>
  );
}

export default App;
