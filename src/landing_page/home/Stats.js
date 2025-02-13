import React from "react";

function Stats() {
  return (
    <div className="container  p-1">
      <div className="row ">
        <div className="col -6 p-5">
          <h1 className="mb-5"  fs-2>
            Trust with confidence
          </h1>
          <div className="row ">
            <h4 className="fs-4 mb-3">
              Customer-first always
            </h4>
            <p className="text-muted mb-5 fs-5">
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
            <h4 className="fs-4 mb-3">
              No spam or gimmicks
            </h4>
            <p className="text-muted mb-5  fs-5">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like
            </p>
            <h4 className="fs-4 mb-3">
              The Zerodha universe
            </h4>
            <p className="text-muted mb-5  fs-5">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h4 className="fs-4 mb-3">
              Do better with money
            </h4>
            <p className="text-muted mb-5  fs-5">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        <div className="col -6 mt-4">
          <img
            src="media/Images/ecosystem.png"
            alt="Ecosystem"
            style={{ width: "115%" }}
          />
          <div className="text-center mt-2">
            <a href="" className="mx-5" style={{textDecoration:"none"}}>
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" style={{textDecoration:"none"}}>Try Kite demo</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
