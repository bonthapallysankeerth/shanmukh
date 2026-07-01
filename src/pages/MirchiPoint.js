import { Link } from 'react-router-dom';
import mirchiImage from '../images/service-mirchi.jpg';
export default function MirchiPoint() {
  return (
    <section className="page-panel">
      <div className="page-header">
        <span className="eyebrow">Sri Sai Durga Mirchi Point</span>
        <h1>Fresh Evening Snacks & Party Orders</h1>
        <p>Delicious Mirchi Bajji, Punugulu, Egg Bonda, Tomato Bath and more made with premium ingredients and served hot.</p>
      </div>
      <div className="page-grid">
        <div className="page-copy">
          <h2>What we serve</h2>
          <ul>
            <li>Mirchi Bajji 🌶</li>
            <li>Punugulu</li>
            <li>Egg Bonda 🥚</li>
            <li>Tomato Bath 🍅</li>
            <li>Muntha Masala</li>
            <li>Masala Vada</li>
            <li>Samosa</li>
            <li>Onion Pakoda</li>
            <li>Mysore Bonda</li>
          </ul>
          <h2>Services</h2>
          <p>Birthday Parties, School Events, Hostels, Corporate Evening Snacks, Office Meetings, Functions, Festival Events and Parcel Delivery.</p>
          <div className="button-row">
            <a className="btn btn-primary" href="tel:+919000278794">Call Now</a>
            <a className="btn btn-secondary" href="https://wa.me/919000278794" target="_blank" rel="noreferrer">WhatsApp Order</a>
          </div>
        </div>
        <div className="page-image">
          <img src={mirchiImage} alt="Mirchi Bajji" />
        </div>
      </div>
      <div className="form-panel">
        <h2>Place an order</h2>
        <form className="order-form">
          <label>Customer Name<input type="text" placeholder="Enter your name" /></label>
          <label>Mobile Number<input type="tel" placeholder="Enter mobile number" /></label>
          <label>Order Items<textarea rows="3" placeholder="List your items"></textarea></label>
          <label>Quantity<input type="text" placeholder="Enter quantity" /></label>
          <label>Delivery Date<input type="date" /></label>
          <label>Location<input type="text" placeholder="Delivery address" /></label>
          <label>Landmark<input type="text" placeholder="Nearby landmark" /></label>
          <label>Special Instructions<textarea rows="3" placeholder="Any notes for delivery"></textarea></label>
          <div className="button-row">
            <button type="submit" className="btn btn-primary">Submit Order</button>
            <a className="btn btn-secondary" href="https://wa.me/919000278794?text=Hello,%20I%20would%20like%20to%20place%20an%20order.%20Name:%20%20Mobile:%20%20Order%20Items:%20%20Quantity:%20%20Delivery%20Address:%20%20Landmark:%20%20Please%20confirm%20my%20order." target="_blank" rel="noreferrer">WhatsApp Message</a>
          </div>
        </form>
      </div>
    </section>
  );
}
