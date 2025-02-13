import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="support-container">
      <div className="row">
        <div className="col-8 left-col">
          <h1>Support Portal</h1>
          <p className="search-heading">
            Search for an answer or browse help topics to create a <br />
            ticket
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
            />
            <button className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>

          <div className="quick-links">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <a href="#">Kite user manual</a>
          </div>
        </div>

        <div className="col-4 right-col">
          <div className="track-tickets-link">
            <a href="#track-tickets">Track your tickets</a>
          </div>

          <div className="featured-section">
            <h2>Featured </h2>
            <ol>
              <li>
                <a href="#surveillance">
                  Surveillance measures on scrips - January 2025
                </a>
              </li>
              <li>
                <a href="#leverages">
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
