import React from "react";
import "./TermsAndCondition.css";
import Footer from "./Footer";

const TermsAndCondition = () => {
  const terms = [
    {
      title: "Acceptance of Terms",
      content:
        "By using our services, you confirm that you have read, understood, and agree to be bound by these Terms. We may modify these Terms periodically, and your continued use of our services after any changes signifies your acceptance of the updated Terms.",
    },
    {
      title: "Third-Party Service",
      content:
        "hsrpsolution.org is a third-party service that assists users with High-Security Registration Plates (HSRPs). We are not a government body and do not have any official affiliation with government agencies. All users are encouraged to verify any information provided through our services with official sources.",
    },
    {
      title: "Use of Services",
      content:
        "You agree to use our services solely for lawful purposes. You will not engage in any conduct that restricts or inhibits others from using or enjoying our services.",
    },
    {
      title: "User Accounts",
      content:
        "You may need to create an account to access certain features of our services. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You must provide accurate and complete information during the registration process.",
    },
    {
      title: "Order Processing and Cancellation",
      content:
        "All orders are subject to acceptance by us. We reserve the right to refuse or cancel any order at our discretion. You may cancel your order in accordance with our Refund and Return Policy.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content on our website, including text, graphics, logos, and images, is the property of hsrpsolution.org and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.",
    },
    {
      title: "Limitation of Liability",
      content:
        "To the fullest extent permitted by law, hsrpsolution.org shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.",
    },
    {
      title: "Indemnification",
      content:
        "You agree to indemnify, defend, and hold harmless hsrpsolution.org and its affiliates from any claims, losses, liabilities, damages, expenses, or costs arising out of your use of our services or violation of these Terms.",
    },
    {
      title: "Governing Law",
      content:
        "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these Terms shall be resolved in the courts of India.",
    },
    {
      title: "Contact Information",
      content:
        "If you have any questions about these Terms, please contact us at:\nEmail: online@bookhsrplates.com\nPhone: +919759248353 (Toll-Free)",
    },
  ];

  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>

      <p className="terms-intro">
        Welcome to hsrpsolution.org ("we," "our," or "us"). By accessing or
        using our website and services, you agree to comply with and be bound by
        the following terms and conditions ("Terms"). If you do not agree to
        these Terms, please refrain from using our services.
      </p>

      <div className="terms-list">
        {terms.map((term, index) => (
          <div key={index} className="terms-item">
            <h3>
              {index + 1}. {term.title}
            </h3>
            <p>{term.content}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndCondition;
