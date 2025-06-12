import './index.scss';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';

function Footer() {
    return (
        <footer className="tonymart-footer">
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

            <div className="footer-bottom">
                <h3>Feeding Africa, One Farm at a Time.</h3>
                <p>— Quality livestock & processed produce from Nigeria to the world.</p>
            </div>
            <small>Built by Dexter's Lahb, ©Tony-Mart Agro Farms</small>
        </footer>
    );
}

export default Footer;
