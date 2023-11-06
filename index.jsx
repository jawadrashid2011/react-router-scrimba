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
        <Link to="/about" className="">About</Link>
      </nav>
      <div className="home-content">
        <div className="home-content-text">
          <h1 className="home-content-main-heading">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="home-content-paragraph">
            Add adventure to your life by joining the #vanlife movement.
            <br /> Rent the perfect van to make your perfect road trip.
          </p>
          <button class="van-button">Find your van</button>
        </div>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <nav>
        <Link to="/" className="main-logo">
          #VANLIFE
        </Link>
        <Link to="/about" className="selected">
          About
        </Link>
      </nav>
      <div className="about-content">
        <img src="./images/about_bg.png" />
        <div className="about-info">
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
            <br />
            <br />
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="about-vans-info">
            <h2>
              Your destination is waiting. <br />
              Your van is ready.
            </h2>
            <button className="about-vans-btn">Explore our vans</button>
          </div>
        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
