import { FiPhone, FiMessageCircle } from 'react-icons/fi';

export default function FloatingActions() {
  return (
    <div className="floating-actions">
      <a className="floating-action whatsapp" href="https://wa.me/919000278794" target="_blank" rel="noreferrer">
        <FiMessageCircle /> WhatsApp
      </a>
      <a className="floating-action call" href="tel:+919000278794">
        <FiPhone /> Call Now
      </a>
    </div>
  );
}
