import React, { useState, useEffect, useRef } from "react";
import "./Sidebar.css"; 

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {/* Sidebar */}
      <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="menu-content">
          {/* First Row */}
          <div className="menu-row">
            <div className="menu-item">
              <img className="logo" src="media/Images/kite-logo.svg" alt="Zerodha" />
              <h5>Kite</h5>
              <p>Trading platform</p>
            </div>
            <div className="menu-item">
              <img className="logo" src="media/Images/console.svg" alt="Zerodha" />
              <h5>Console</h5>
              <p>Backoffice</p>
            </div>
            <div className="menu-item">
              <img className="logo" src="media/Images/coin-sidebar.svg" alt="Zerodha" />
              <h5>Coin</h5>
              <p>Mutual funds</p>
            </div>
            <div className="menu-item">
              <img className="logo" src="media/Images/kite-connect.svg" alt="Zerodha" />
              <h5>Kite Connect</h5>
              <p>Trading APIs</p>
            </div>
          </div>

          {/* Second Row */}
          <div className="menu-row">
            {/* Utilities */}
            <div className="menu-section">
              <h5>Utilities</h5>
              <ul>
                <li>Brokerage calculator</li>
                <li>Margin calculator</li>
                <li>Holiday calendar</li>
                <li>Markets</li>
              </ul>
            </div>

            {/* Updates */}
            <div className="menu-section">
              <h5>Updates</h5>
              <ul>
                <li>Z-Connect blog</li>
                <li>Pulse News</li>
                <li>Circulars / Bulletin</li>
                <li>IPOs</li>
              </ul>
            </div>

            {/* Education */}
            <div className="menu-section">
              <h5>Education</h5>
              <div className="education-subitems">
                <div className="education-item">
                  <img src="media/Images/varsity-sidebar.png" alt="Varsity" />
                  <p>Varsity</p>
                </div>
                <div className="education-item">
                  <img src="media/Images/tqna-sidebar.png" alt="Trading QA" />
                  <p>Trading Q&A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
