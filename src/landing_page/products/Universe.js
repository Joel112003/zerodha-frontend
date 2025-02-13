import * as React from "react";
function Universe() {
  return (
    <div className="container">
      <div className="row p-5 text-center">
        <h1>The Zerodha Universe</h1>
        <p className="mt-3 fs-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-5 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Images"
            style={{ width: "75%" }}
          />
          <p className="mt-4 text-muted mb-5">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>{" "}
          <br />
          <img
            src="media/images/streakLogo.png"
            alt="Images"
            style={{ width: "70%" }}
          />
          <p className="mt-4 text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 mt-5 p-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Images"
            style={{ width: "80%" }}
          />
          <p className="mt-4 text-muted mb-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          <img
            src="media/images/smallcaseLogo.png"
            alt="Images"
            className="mt-5"
            style={{ width: "76%" }}
          />
          <p className="mt-4 text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 mt-4 p-5">
          <img
            src="media/images/tijori.svg"
            alt="Images"
            style={{ width: "60%" }}
          />
          <p className="mt-4 text-muted mb-2">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>{" "}
          <br />
          <img
            src="media/images/dittoLogo.png"
            alt="Images"
            style={{ width: "45%" }}
            className="mt-5"
          />
          <p className="mt-4 text-muted">
            {" "}
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <a
          href="/signup"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary text-center fs-5 mt-4 mb-5"
          style={{ width: "20%", margin: "0 auto", display: "block" }}
        >
          Sign up for Free
        </a>
      </div>
    </div>
  );
}

export default Universe;
