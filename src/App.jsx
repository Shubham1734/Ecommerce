import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ShoppingCart from './components/ShoppingCart';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Category from './components/Category';
import CategoryDetails from './components/CategoryDetails';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element  = {<HomePage/>}/>
        <Route path="/product" element ={<Products/>} />
        <Route path="/product/:productId" element = {<ProductDetails/>}/>
        <Route path="/cart" element = {<ShoppingCart/>} />
        <Route path="/category" element = {<Category/>} />
        <Route path="/category/:name" element = {<CategoryDetails/>} />
      </Routes>
    </Router>
  )
}

export default App
