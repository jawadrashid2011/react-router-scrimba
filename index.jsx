import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/" className="main-logo">
            #VANLIFE
          </Link>
          <Link to="/about" className="">
            About
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <div className="footer-container">Ⓒ 2022 #VANLIFE</div>
      </footer>
    </>
  );
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
