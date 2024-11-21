import React from "react";
import LandingPageHeader from "../Components/LandingPageHeader";
import HeroSection from "./Components/HeroSection";
import OverviewSection from "./Components/OverviewSection";
import FeaturesSection from "./Components/FeaturesSection";
import LearningMaterialSection from "./Components/LearningMaterialsSection";
import TestimonialSection from "./Components/Testimonial";
import SeamlessNavigationSection from "./Components/SeamlessNavigation";
import PaymentSection from "./Components/PaymentSection";
import FaqSection from "./Components/FaqSection";
import ContactUs from "./Components/ContactUs";
import ContactFormSection from "./Components/ContactForm";
import LandingPageFooter from "../Components/LandingPageFooter";

const LandingPage = () => {
  return (
    <>
      <div style={{ height: "100vh", overflowY: "scroll" }}>
        <LandingPageHeader />
        <HeroSection />
        <OverviewSection />
        <FeaturesSection />
        <LearningMaterialSection />
        <TestimonialSection />
        {/* <SeamlessNavigationSection /> */}
        <PaymentSection />
        <FaqSection />
        <ContactUs />
        <ContactFormSection />
        <LandingPageFooter />
      </div>
    </>
  );
};

export default LandingPage;
