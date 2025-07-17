import React from "react";
import "./TrackOrder.css";

const TrackOrder = () => {
  return (
    <div className="track-order-container">
      <h1>Track Your Order</h1>
      <p className="intro">
        We know staying updated on your order status is important to you. Here's
        how to easily track your order with us.
      </p>

      <section className="tracking-instructions">
        <h2>Order Tracking Instructions</h2>
        <ol>
          <li>
            <strong>Visit Our Tracking Page:</strong> Head over to our{" "}
            <a href="/order-tracking">Order Tracking page</a>.
          </li>
          <li>
            <strong>Enter Your Information:</strong> Input your Order Number and
            the Email Address you used during the purchase.
          </li>
          <li>
            <strong>Click on "Track Order":</strong> Press the "Track Order"
            button to view the current status of your order.
          </li>
        </ol>
      </section>

      <section className="what-to-expect">
        <h2>What You Can Expect</h2>
        <ul>
          <li>
            <strong>Real-Time Updates:</strong> Get real-time updates on your
            order status, including processing, shipping, and delivery
            information.
          </li>
          <li>
            <strong>Delivery Timeline:</strong> Estimated delivery dates will be
            provided based on the shipping method you selected at checkout.
          </li>
        </ul>
      </section>

      <section className="need-help">
        <h2>Need Help?</h2>
        <p>
          If you have any questions or require assistance in tracking your
          order, please contact our Customer Support team:
        </p>
        <p>
          <strong>Email:</strong> online@bookhsrplates.com
        </p>
      </section>
    </div>
  );
};

export default TrackOrder;
