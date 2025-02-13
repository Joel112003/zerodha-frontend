import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container">
      <div className="row  text-center border-bottom mt-5">
        <h1 className="mt-5 mb-3">Zerodha Products</h1>
        <p className="fs-5">Sleek, modern, and intuitive trading platforms</p>
        <p style={{ marginBottom: "100px" }}>
          Check out our{" "}
          <Link style={{ textDecoration: "none"}}>Investment offerings →</Link>
        </p>
      </div>
    </div>
  );
}

export default Hero;
