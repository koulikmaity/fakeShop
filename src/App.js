import React from "react";
import './App.css'
import {BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" exact element={[ <Header/>, <ProductListing/> ]} />
        </Routes>

        <Routes>
          <Route path="/product/:productId" exact element={[ <Header/>, <ProductDetail/> ]} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
