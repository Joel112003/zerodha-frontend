import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3002/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        throw new Error("Invalid JSON response from server.");
      }

      if (response.ok) {
        console.log("Signing up user:", formData.username);
        localStorage.setItem("user", JSON.stringify({ username: formData.username }));

        Swal.fire({
          title: "Signup Successful!",
          text: "Welcome to the platform 🎉",
          icon: "success",
          confirmButtonText: "Go to Dashboard",
          timer: 2000,
        }).then(() => {
          window.location.href = "http://localhost:3000/dashboard"; // Correct navigation
        });
      } else {
        Swal.fire({
          title: "Signup Failed!",
          text: data.message || "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error!",
        text: error.message || "Something went wrong!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center" style={{ marginBottom: "100px", marginTop: "100px" }}>
        <h1 className="text-muted mt-5">Open a free demat and trading account</h1>
        <p className="fs-5 text-muted">
          Start investing brokerage-free and join a community of 1+ crore investors and traders
        </p>
      </div>

      <div className="row">
        {/* Left Section: Image */}
        <div className="col-md-6 text-center">
          <img src="media/Images/account_open.png" alt="Products" className="img-fluid" />
        </div>

        {/* Right Section: Signup Form */}
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center" style={{ padding: "20px" }}>
          <h2 className="mb-2 text-dark" style={{ fontSize: "1.8rem", marginRight: "240px" }}>Signup now</h2>
          <p className="text-muted mb-4 fs-5" style={{ fontSize: "1rem", marginRight: "100px" }}>
            Or track your existing application
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "400px" }}>
            <div className="mb-3">
              <input type="text" name="username" className="form-control fs-5" placeholder="Username" value={formData.username} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <input type="email" name="email" className="form-control fs-5" placeholder="Email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <input type="password" name="password" className="form-control fs-5" placeholder="Password" value={formData.password} onChange={handleChange} required />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary" style={{ padding: "5px", width: "50%", fontSize: "1.1rem" }}>
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;