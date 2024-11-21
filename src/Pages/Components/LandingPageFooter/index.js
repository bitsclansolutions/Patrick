import React from "react";
import "./landingPageFooter.css";
import { ReactComponent as HeaderIcon } from "../icons/header-icon.svg";

function LandingPageFooter() {
  return (
    <div className="footer-container">
      <div className="footer-inner-container">
        <div className="main-icon-wrapper">
          <HeaderIcon />
        </div>
        <div className="footer-options-wrapper">
          <div className="footer-options">
            <p className="footer-options-heading">About Demeterkast</p>
            <p className="footer-option-p">Company Overview</p>
            <p className="footer-option-p">Testimonials</p>
          </div>
          <div className="footer-options">
            <p className="footer-options-heading">Contact</p>
            <p className="footer-option-p">Contact Us</p>
            <p className="footer-option-p">Technical Support</p>
            <p className="footer-option-p">Feedback</p>
            <p className="footer-option-p">Community Forum</p>
          </div>
        </div>
        <div className="footer-bottom-wrapper">
          <p>©2024 Patrick · All rights reserved.</p>
          <div className="footer-bottom-options">
            <p>Term of use</p>
            <p>Privacy policy</p>
            <p>Security</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageFooter;
