import React from "react";

function CreateTicket() {
  return (
    <div className="container" >
      <div className="row" style={{ marginTop: "100px" }}>
        <h4>To create a ticket, select a relevant topic</h4>

        <div className="col-4 mt-5">
          <h4 style={{ display: "flex", alignItems: "center" }}>
            <i
              className="fa-solid fa-folder-open"
              style={{ fontSize: "20px", marginRight: "10px" }}
            ></i>
            Account Opening
          </h4>
          <p className="fs-5 mt-4" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Getting started</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Online</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Offline</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Charges</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Company, Partnership and HUF</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Non Resident Indian (NRI)</a></p>
        </div>

        <div className="col-4 mt-5">
          <h4 style={{ display: "flex", alignItems: "center" }}>
            <i
              className="fa-regular fa-user"
              style={{ fontSize: "20px", marginRight: "10px" }}
            ></i>
            Your Zerodha Account
          </h4>
          <p className="fs-5 mt-4" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Login credentials</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Your Profile</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Account modification and segment addition</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>CMR & DP ID</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Nomination</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Transfer and conversion of shares</a></p>
        </div>

        <div className="col-4 mt-5">
          <h4 style={{ display: "flex", alignItems: "center" }}>
            <i
              className="fa-solid fa-chart-line"
              style={{ fontSize: "20px", marginRight: "10px" }}
            ></i>
            Trading and Markets
          </h4>
          <p className="fs-5 mt-4" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Trading FAQs</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Kite</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Margins</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Product and order types</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Corporate actions</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Kite features</a></p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-4">
          <h4 style={{ display: "flex", alignItems: "center" }}>
            <i
              className="fa-solid fa-money-check-dollar"
              style={{ fontSize: "20px", marginRight: "10px" }}
            ></i>
            Funds
          </h4>
          <p className="fs-5 mt-4" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Fund withdrawal</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Adding funds</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Adding bank accounts</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>eMandates</a></p>
        </div>

        <div className="col-4">
          <h4 style={{ display: "flex", alignItems: "center" }}>
            <i
              className="fa-solid fa-briefcase"
              style={{ fontSize: "20px", marginRight: "10px" }}
            ></i>
            Console
          </h4>
          <p className="fs-5 mt-4" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>IPO</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Portfolio</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Funds statement</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Profile</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Reports</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Referral program</a></p>
        </div>

        <div className="col-4">
          <h4 style={{ display: "flex", alignItems: "center" }}>
            <i
              className="fa-solid fa-coins"
              style={{ fontSize: "20px", marginRight: "10px" }}
            ></i>
            Coin
          </h4>
          <p className="fs-5 mt-4" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Understanding mutual funds and Coin</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Coin app</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Coin web</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>Transactions and reports</a></p>
          <p className="fs-5" style={{ marginLeft: "30px" }}><a href="#" style={{ textDecoration: "none" }}>National Pension Scheme (NPS)</a></p>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
