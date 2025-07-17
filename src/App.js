import React from "react";
import { Routes, Route, Link } from "react-router-dom";
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
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">
            <img src="hsrp.png" alt="HSRP-PLATE" className="logo" />
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/contact-us">Contact us</Link>
            <Link to="/home-installation">Home Installation</Link>
            <Link to="/track-order">Track Your Order</Link>
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
