// src/pages/HomePage.jsx
import React from "react";
import "../styles/HomePage.css";
import Home from "../assets/home.png";
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <>
      <main>
        <section className="section-Home">
          <div className="container grid grid-two-cols">
            <div className="Home-content">
              {/* New Headings */}
              <h1>ProductShala</h1>
              <h2>Automation of Review Analysis</h2>

              <p>Hello! Hope you are having a good day.</p>
              <p>
                Are you confused about a product and tired of searching for genuine reviews? 
                Look no further! At ProductShala, you can enter a review of a product and see 
                if it's worth spending your money on. No need to read vague reviews and waste 
                your precious time and money.
              </p>
              <div className="home-buttons">
                <Link to="/review">
                  <button className="register-btn">Review Now</button>
                </Link>
                <Link to="/about">
                  <button className="learnmore-btn">Learn More</button>
                </Link>
              </div>
            </div>

            {/* Hero images */}
            <div className="Home-image">
              <img src={Home} alt="coding together" width="600" height="400" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
