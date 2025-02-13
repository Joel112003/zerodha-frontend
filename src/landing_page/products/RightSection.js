import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Section: Text */}
        <div className="col-md-6 p-5">
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            {productName}
          </h1>
          <p className="fs-5 mt-3 mb-4">{productDescription}</p>
          <a
          className="fs-5"
            href={learnMore}
            target="_blank"
            rel="noopener noreferrer"
        
            style={{
              textDecoration: "none",
             
            }}
          >
            Kite Connect →
          </a>
        </div>

        {/* Right Section: Image */}
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
      </div>
    </div>
  );
}

export default RightSection;
