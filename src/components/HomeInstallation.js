import React from "react";
import "./HomeInstallation.css";

const HomeInstallation = () => {
  return (
    <div className="home-installation-container">
      <h1>Home Installation Service</h1>
      <p className="intro">
        Our Home Installation service is designed for your convenience,
        providing expert installation right at your doorstep. Here's how it
        works:
      </p>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>
            <h3>Schedule an Appointment</h3>
            <p>
              After placing your order, our team will reach out to arrange a
              suitable installation date and time that works for you.
            </p>
          </li>
          <li>
            <h3>Installation by Certified Technicians</h3>
            <p>
              Our certified technicians will come to your location to ensure a
              secure and precise installation of your High-Security Registration
              Plate (HSRP). Equipped with the necessary tools and expertise,
              they guarantee a seamless installation experience.
            </p>
          </li>
          <li>
            <h3>Completion and Verification</h3>
            <p>
              Once the installation is complete, our technician will verify that
              everything meets regulatory standards, ensuring your plate is
              securely installed.
            </p>
          </li>
        </ol>
      </section>

      <section className="benefits">
        <h2>Why Choose Home Installation?</h2>
        <ul>
          <li>
            <strong>Convenience:</strong> Save time by eliminating the need for
            trips to service centers.
          </li>
          <li>
            <strong>Expert Assistance:</strong> Our technicians are specifically
            trained for HSRP installation.
          </li>
          <li>
            <strong>Compliance:</strong> Guaranteed installation according to
            all official guidelines.
          </li>
        </ul>
      </section>

      <section className="contact-info">
        <p>
          For more details on scheduling your installation, please email on
          online@bookhsrplates.com. We're here to assist you!
        </p>
      </section>
    </div>
  );
};

export default HomeInstallation;
