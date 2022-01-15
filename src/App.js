import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header.js";
import Mainnav from "./components/Mainnav";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <Router>
      <Header />
      <Welcome/>
      <div className="app">
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <Mainnav />
    </Router>
  );
};

export default App;
