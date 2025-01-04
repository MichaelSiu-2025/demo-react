import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import CheckOut from './CheckOut';
import { CartContext } from './CartContext';
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    //14. BrowserRouter 係一個component，用黎包住所有嘅Route
    <BrowserRouter>

      {/* 21. CartContext.Provider 係一個component，用黎包住所有嘅Route */}
      <CartContext.Provider value={{cartItems, setCartItems}}>

      <Link to="/">Home</Link>
      <Link to="/checkout">Check Out</Link>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/checkout" element={<CheckOut />} />

        <Route path="/product" element={<ProductDetail />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
