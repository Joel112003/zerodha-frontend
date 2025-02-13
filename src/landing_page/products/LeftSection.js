import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  coinLinkUrl,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src={imageURL}
            alt="Product"
            className="img-fluid"
            style={{
              maxWidth: "90%",
              margin: "0 auto",
              display: "block",
              padding: "20px",
            }}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6 p-5">
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
            {productName}
          </h1>
          <p className="fs-5 mt-3 mb-4">{productDescription}</p>

          {/* Conditionally Render Coin Link or Other Links */}
          {coinLinkUrl && (
            <div className="mb-4 fs-5">
              <a
                href={coinLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                }}
              >
                 Coin  → 
              </a>
            </div>
          )}
          
          {(tryDemo || learnMore) && !coinLinkUrl && (
            <div className="d-flex flex-wrap mb-4 fs-5">
              {tryDemo && (
                <a
                  href={tryDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginRight: "80px",
                    textDecoration: "none",
                  }}
                >
                  Try Demo →
                </a>
              )}
              {learnMore && (
                <a
                  href={learnMore}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Learn More →
                </a>
              )}
            </div>
          )}

          {/* App Store Badges */}
          <div className="mt-4 d-flex flex-wrap align-items-center">
            <a
              href={googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "40px" }}
            >
              <img
                src="media/Images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
                style={{  width: "150px" }} 
              />
            </a>
            <a href={appStore} target="_blank" rel="noopener noreferrer">
              <img
                src="media/Images/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
                style={{width: "150px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
