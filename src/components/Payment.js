import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingId, amount } = location.state || {};
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create form data for file upload
      const formData = new FormData();
      formData.append("transaction_screenshot", file);
      formData.append("bookingId", bookingId);
      formData.append("payment_amount", amount);

      // Save payment details
      const response = await fetch(
        "https://backend-road-transport.onrender.com/api/payment-details",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save payment details");
      }

      const result = await response.json();

      // Show success message
      alert(result.message);

      // Navigate to thank you page
      navigate("/thank-you", {
        state: { bookingId },
      });
    } catch (err) {
      console.error("Error saving payment details:", err);
      alert("Failed to save payment details. Please try again.");
    }
  };

  if (!bookingId || !amount) {
    return (
      <div>
        Error: Invalid payment details. Please start from the beginning.
      </div>
    );
  }

  return (
    <div className="payment-container">
      <div className="booking-progress">
        <div className="step">Step 1 - Booking Details</div>
        <div className="step">Step 2: User Details</div>
        <div className="step active">Step 3-Payment Details</div>
      </div>

      <div className="payment-details">
        <h2>Payment Details for HSRP Indian Plate: ₹{amount}</h2>

        <div className="price-breakdown">
          <div className="price-item">
            <span>1. Base Price:</span>
            <span>₹999</span>
            <small>
              Covers the manufacturing cost of the HSRP (High-Security
              Registration Plate)
            </small>
          </div>

          <div className="price-item">
            <span>2. Taxes (18% GST):</span>
            <span>₹179.82</span>
            <small>Calculated as 18% of ₹999</small>
          </div>

          <div className="price-item">
            <span>3. Service Fee:</span>
            <span>₹19.18</span>
            <small>Includes handling and service-related charges</small>
          </div>

          <div className="price-item total">
            <span>4. Total Payment:</span>
            <span>₹{amount}</span>
          </div>
        </div>

        <div className="qr-code-section">
          <img src="/qr-code.jpg" alt="Payment QR Code" className="qr-code" />
          <p>
            Scan above Qr code using any upi app like paytm, phonepe, Gpay,
            BHIM, Amazon pay
          </p>
        </div>

        <form onSubmit={handleSubmit} className="transaction-form">
          <div className="form-group">
            <label>Transaction screenshot upload</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>

          <button type="submit" className="submit-button" disabled={!file}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Payment;
