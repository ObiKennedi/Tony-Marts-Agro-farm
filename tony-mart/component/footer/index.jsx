import './index.scss';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="tonymart-footer">
      {/* Top Contact Info Row */}
      <div className="footer-contact">
        <div>
          <strong>Address:</strong><br />
          Awo-Omamma, Oru-East L.G.A., Imo State, South-East of Nigeria.
        </div>
        <div>
          <strong>Phone:</strong><br />
          +234 810 123 4567
        </div>
        <div>
          <strong>Email:</strong><br />
          info@tonymartsagrofarms.com
        </div>
        <div>
          <strong>Working Hours:</strong><br />
          Mon - Sat: 8am – 6pm
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="footer-main">
        <div className="footer-col brand-col">
          <img src="/images/logo.png" alt="Tony-Marts Agrofarms" className="logo" />
          <p>
            Tony-Marts Agrofarms is dedicated to nourishing Africa through reliable poultry, fishery, and processed food solutions. We are committed to quality, sustainability, and community growth.
          </p>
          <div className="socials">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <FaWhatsapp />
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick links</h4>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Stay updated</h4>
          <p>
            Get farm updates, offers, and seasonal product alerts. Stay in the loop with Tony-Marts.
          </p>
          <div className="email-subscribe">
            <input type="email" placeholder="Enter your email address" />
            <span className="send-icon">✉️</span>
          </div>
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="footer-bottom">
        <h3>Feeding Africa, One Farm at a Time.</h3>
        <p>— Quality livestock & processed produce from Nigeria to the world.</p>
      </div>
      <small>Built by Dexter's Lahb, ©Tony-Marts Agro-Farms</small>
    </footer>
  );
}

export default Footer;
