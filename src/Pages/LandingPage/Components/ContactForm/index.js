import React from "react";
import "./contactForm.css";
import SectionsLayout from "../../../Components/Sectionslayout";
import ContactFormImg from "../images/contact-form-img.PNG";
import FormWrapper from "./formWrapper";

function ContactFormSection() {
  return (
    <SectionsLayout>
      <div className="contact-form-wrapper" id="contact">
        <div className="contact-form-left-wrapper">
          <img src={ContactFormImg} />
        </div>
        <div className="contact-form-right-wrapper">
          <FormWrapper />
        </div>
      </div>
    </SectionsLayout>
  );
}

export default ContactFormSection;
