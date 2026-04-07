import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
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
      <div className="footer-content">
        <div className="footer-left">
          <h3>Institute for Interdisciplinary Studies</h3>
          <p className="footer-text">
            Research, publications, and academic initiatives.
          </p>
        </div>

        <div className="footer-right">
          <nav className="footer-links">
            <a href="/news">News</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="footer-socials">
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/77000000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Institute for Interdisciplinary Studies</p>
      </div>
    </footer>
  );
}

export default Footer;