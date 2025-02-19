import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const footerStyle = {
    width: "100%", // Full width
    backgroundColor: "#f8f9fa", // Light background color
    borderTop: "1px solid #ddd", // Top border
    marginTop: "20px", // Add margin above footer
    padding: "20px 0", // Vertical padding for spacing
    boxSizing: "border-box", // Prevent width issues
  };

  const iconStyle = {
    fontSize: "1.5rem",
    marginRight: "15px",
    color: "#333",
  };

  return (
    <footer style={footerStyle}>
      <div className="container  mt-5 " style={{ margin: "0 auto" }}>
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/Images/logo.svg"
              alt="Zerodha Logo"
              style={{ height: "20px" }}
            />
            <p className="text-muted mt-3">
              &copy;2010 - 2024, Zerodha Broking Ltd.
              <br /> All rights reserved.
            </p>

            <div
              className="mt-4"
              style={{
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              {/* Social Media Icons */}
              <div>
                <Link href="">
                  <i className="fab fa-x-twitter" style={iconStyle}></i>
                </Link>
                <Link href="">
                  <i className="fab fa-facebook" style={iconStyle}></i>
                </Link>
                <Link href="">
                  <i className="fab fa-instagram" style={iconStyle}></i>
                </Link>
                <Link href="">
                  <i className="fab fa-linkedin" style={iconStyle}></i>
                </Link>{" "}
                <br />
              </div>
              <div
                className="border-top mt-3 "
                style={{ textDecoration: "none" }}
              >
                <div className="mt-4 ">
                  <Link href="">
                    <i className="fab fa-youtube " style={iconStyle}></i>
                  </Link>
                  <Link href="">
                    <i className="fab fa-whatsapp" style={iconStyle}></i>
                  </Link>
                  <Link href="">
                    <i className="fab fa-telegram" style={iconStyle}></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Links of all given col */}
          <div className="col">
            <h5>Company</h5>
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "20px",
              }}
            >
              About
            </Link>{" "}
            <br />
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "20px",
              }}
            >
              Products
            </Link>{" "}
            <br />
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "20px",
              }}
            >
              Pricing
            </Link>{" "}
            <br />
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
              }}
            >
              Referral programme
            </Link>{" "}
            <br />
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
              }}
            >
              Careers
            </Link>{" "}
            <br />
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
              }}
            >
              Zerodha.tech
            </Link>{" "}
            <br />
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
              }}
            >
              Press & media
            </Link>{" "}
            <br />
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "20px",
              }}
            >
              Zerodha Cares (CSR)
            </Link>{" "}
            <br />
          </div>
          <div className="col">
            <h5>Support</h5>
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "20px",
              }}
            >
              Contact us
            </Link>{" "}
            <br />
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
              }}
            >
              Support portal
            </Link>{" "}
            <br />
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
              }}
            >
              Z-Connect blog
            </Link>{" "}
            <br />
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
              }}
            >
              List of charges
            </Link>{" "}
            <br />
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
              }}
            >
              Downloads & resources
            </Link>{" "}
            <br />
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
              }}
            >
              Videos
            </Link>{" "}
            <br />
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
              }}
            >
              Market overview
            </Link>{" "}
            <br />
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
              }}
            >
              How to file a complaint?
            </Link>{" "}
            <br />
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "20px",
                color: "grey",
                fontSize: "20px",
              }}
            >
              Status of your complaints
            </Link>{" "}
            <br />
          </div>
          <div className="col">
            <h5>Accounts</h5>
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "20px",
              }}
            >
              Open an Account
            </Link>{" "}
            <br />
            <Link
              href="#"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "20px",
              }}
            >
              Fund Transfer
            </Link>{" "}
            <br />
          </div>
        </div>
        <div
          className="mt-5 text-small text-muted"
          style={{ fontSize: "14px", marginBottom: "20px" }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on{" "}
            <Link href="" style={{ textDecoration: "none" }}>
              SEBI SCORES
            </Link>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>
          <p>
            <Link href="" style={{ textDecoration: "none" }}>
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </Link>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please{" "}
            <Link href="" style={{ textDecoration: "none" }}>
              create a ticket here.
            </Link>
          </p>
        </div>
        <div
          className="text-small text-center text-muted"
          style={{
            display: "flex",
            justifyContent: "center", // Center the content horizontally
            flexWrap: "wrap", // Allows text to wrap if it exceeds screen width
            gap: "40px", // Adds gap between items
            alignItems: "center", // Aligns items vertically to the center
            textDecoration: "none", // Remove text underline
          }}
        >
          <p>NSE</p>
          <p>BSE</p>
          <p>MCX</p>
          <p>Terms & conditions</p>
          <p>Policies & procedures</p>
          <p>Privacy policy</p>
          <p>For investor's attention</p>
          <p>Investor charter</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
