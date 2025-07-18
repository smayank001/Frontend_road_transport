import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import BookingDetails from "./components/BookingDetails";
import UserDetails from "./components/UserDetails";
import Payment from "./components/Payment";
import ThankYou from "./components/ThankYou";
import FAQ from "./components/FAQ";
import TermsAndCondition from "./components/TermsAndCondition";
import RescheduleAppointment from "./components/RescheduleAppointment";
import RefundPolicy from "./components/RefundPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ContactUs from "./components/ContactUs";
import HomeInstallation from "./components/HomeInstallation";
import TrackOrder from "./components/TrackOrder";
import Footer from "./components/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Handle body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <img src="hsrp.png" alt="HSRP-PLATE" className="logo" />
          </Link>

          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`hamburger-line ${isMenuOpen ? "open" : ""}`}
            ></span>
            <span
              className={`hamburger-line ${isMenuOpen ? "open" : ""}`}
            ></span>
            <span
              className={`hamburger-line ${isMenuOpen ? "open" : ""}`}
            ></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/privacy-policy"
              className={
                location.pathname === "/privacy-policy" ? "active" : ""
              }
              onClick={closeMenu}
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact-us"
              className={location.pathname === "/contact-us" ? "active" : ""}
              onClick={closeMenu}
            >
              Contact us
            </Link>
            <Link
              to="/home-installation"
              className={
                location.pathname === "/home-installation" ? "active" : ""
              }
              onClick={closeMenu}
            >
              Home Installation
            </Link>
            <Link
              to="/track-order"
              className={location.pathname === "/track-order" ? "active" : ""}
              onClick={closeMenu}
            >
              Track Your Order
            </Link>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking/:type" element={<BookingDetails />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms-and-condition" element={<TermsAndCondition />} />
          <Route
            path="/reschedule-appointment"
            element={<RescheduleAppointment />}
          />
          <Route path="/refund-returns" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/home-installation" element={<HomeInstallation />} />
          <Route path="/track-order" element={<TrackOrder />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
