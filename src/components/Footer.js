import { Link } from 'react-router-dom';
import { FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="footer-title">Shanmukh Food & Beverage</span>
        <p>Fresh snacks, fruit boxes, OG soda and batter crafted for every meal and occasion.</p>
      </div>
      <div className="footer-links">
        <p className="footer-heading">Quick Links</p>
        <Link to="/">Home</Link>
        <Link to="/mirchi-point">Mirchi Point</Link>
        <Link to="/fruit-box">Fruit Box</Link>
        <Link to="/og-soda">OG Soda</Link>
        <Link to="/idly-dosa">Idly & Dosa</Link>
      </div>
      <div className="footer-contact">
        <p className="footer-heading">Contact</p>
        <a href="tel:+919000278794"><FiPhone /> 9000278794</a>
        <p><FiMapPin /> Shop No. 786, Suraram Village Road, Near Masjid, Hyderabad, Telangana - 500055</p>
        <p><FiClock /> Mon - Sun, 7:00 AM - 9:00 PM</p>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Shanmukh Food & Beverage. All rights reserved.</p>
      </div>
    </footer>
  );
}
