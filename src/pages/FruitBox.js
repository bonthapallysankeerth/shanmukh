import { Link } from 'react-router-dom';
import fruitImage from '../images/service-fruit.png.jpg';
export default function FruitBox() {
  return (
    <section className="page-panel">
      <div className="page-header">
        <span className="eyebrow">Sri Sai Durga Fruit Box</span>
        <h1>Healthy Morning Fruit Boxes for Children</h1>
        <p>Nutrition-rich fruit boxes made for school mornings, corporate gifting, and monthly meal plans.</p>
      </div>
      <div className="page-grid reverse">
        <div className="page-copy">
          <h2>Benefits</h2>
          <ul>
            <li>Rich in Vitamins</li>
            <li>Fresh Fruits</li>
            <li>Protein Rich</li>
            <li>Daily Morning Delivery</li>
            <li>Hygienic Packing</li>
          </ul>
          <div className="pricing-cards">
            <article className="pricing-card"><h3>Monthly Plan</h3><p>Fresh delivery every weekday.</p></article>
            <article className="pricing-card"><h3>Quarterly Plan</h3><p>Flexible and healthy fruit plans.</p></article>
            <article className="pricing-card"><h3>Yearly Plan</h3><p>Best savings for schools and families.</p></article>
          </div>
          <div className="button-row">
            <a className="btn btn-primary" href="tel:+919000278794">Call</a>
            <a className="btn btn-secondary" href="https://wa.me/919000278794" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className="page-image">
          <img src={fruitImage} alt="Fruit Box" />
        </div>
      </div>
      <div className="form-panel">
        <h2>Booking Form</h2>
        <form className="order-form">
          <label>Student Name<input type="text" placeholder="Student name" /></label>
          <label>Parent Name<input type="text" placeholder="Parent name" /></label>
          <label>School Name<input type="text" placeholder="School name" /></label>
          <label>Mobile Number<input type="tel" placeholder="Mobile number" /></label>
          <label>Address<input type="text" placeholder="Delivery address" /></label>
          <label>Preferred Plan<select><option>Monthly</option><option>Quarterly</option><option>Yearly</option></select></label>
          <button type="submit" className="btn btn-primary">Reserve Now</button>
        </form>
      </div>
    </section>
  );
}
