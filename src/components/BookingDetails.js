import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BookingDetails.css";

const BookingDetails = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    state: "",
    wheelerRegNo: "",
    chassisNo: "",
    engineNo: "",
  });

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
        "http://localhost:5050/api/booking-details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save booking details");
      }

      const result = await response.json();

      // Store bookingId in sessionStorage for later steps
      sessionStorage.setItem("bookingId", result.bookingId);

      alert(result.message);

      // Navigate to user details with state fallback (optional)
      navigate("/user-details", {
        state: {
          bookingData: formData,
          bookingId: result.bookingId,
        },
      });
    } catch (err) {
      console.error("Error saving booking details:", err);
      alert("Failed to save booking details. Please try again.");
    }
  };

  return (
    <div className="booking-details-container">
      <div className="step-progress-bar">
        <div className="step-item active">
          <div className="step-circle">1</div>
          <div className="step-label">Booking Details</div>
        </div>
        <div className="step-item">
          <div className="step-circle">2</div>
          <div className="step-label">User Details</div>
        </div>
        <div className="step-item">
          <div className="step-circle">3</div>
          <div className="step-label">Payment Details</div>
        </div>
      </div>

      <div className="booking-form-container">
        <h2>Booking Details</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="state">State *</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Registration State</option>
              <option value="AP">Andhra Pradesh</option>
              <option value="AR">Arunachal Pradesh</option>
              <option value="AS">Assam</option>
              <option value="BR">Bihar</option>
              <option value="CT">Chhattisgarh</option>
              <option value="GA">Goa</option>
              <option value="GJ">Gujarat</option>
              <option value="HR">Haryana</option>
              <option value="HP">Himachal Pradesh</option>
              <option value="JH">Jharkhand</option>
              <option value="KA">Karnataka</option>
              <option value="KL">Kerala</option>
              <option value="MP">Madhya Pradesh</option>
              <option value="MH">Maharashtra</option>
              <option value="MN">Manipur</option>
              <option value="ML">Meghalaya</option>
              <option value="MZ">Mizoram</option>
              <option value="NL">Nagaland</option>
              <option value="OD">Odisha</option>
              <option value="PB">Punjab</option>
              <option value="RJ">Rajasthan</option>
              <option value="SK">Sikkim</option>
              <option value="TN">Tamil Nadu</option>
              <option value="TS">Telangana</option>
              <option value="TR">Tripura</option>
              <option value="UP">Uttar Pradesh</option>
              <option value="UK">Uttarakhand</option>
              <option value="WB">West Bengal</option>
              <option value="DL">Delhi</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="wheelerRegNo">Wheeler Reg No *</label>
            <input
              type="text"
              id="wheelerRegNo"
              name="wheelerRegNo"
              value={formData.wheelerRegNo}
              onChange={handleInputChange}
              placeholder="(Reg No: Ex-DL00XX0000)"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="chassisNo">Chassis No *</label>
            <input
              type="text"
              id="chassisNo"
              name="chassisNo"
              value={formData.chassisNo}
              onChange={handleInputChange}
              placeholder="(Last 5 digits, special characters allowed)"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="engineNo">Engine No *</label>
            <input
              type="text"
              id="engineNo"
              name="engineNo"
              value={formData.engineNo}
              onChange={handleInputChange}
              placeholder="(Last 5 digits)"
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

export default BookingDetails;
