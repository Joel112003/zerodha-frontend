import React from "react";

const Brokerage = () => {
  const containerStyle = {
    padding: "100px",
    fontFamily: "Arial, sans-serif",
  };

  const sectionStyle = {
    marginBottom: "40px",
  };

  const sectionTitleStyle = {
    fontSize: "22px",
    marginBottom: "15px",
    color: "#0073e6",
    marginTop: "80px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    margin: "10px 0",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "10px 15px",
    textAlign: "left",
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: "white",
    color: "#333",
    fontWeight: "bold",
  };

  return (
    <div   style={containerStyle}>
      {/* Equity Table */}
      <div style={sectionStyle}>
        <h3 className="text-center" style={sectionTitleStyle}>
          Equity
        </h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Equity Delivery</th>
              <th style={thStyle}>Equity Intraday</th>
              <th style={thStyle}>F&O - Futures</th>
              <th style={thStyle}>F&O - Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thTdStyle}>Brokerage</td>
              <td style={thTdStyle}>Zero Brokerage</td>
              <td style={thTdStyle}>0.03% or Rs. 20/executed order</td>
              <td style={thTdStyle}>0.03% or Rs. 20/executed order</td>
              <td style={thTdStyle}>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td style={thTdStyle}>STT/CTT</td>
              <td style={thTdStyle}>0.1% on buy & sell</td>
              <td style={thTdStyle}>0.025% on the sell side</td>
              <td style={thTdStyle}>0.02% on the sell side</td>
              <td style={thTdStyle}>
                <ul style={{ margin: 0, paddingLeft: "15px" }}>
                  <li>0.125% on options exercised</li>
                  <li>0.1% on sell side</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={thTdStyle}>Transaction Charges</td>
              <td style={thTdStyle}>
                NSE: 0.00297%
                <br />
                BSE: 0.00375%
              </td>
              <td style={thTdStyle}>
                NSE: 0.00297% <br />
                BSE: 0.00375%
              </td>
              <td style={thTdStyle}>
                NSE: 0.00173% <br />
                BSE: 0
              </td>
              <td style={thTdStyle}>
                NSE: 0.03503% (on premium) <br />
                BSE: 0.0325% (on premium)
              </td>
            </tr>
            <tr>
              <td style={thTdStyle}>GST</td>
              <td style={thTdStyle}>
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td style={thTdStyle}>
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td style={thTdStyle}>
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td style={thTdStyle}>
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>
            <tr>
              <td style={thTdStyle}>SEBI charges</td>
              <td style={thTdStyle}>₹10 / crore</td>
              <td style={thTdStyle}>₹10 / crorel</td>
              <td style={thTdStyle}>₹10 / crorel</td>
              <td style={thTdStyle}>₹10 / crore</td>
            </tr>
            <tr>
              <td style={thTdStyle}>Stamp charges</td>
              <td style={thTdStyle}>0.015% or ₹1500 / crore on buy side</td>
              <td style={thTdStyle}>0.003% or ₹300 / crore on buy side</td>
              <td style={thTdStyle}>0.002% or ₹200 / crore on buy side</td>
              <td style={thTdStyle}>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Currency Table */}
      <div style={sectionStyle}>
        <h3 className="text-center" style={sectionTitleStyle}>
          Currency
        </h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Category</th>
              <th style={thStyle}> Currency futures</th>
              <th style={thStyle}> Currency options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thTdStyle}>Brokerage</td>
              <td style={thTdStyle}>
                0.03% or ₹ 20/executed order whichever is lower
              </td>
              <td style={thTdStyle}>₹ 20/executed order</td>
            </tr>
            <tr>
              <td style={thTdStyle}>STT/CTT</td>
              <td style={thTdStyle}>No STT%</td>
              <td style={thTdStyle}>No STT</td>
            </tr>
            <tr>
              <td style={thTdStyle}>Transaction Charges</td>
              <td style={thTdStyle}>
                NSE: 0.00035% <br />
                BSE: 0.00045%
              </td>
              <td style={thTdStyle}>
                NSE: 0.0311% <br />
                BSE: 0.001%
              </td>
            </tr>
            <tr>
              <td style={thTdStyle}>GST</td>
              <td style={thTdStyle}>
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td style={thTdStyle}>
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>
            <tr>
              <td style={thTdStyle}>SEBI charges</td>
              <td style={thTdStyle}>₹10 / crore</td>
              <td style={thTdStyle}>₹10 / crore</td>
            </tr>
            <tr>
              <td style={thTdStyle}>Stamp charges</td>
              <td style={thTdStyle}>0.0001% or ₹10 / crore on buy side</td>
              <td style={thTdStyle}>0.003% or ₹10 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Commodity Table */}
      <div style={sectionStyle}>
        <h3 className="text-center" style={sectionTitleStyle}>
          Commodity
        </h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Commodity futures</th>
              <th style={thStyle}> Commodity Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thTdStyle}>Brokerage</td>
              <td style={thTdStyle}>
                0.03% or Rs. 20/executed order whichever is lower
              </td>
              <td style={thTdStyle}>₹ 20/executed order</td>
            </tr>
            <tr>
              <td style={thTdStyle}>STT/CTT</td>
              <td style={thTdStyle}>0.01% on sell side (Non-Agri)</td>
              <td style={thTdStyle}>0.05% on sell side</td>
            </tr>
            <tr>
              <td style={thTdStyle}>Transaction Charges</td>
              <td style={thTdStyle}>
                MCX: 0.0021% <br />
                NSE: 0.0001%
              </td>
              <td style={thTdStyle}>
                MCX: 0.0418% <br />
                NSE: 0.001%
              </td>
            </tr>
            <tr>
              <td style={thTdStyle}>GST</td>
              <td style={thTdStyle}>
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
              <td style={thTdStyle}>
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>
            <tr>
              <td style={thTdStyle}>SEBI charges</td>
              <td style={thTdStyle}>
               <b>Agri</b> : <br />
                ₹1 / crore <br />
                <b>Non-agri:</b> <br />
                ₹10 / crore
              </td>
              <td style={thTdStyle}>₹10 / crore</td>
            </tr>
            <tr>
              <td style={thTdStyle}>Stamp charges</td>
              <td style={thTdStyle}>0.002% or ₹200 / crore on buy side</td>
              <td style={thTdStyle}>0.003% or ₹300 / crore on buy side </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Brokerage;
