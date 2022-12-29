/** @format */
import logo from "../../assets/logo.svg";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer section__padding ">
        <h1 className="footer__heading gradient__text">
          Do you want to step in to the future before others
        </h1>
        <button className="footer__button">Request Early Access</button>
        <div className="footer__container">
          <div className="footer__brand">
            <img src={logo} className="footer__img" alt="" />
            <small className="footer__rights">
              Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
            </small>
          </div>
          <div className="footer__uls">
            <ul className="footer__links">
              <li className="footer__links-head">Links</li>
              <li>
                <a href="#">Overons</a>
              </li>
              <li>
                <a href="#">Social Media</a>
              </li>
              <li>
                <a href="#">Counters</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul className="footer__company">
              <li className="footer__company-head">Company</li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul className="footer__get">
              <li className="footer__get-head">Get in touch</li>
              <li>Crechterwoord K12 182 DK Alknjkcb</li>
              <li>085-132567</li>
              <li>info@payme.net</li>
            </ul>
          </div>
        </div>
        <small className="footer__footer">
          &copy; 2021 GPT-3. All rights reserved.
        </small>
      </div>
    </>
  );
}

export default Footer;
