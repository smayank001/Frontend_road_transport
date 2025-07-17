import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      {/* <div className="ministry-header">
        <img
          src="/ministry-logo.png"
          alt="Ministry of Road Transport and Highways"
          className="ministry-logo"
        />
        <h1>MINISTRY OF ROAD TRANSPORT AND HIGHWAYS</h1>
      </div> */}
      <div className="ministry-header">
        <img
          src="government.jpg"
          alt="Road Transport and Highway"
          className="road-image"
        />
      </div>

      <div className="booking-options">
        <div className="booking-row">
          <div className="booking-card yellow">
            <h2>High Security Registration Plate with Color Sticker</h2>
            <Link to="/booking/hsrp" className="book-button">
              Book →
            </Link>
          </div>
          <div className="booking-card blue">
            <h2>Four Wheeler Plate</h2>
            <Link to="/booking/four-wheeler" className="book-button">
              Book →
            </Link>
          </div>
          <div className="booking-card cyan">
            <h2>Two Wheeler Plate</h2>
            <Link to="/booking/two-wheeler" className="book-button">
              Book →
            </Link>
          </div>
        </div>

        <div className="booking-row">
          <div className="booking-card cyan">
            <h2>Heavy Wheeler Plate</h2>
            <Link to="/booking/heavy-wheeler" className="book-button">
              Book →
            </Link>
          </div>
          <div className="booking-card yellow">
            <h2>Only Color Stickers</h2>
            <Link to="/booking/color-sticker" className="book-button">
              Book →
            </Link>
          </div>
        </div>

        <div className="booking-row">
          <div className="booking-card cyan">
            <h2>Electric Vehicle Number Plate</h2>
            <Link to="/booking/electric" className="book-button">
              Book →
            </Link>
          </div>
          <div className="booking-card yellow">
            <h2>Tractor & Trailer Number Plate</h2>
            <Link to="/booking/tractor" className="book-button">
              Book →
            </Link>
          </div>
          <div className="booking-card cyan">
            <h2>Track Your Order & Grievance Redressal</h2>
            <Link to="/booking/track" className="book-button">
              Book →
            </Link>
          </div>
          <div className="booking-card yellow">
            <h2>Transport/Replacement Number Plate</h2>
            <Link to="/booking/transport" className="book-button">
              Book →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
