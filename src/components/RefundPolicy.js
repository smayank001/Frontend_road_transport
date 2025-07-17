import React from "react";
import "./RefundPolicy.css";
import Footer from "./Footer";

const RefundPolicy = () => {
  return (
    <div className="refund-container">
      <h1>Refund and Return Policy</h1>

      <section className="policy-section">
        <h2>Eligibility for Refunds</h2>
        <p>We offer refunds in the following cases:</p>
        <ul>
          <li>
            <strong>Damaged Product:</strong> If your item arrives damaged.
          </li>
          <li>
            <strong>Incorrect Size or Product:</strong> If the delivered item is
            the wrong size or product.
          </li>
        </ul>
        <p>
          In these situations, you may request a refund, replacement, or return
          at no additional cost.
        </p>
      </section>

      <section className="policy-section">
        <h2>How to Request a Return or Refund</h2>
        <p>To start the return or refund process:</p>
        <ol>
          <li>
            <strong>Contact Customer Support:</strong> Call us at +919759248353
            (Toll-Free) or email online@bookhsrplates.com
          </li>
          <li>
            <strong>Provide Details:</strong> Share your Order Number and the
            Reason for Return to help us process your request quickly.
          </li>
        </ol>
      </section>

      <section className="policy-section">
        <h2>Cancellation Policy</h2>
        <ul>
          <li>
            <strong>Order Cancellation Window:</strong> Orders can be canceled
            within 4 hours of being placed.
          </li>
          <li>
            <strong>Refund Processing Time:</strong> Once canceled, refunds will
            be credited within 6–8 working days to the original payment method.
          </li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Important Information</h2>
        <ul>
          <li>
            <strong>Full Order Cancellations Only:</strong> We currently accept
            only full-order cancellations; partial cancellations are not
            available.
          </li>
          <li>
            <strong>Package Orders:</strong> If purchased as part of a package,
            Super Tags or Frames cannot be canceled separately from the HSRP.
            Canceling the HSRP order will result in the entire package being
            canceled.
          </li>
        </ul>
        <p>
          For Super Tag Support: Please email support@MyParkplus.com for any
          inquiries.
        </p>
      </section>

      <section className="policy-section">
        <h2>Refund Timing</h2>
        <p>
          Refunds are typically processed within 6–8 working days. However, the
          time it takes to appear in your account may vary depending on your
          bank's processing times.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
