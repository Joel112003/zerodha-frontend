import React from "react";

function Education() {
  return (
    <div className="container mt-5 ">
      <div className="row ">
        <div className="col-6">
            <img src="media/Images/education.svg" alt="Education in Open Market" />
        </div>
        <div className="col-6 mt-5">
          <h1>Free and open market education</h1>
          <p className="mt-4 fs-5">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{textDecoration:"none"}} className="fs-5">Varsity <i class="fa-solid fa-arrow-right"></i></a>


          <p className="mt-4 fs-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="" style={{textDecoration:"none"}} className="fs-5 ">TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Education;
