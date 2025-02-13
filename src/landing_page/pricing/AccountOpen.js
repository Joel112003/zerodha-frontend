import React from "react";

const AccountOpen = () => {
  return (
    <div style={{ paddingLeft: "200px", marginTop: "100px" }}>
      <div className="row">
        <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
          Charges for account opening
        </h2>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "70%",
              marginBottom: "30px",
              borderCollapse: "collapse",
              border: "1px solid #ccc",
              fontSize: "18px",

            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f9f9f9" }}>
                <th
                  style={{
                    textAlign: "left",
                    padding: "10px",
                  }}
                >
                  Type of account
                </th>
                <th
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    border: "1px solid #ccc",
                  }}
                >
                  Charges
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Online account
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    border: "1px solid #ccc",
                    color: "green",
                  }}
                >
                  FREE
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Offline account
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    border: "1px solid #ccc",
                    color: "green",
                  }}
                >
                  FREE
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  NRI account (offline only)
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    border: "1px solid #ccc",
                  }}
                >
                  ₹ 500
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    border: "1px solid #ccc",
                  }}
                >
                  ₹ 500
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "24px", margin: "30px 0" }}>
          Charges for optional value added services
        </h2>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "70%",
              borderCollapse: "collapse",
              border: "1px solid #ccc",
              fontSize: "18px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f9f9f9" }}>
                <th
                  style={{
                    textAlign: "left",
                    padding: "10px",
                    border: "1px solid #ccc",
                  }}
                >
                  Service
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "10px",
                    border: "1px solid #ccc",
                  }}
                >
                  Billing Frequency
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "10px",
                    border: "1px solid #ccc",
                  }}
                >
                  Charges
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Tickertape
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Monthly / Annual
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Free: 0 | Pro: 249/2399
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Smallcase
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Per transaction
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Buy & Invest More: 100 | SIP: 10
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Kite Connect
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Monthly
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  Connect: 2000 | Historical: 2000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountOpen;
