import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/terms-and-condition">Terms and Condition</Link>
          <Link to="/reschedule-appointment">Reschedule Appointment</Link>
          <Link to="/refund-returns">Refund and Returns Policy</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <Link to="/home-installation">Home Installation</Link>
          <Link to="/track-order">Track Your Order</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/contact-us">Contact us</Link>
        </div>

        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Email: info@bookhsrplates.com</p>
          <p>Phone: +919759248353 (Toll-Free)</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
