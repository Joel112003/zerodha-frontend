import React from "react";

function Pricing() {
  return (
    <div className="container  mt-5 mb-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mt-5 fs-1 mb-4">Unbeatable pricing</h1>
          <p className="text-muted fs-5">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
          <div className="row text-center mt-5">
            <div className="col-6 border"> 
                <h1 className="mb-3 p-3 mt-4">&#8377;0</h1>
                <p className="mb-5">Free equity delivery and <br /> direct mutual funds</p>
            </div>
            <div className="col-6 border">
                <h1 className="mb-3 p-3 mt-4">&#8377;20</h1>
                <p className="mb-5">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
