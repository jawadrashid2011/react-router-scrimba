import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
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

function Home() {
  return (
    <>
      <nav>
        <Link to="/" className="main-logo">
          #VANLIFE
        </Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="home-content">
        <div className="home-content-text">
          <h1 className="home-content-main-heading">You got the travel plans, we got the travel vans.</h1>
          <p className="home-content-paragraph">Add adventure to your life by joining the #vanlife movement. 
          <br/> Rent the perfect van to make your perfect road trip.</p>
          <button class="van-button">Find your van</button>
        </div>
      </div>
    </>
  );
}

function About() {
  return <h1>About</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
