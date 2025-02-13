import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container mb-5">
      <div className="row text-center">
        <div className="col">
          <img src="media/images/homeHero.png" alt="Hero" className="img-fluid mb-5" />
          <h1 className="mt-5 mb-3">Invest in Everything</h1>
          <p className="mb-4 fs-5" style={{ opacity: 0.9 }}>
            Online platform to invest in stocks, derivatives, mutual funds, and more.
          </p>
          <Link to="/signup">
            <button className="btn btn-primary fs-5 mb-5" style={{ width: "20%" }}>
              Signup Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
