// src/components/Footer.jsx

import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaChevronUp,
} from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* Верхний ряд: инфа + быстрые ссылки */}
        <div className="footer-top-row">
          <div className="footer-info">
            <h3>Institute for Interdisciplinary Studies</h3>
            <div className="social-follow">
              <span>Follow us on social media</span>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="quick-links">
            <h4>Quick links</h4>
            <ul>
              <li>
                <a href="#">&gt; About</a>
              </li>
              <li>
                <a href="#">&gt; News and events</a>
              </li>
              <li>
                <a href="#">&gt; Contact and location</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижний ряд: лого, соцсети, навигация */}
        <div className="footer-bottom-row">
          <div className="footer-brand">
            <h2>Logo</h2>
            <div className="footer-socials">
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <nav className="footer-bottom-nav">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Authors</a>
              </li>
              <li>
                <a href="#">Archive</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </nav>
        </div>

        <button
          className="back-to-top"
          onClick={scrollToTop}
          title="Back to top"
        >
          <FaChevronUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
