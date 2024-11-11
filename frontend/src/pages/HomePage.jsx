// src/pages/HomePage.jsx
import React from "react";
import "../styles/HomePage.css";
import Home from "../assets/home.png";
function HomePage() {
  return (
    <>
      <main>
        <section className="section-Home">
          <div className="container grid grid-two-cols">
            <div className="Home-content">
              <p>Hello ! Hope you are having a good day.</p>
              <h1>Welcome to ProductShala</h1>
              <p>
                Are you confused about a product and tired of searching for genuine review ? Look no further! At ProductShala,
                you can enter a review of product and see if its worthy to spend your money on. No need of reading vague reviews and spend your precious time and money .
              </p>
              <div className="home-buttons">
                <a href="/login">
                  <button className="register-btn">Register now</button>
                </a>
                <a href="/About">
                  <button className="learnmore-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="Home-image">
              <img
                src={Home}
                alt="coding together"
                width="600"
                height="400"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
