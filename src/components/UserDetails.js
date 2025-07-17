// UserDetails.js
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./UserDetails.css";

const UserDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    delivery_address: "",
  });

  const [bookingId, setBookingId] = useState(null);

  useEffect(() => {
    const bookingIdFromStorage = sessionStorage.getItem("bookingId");
    if (bookingIdFromStorage) {
      setBookingId(bookingIdFromStorage);
    } else {
      // If not found in session, optional: go back to booking page
      console.warn("bookingId not found in sessionStorage");
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "@https://backend-road-transport.onrender.com /api/user-details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            bookingId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save user details");
      }

      const result = await response.json();

      alert(result.message);

      navigate("/payment", {
        state: {
          bookingId: result.bookingId,
          amount: 1198.0,
        },
      });
    } catch (err) {
      console.error("Error saving user details:", err);
      alert("Failed to save user details. Please try again.");
    }
  };

  if (!bookingId) {
    return (
      <div>Error: No booking ID found. Please start from the beginning.</div>
    );
  }

  return (
    <div className="user-details-container">
      <div className="booking-progress">
        <div className="step">Step 1 - Booking Details</div>
        <div className="step active">Step 2: User Details</div>
        <div className="step">Step 3 - Payment Details</div>
      </div>

      <div className="user-form-container">
        <h2>User Details</h2>
        <form onSubmit={handleSubmit} className="user-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone no *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="delivery_address">Delivery Address *</label>
            <textarea
              id="delivery_address"
              name="delivery_address"
              value={formData.delivery_address}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="next-button">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};
export default UserDetails;
