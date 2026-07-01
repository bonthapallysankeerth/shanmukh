import sodaImage from '../images/service-soda.jpg';
export default function OGsoda() {
  const flavours = [
    'Lemon Soda 🍋', 'Nannari Soda 🌿', 'Jeera Soda', 'Orange Soda 🍊', 'Cola Soda',
    'Ginger Soda', 'Pineapple Soda 🍍', 'Green Apple Soda 🍏', 'Blueberry Soda 🫐',
    'Strawberry Soda 🍓', 'Mango Soda 🥭', 'Mint Soda 🌱', 'Masala Soda', 'Salt Soda'
  ];

  return (
    <section className="page-panel">
      <div className="page-header">
        <span className="eyebrow">OG Soda</span>
        <h1>Original Goli Soda with Traditional Taste</h1>
        <p>Our OG Soda lineup brings back classic flavours with premium bottle service and franchise options.</p>
      </div>
      <div className="page-grid">
        <div className="page-copy">
          <h2>Available Flavours</h2>
          <ul>
            {flavours.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <h2>Franchise</h2>
          <p>Become an OG Soda franchise partner with full business support, training, marketing and premium branding.</p>
          <div className="button-row">
            <a className="btn btn-primary" href="tel:+919000278794">Call</a>
            <a className="btn btn-secondary" href="https://wa.me/919000278794" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className="page-image">
          <img src={sodaImage} alt="OG Soda Bottles" />
        </div>
      </div>
    </section>
  );
}
