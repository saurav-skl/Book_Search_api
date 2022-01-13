import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header.js";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app">
        <h1>Application</h1>

        <Routes>
          <Route path="/search" element={<Search />} />

          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
