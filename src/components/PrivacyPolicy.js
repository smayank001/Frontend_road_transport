import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p className="intro">
        Your privacy is essential to us. This Privacy Policy explains how we
        collect, use, and protect your information when you use our website and
        services (collectively, the "Services").
      </p>

      <section>
        <h2>Information We Collect</h2>
        <ul>
          <li>
            <strong>Registration Information:</strong> To process your HSRP
            order, we collect specific details, including your vehicle
            registration number, which is required to fulfill your request.
          </li>
          <li>
            <strong>Contact Information:</strong> We may collect your email
            address and phone number to keep you informed about order updates or
            respond to inquiries.
          </li>
          <li>
            <strong>Order Information:</strong> When you make a purchase through
            our website, we collect your name, billing address, shipping
            address, payment details (such as credit card numbers), email
            address, and phone number. This is collectively referred to as
            "Order Information."
          </li>
          <li>
            <strong>Device Information:</strong> We automatically collect
            certain data when you visit our site, like your IP address, to help
            improve our services. Whenever we mention "Personal Information" in
            this Privacy Policy, it includes both Device Information and Order
            Information.
          </li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>
            <strong>Order Processing:</strong> We use your registration and
            order details strictly to fulfill your HSRP request in accordance
            with applicable regulations.
          </li>
          <li>
            <strong>Communication:</strong> We may use your contact information
            to update you on your order status or to respond to any inquiries.
          </li>
        </ul>
      </section>

      <section>
        <h2>We will never:</h2>
        <ul>
          <li>
            Sell or share your personal information with third parties for
            marketing purposes.
          </li>
          <li>
            Use your information for purposes beyond those listed here without
            your consent.
          </li>
        </ul>
      </section>

      <section>
        <h2>Data Security</h2>
        <p>
          We employ reasonable security measures to protect your personal
          information from unauthorized access, alteration, or disclosure.
          However, please note that no internet transmission is entirely secure,
          and while we strive to protect your data, complete security cannot be
          guaranteed.
        </p>
      </section>

      <section>
        <h2>Changes to this Privacy Policy</h2>
        <p>
          This Privacy Policy may be updated periodically. Any changes will be
          posted on this page, and we encourage you to review this policy from
          time to time.
        </p>
      </section>

      <section>
        <h2>Your Choices</h2>
        <p>
          You may access or update your contact information anytime by reaching
          out to us at info@bookhsrplates.com.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          For questions or concerns regarding our privacy practices, please
          contact us at:
        </p>
        <ul>
          <li>Email: info@bookhsrplates.com</li>
          <li>
            Address: 16 and 15,New No. 352, Bankey Lal Market, Main Mathura
            Road, Badarpur, New Delhi
          </li>
        </ul>
      </section>

      <section>
        <h2>Shipping Information</h2>
        <ul>
          <li>
            <strong>Business Days:</strong> Shipping days are Monday through
            Friday. Holidays, Saturdays, and Sundays are not included.
          </li>
          <li>
            <strong>Shipping Timeline:</strong> Please allow 24-48 hours for
            delivery to your address.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
