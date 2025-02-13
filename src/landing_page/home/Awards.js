import React from "react";

function Awards() {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/Images/largestBroker.svg" />
        </div>
        <div className="col-6 p-5 mt-4">
          <h1>Largest Broker in India</h1>
          <p className="mb-4 mt-3 fs-5  text-muted">
            2+ million Zerodha Clients Contribute to over 15% of all retail
            orders volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6 fs-5 text-muted">
              <ul>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Commodity derivaties</p>
                </li>
                <li>
                  <p>Currency derivaties</p>
                </li>
              </ul>
            </div>
            <div className="col-6 fs-5  text-muted">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds & Gov. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/Images/pressLogos.png" alt="Press Logo" style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Awards;
