import React from "react";
import "./RescheduleAppointment.css";
import Footer from "./Footer";

const RescheduleAppointment = () => {
  return (
    <div className="reschedule-container">
      <h1>Reschedule Appointment</h1>

      <p className="intro-text">
        Need to change your appointment? We're here to help! Follow the steps
        below to reschedule your appointment with us.
      </p>

      <div className="steps-section">
        <h2>How to Reschedule Your Appointment</h2>

        <div className="step">
          <h3>1. Contact Us:</h3>
          <ul>
            <li>
              <strong>Phone:</strong> Call us at +919759248353 (Toll-Free)
            </li>
            <li>
              <strong>Email:</strong> Reach out to us at
              online@bookhsrplates.com
            </li>
          </ul>
        </div>

        <div className="step">
          <h3>2. Provide Your Details:</h3>
          <ul>
            <li>Share your Order Number</li>
            <li>Specify the original appointment date and time</li>
            <li>Indicate your preferred new appointment date and time</li>
          </ul>
        </div>

        <div className="step">
          <h3>3. Confirmation:</h3>
          <p>
            Once we receive your request, our customer support team will confirm
            the rescheduled appointment via email or phone.
          </p>
        </div>
      </div>

      <div className="policies-section">
        <h2>Rescheduling Policies</h2>
        <ul>
          <li>
            <strong>Notice Requirement:</strong> Please provide at least 24
            hours' notice if you need to reschedule. This helps us accommodate
            your new appointment time effectively.
          </li>
          <li>
            <strong>Limit on Rescheduling:</strong> You can reschedule your
            appointment up to two times. After that, please contact us for
            further assistance.
          </li>
        </ul>
      </div>

      <div className="assistance-section">
        <h2>Need Further Assistance?</h2>
        <p>
          If you have any questions or need help with the rescheduling process,
          don't hesitate to reach out. Our customer support team is here to
          assist you!
        </p>
        <ul>
          <li>
            <strong>Phone:</strong> 92997212203 (Toll-Free)
          </li>
          <li>
            <strong>Email:</strong> online@bookhsrplates.com
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default RescheduleAppointment;
