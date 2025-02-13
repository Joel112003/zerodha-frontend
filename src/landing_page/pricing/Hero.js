import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row">
        <h1 className=" fs-1 text-center" style={{ marginTop: "100px" }}>
          Charges
        </h1>
        <p className="text-muted fs-4  text-center">
          {" "}
          List of all charges and taxes
        </p>

        <div className="col-4 " style={{ marginTop: "300px" }}>
          <img
            src="media/Images/pricing0.svg"
            alt="Images"
            style={{ width: "75%" }}
          />
          <h2 className="mt-4">Free equity delivery</h2>
          <p className="fs-5 text-muted">
            All equity delivery investments (NSE, BSE), <br /> are absolutely
            free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4" style={{ marginTop: "300px" }}>
          <img
            src="media/Images/other-trades.svg"
            alt="Images"
            style={{ width: "75%" }}
          />
          <h2 className="mt-4">Intraday and F&O trades</h2>
          <p className="fs-5 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed  order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 " style={{ marginTop: "300px" }}>
          <img
            src="media/Images/pricingMF.svg"
            alt="Images"
            style={{ width: "75%" }}
          />
          <h2 className="mt-4">Free direct MF</h2>
          <p className="fs-5 text-muted">
            All direct mutual fund investments are <br />
            absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;
