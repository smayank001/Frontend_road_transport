import React from "react";
import "./FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      question: "Why are HSRPs mandatory for vehicles?",
      answer:
        "HSRPs are required by the Ministry of Road Transport and Highways (MoRTH) to enhance vehicle identification, reduce counterfeiting and theft, and improve overall road safety by ensuring vehicles are easily traceable.",
    },
    {
      question: "What makes HSRPs unique?",
      answer:
        "HSRPs incorporate multiple security features like snap-locks, holograms, and distinct identification numbers, making them challenging to tamper with or replicate.",
    },
    {
      question: "What are the benefits of HSRPs?",
      answer:
        "HSRPs provide several advantages, including anti-counterfeiting features, improved tracking in the event of theft, standardized registration plate formats, and increased security compared to traditional number plates.",
    },
    {
      question: "How much does it cost to get an HSRP?",
      answer:
        "The cost of HSRP varies with vehicle type, typically ranging from Rs. 400 for two-wheelers to Rs. 1,100 for four-wheelers, with an additional fee for color-coded stickers.",
    },
    {
      question: "What should I do if my HSRP is lost or damaged?",
      answer:
        "If your HSRP is lost or damaged, you can apply for a duplicate HSRP through the official 'Book My HSRP' website by providing the necessary documentation and making the payment.",
    },
    {
      question: "Are HSRPs only required for new vehicles?",
      answer:
        "No, HSRPs are mandatory for both new and existing vehicles. Owners of vehicles purchased before April 2019 must install HSRPs to comply with regulatory requirements.",
    },
    {
      question: "How can I apply for an HSRP for my vehicle?",
      answer:
        "You can apply for an HSRP online via the official government portal or at your local Regional Transport Office (RTO), depending on your state of residence.",
    },
    {
      question: "Why is the color-coded sticker significant?",
      answer:
        "The color-coded sticker serves as a visual indicator of a vehicle's registration status, corresponding with the HSRP number plate. It must be displayed on the front windshield, aiding authorities in verifying compliance with HSRP regulations.",
    },
    {
      question: "What are the penalties for not having an HSRP?",
      answer:
        "Vehicle owners who do not comply with HSRP regulations may face fines ranging from ₹500 to ₹1,000, depending on the vehicle type. Repeat offenses could incur even higher penalties.",
    },
    {
      question:
        "Can I have the HSRP plate and color-coded sticker installed at home?",
      answer:
        "Yes, many states and authorized service providers offer home installation services for HSRP plates and color-coded stickers. You can access these services through the Book My HSRP.",
    },
    {
      question: "Can I transfer my HSRP plate to another vehicle?",
      answer:
        "No, HSRP plates are vehicle-specific and cannot be transferred to another vehicle. Each plate has a unique code linked to the specific vehicle's chassis and engine number, making it non-transferable.",
    },
    {
      question:
        "How long does it take to have an HSRP plate installed after booking?",
      answer:
        "After booking your HSRP plate online or through a dealer, installation typically takes a few days to a couple of weeks, depending on plate availability and the chosen service location. You will receive a notification on your registered mobile number when the plate is ready for installation.",
    },
    {
      question: "What happens if I miss my installation appointment?",
      answer:
        "If you miss your scheduled installation appointment, please contact our customer service to reschedule. It's important to have your HSRP installed promptly to comply with regulations.",
    },
    {
      question: "Can I track the status of my HSRP order?",
      answer:
        "Yes, you can easily track your HSRP order through our Order Tracking page by entering your order number and email address used during the purchase.",
    },
    {
      question: "Is there customer support available if I have more questions?",
      answer:
        "Absolutely! Our Customer Support team is available to assist you with any inquiries or concerns regarding HSRP and the installation process. Please feel free to reach out to us for help.",
    },
  ];

  return (
    <div className="faq-container">
      <h1>FAQs on HSRP Number Plates</h1>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>
              {index + 1}. {faq.question}
            </h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="disclaimer">
        <h3>Disclaimer:</h3>
        <p>
          The information provided in this FAQ section is intended for general
          informational purposes only. While we strive to keep the content
          accurate and up-to-date, please note that regulations, requirements,
          and procedures may vary based on location. The details shown
          (including costs, requirements, and procedures) may vary based on
          local RTO policies. Please consult your local transport authority or
          official sources for the most accurate and relevant information. The
          services mentioned are provided by hsrpsolution.org, an independent
          third-party service provider, and not affiliated with any government
          body. By using this information, you acknowledge that any reliance on
          the material provided is at your own risk.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
