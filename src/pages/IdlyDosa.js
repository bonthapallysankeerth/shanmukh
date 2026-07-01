import idlyImage from '../images/service-idly.jpg';
export default function IdlyDosa() {
  return (
    <section className="page-panel">
      <div className="page-header">
        <span className="eyebrow">Sri Sai Durga Idly & Dosa Batter</span>
        <h1>Fresh Batter for Healthy Breakfasts</h1>
        <p>Fresh idly and dosa batter made daily, with no preservatives and a soft texture that families love.</p>
      </div>
      <div className="page-grid reverse">
        <div className="page-copy">
          <h2>Benefits</h2>
          <ul>
            <li>Fresh Every Morning</li>
            <li>Traditional Taste</li>
            <li>Soft Idly</li>
            <li>Crispy Dosa</li>
            <li>No Preservatives</li>
          </ul>
          <h2>Products</h2>
          <div className="pricing-cards">
            <article className="pricing-card"><h3>Idly Batter</h3><p>Ready-to-cook batter for soft idlis.</p></article>
            <article className="pricing-card"><h3>Dosa Batter</h3><p>Perfect batter for crispy dosas.</p></article>
            <article className="pricing-card"><h3>Combo Pack</h3><p>Best value for family breakfasts.</p></article>
          </div>
          <div className="button-row">
            <a className="btn btn-primary" href="tel:+919000278794">Order Now</a>
            <a className="btn btn-secondary" href="https://wa.me/919000278794" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className="page-image">
          <img src={idlyImage} alt="Idly and Dosa Batter" />
        </div>
      </div>
      <div className="form-panel">
        <h2>Order Form</h2>
        <form className="order-form">
          <label>Customer Name<input type="text" placeholder="Enter your name" /></label>
          <label>Mobile Number<input type="tel" placeholder="Enter mobile number" /></label>
          <label>Required Quantity<select><option>1 kg</option><option>2 kg</option><option>Bulk Order</option></select></label>
          <label>Delivery Address<input type="text" placeholder="Delivery address" /></label>
          <label>Landmark<input type="text" placeholder="Nearby landmark" /></label>
          <label>Preferred Time<input type="time" /></label>
          <button type="submit" className="btn btn-primary">Submit Order</button>
        </form>
      </div>
    </section>
  );
}
