import react from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-5  mt-5 mb-5 fs-4">
      <div className="row">
        <h1> 404 Not Found</h1>
        <p>
          Sorry, the page you are looking for does not exist.<br /> Visit{" "}
          <Link to="/home" style={{ textDecoration:"none"}}>Zerodha's Home Page</Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
