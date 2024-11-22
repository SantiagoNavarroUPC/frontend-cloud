import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './ui/pages/menu/menu';
import Products from './ui/pages/products/products';
import Categories from './ui/pages/categories/categories';
import Users from './ui/pages/users/users';
import Login from './ui/pages/login/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );

}

export default App;


