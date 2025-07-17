import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p className="intro">
        We're here to help! For any questions, inquiries, or assistance with
        your order, feel free to reach out.
      </p>

      <section className="contact-section">
        <h2>Contact Information</h2>
        <p>
          <strong>Email:</strong> info@bookhsrplates.com
        </p>
      </section>

      <section className="contact-section">
        <h2>Office Address</h2>
        <p>
          16 and 15,New No. 352 , Bankey lal market,Main Mathura road
          Badarpur,New Delhi
        </p>
      </section>

      <section className="contact-section">
        <h2>Business Hours</h2>
        <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
        <p>Saturday – Sunday: Closed</p>
        <p className="response-time">
          We strive to respond to all inquiries within 24 hours during business
          days.
        </p>
      </section>

      <section className="contact-section">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <p>
          For quick answers, visit our{" "}
          <a href="/faq" className="faq-link">
            FAQs page
          </a>{" "}
          covering common questions about orders, refunds, cancellations, and
          more.
        </p>
      </section>
    </div>
  );
};

export default ContactUs;
