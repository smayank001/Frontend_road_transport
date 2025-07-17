import React from "react";
import { useLocation } from "react-router-dom";
import "./ThankYou.css";

const ThankYou = () => {
  const location = useLocation();
  const { bookingId } = location.state || {};

  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1>Thank You</h1>

        <div className="success-message">
          <span className="checkmark">✅</span>
          <h2>Thank You for Your Order!</h2>
          <p>
            Your order has been placed successfully. Delivery will be completed
            within 14 days. We'll notify you once it's shipped.
          </p>
          <p>Thanks for your patience!</p>
          {bookingId && <p className="booking-id">Booking ID: {bookingId}</p>}
        </div>
        <div className="footer-links">
          <a href="/faq">FAQ</a>
          <a href="/terms">Terms and Condition</a>
          <a href="/reschedule">Reschedule Appointment</a>
          <a href="/refund">Refund and Returns Policy</a>
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: info@bookhsrplates.com</p>
        </div>
      </div>
    </div>
  );
};
export default ThankYou;
