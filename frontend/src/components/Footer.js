import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__info">
        <p>Questions? Call 1-866-579-7172 </p>
        <p className="footer__mail">To add videos contact on upload@pov.com </p>
        </div>
        <div className="footer-cols">
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Coorporate Information</a>
            </li>
            <li>
              <a href="#">Netflix Originals</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Redeem Gift Cards</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Speed Test</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Buy Gift Cards</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
