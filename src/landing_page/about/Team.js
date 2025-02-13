import * as React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 ">
        <h1 className="text-center mb-5">People</h1>
        <div className="col-6 mt-5">
          <img
            src="media/Images/nithinKamath.jpg"
            alt="Images"
            style={{ borderRadius: "100%", width: "50%", marginLeft: "26%" }}
          />
          <h4 className="mt-4 text-muted text-center">Nithin Kamath</h4>
          <h6 className="text-muted text-center">Founder, CEO</h6>
        </div>
        <div className="col-6 p-3 mt-5 fs-5 mb-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking indus
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>{" "}
        </div>
        
        </div>
      </div>
  
  );
}

export default Team;
