import { Link } from 'react-router-dom';
import heroMirchi from '../images/hero-mirchi.jpg.jpg';
import heroFruit from '../images/hero-fruit.jpg.jpg';
import heroSoda from '../images/hero-soda.jpg';
import heroIdly from '../images/hero-idly.jpg.jpg';
import serviceMirchi from '../images/service-mirchi.jpg';
import serviceFruit from '../images/service-fruit.png.jpg';
import serviceSoda from '../images/service-soda.jpg';
import serviceIdly from '../images/service-idly.jpg';

const services = [
  {
    title: 'Sri Sai Durga Mirchi Point',
    subtitle: 'Fresh evening snacks & party orders',
    image: serviceMirchi,
    to: '/mirchi-point'
  },
  {
    title: 'Sri Sai Durga Fruit Box',
    subtitle: 'Healthy fruit boxes for school delivery',
    image: serviceFruit,
    to: '/fruit-box'
  },
  {
    title: 'OG Soda',
    subtitle: 'Original goli soda in exciting flavours',
    image: serviceSoda,
    to: '/og-soda'
  },
  {
    title: 'Sri Sai Durga Idly & Dosa Batter',
    subtitle: 'Fresh batter for easy breakfasts',
    image: serviceIdly,
    to: '/idly-dosa'
  }
];

const highlights = [
  'Fresh Ingredients',
  'Premium Quality',
  'Affordable Pricing',
  'Quick Delivery',
  'Bulk Orders',
  'Customer Satisfaction'
];

const testimonials = [

  {
    quote: 'Amazing quality and timely delivery. Highly recommended.',
    name: 'Ramesh Kumar'
  },
  {
    quote: 'Fresh fruit boxes every morning. Kids love them.',
    name: 'Anitha Reddy'
  },
  {
    quote: 'Best Mirchi Bajji in Hyderabad.',
    name: 'Sandeep R.'
  }
];

export default function Home() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-copy">
          <span className="eyebrow">Shanmukh Food & Beverage</span>
          <h1>Fresh Food<br />Healthy Choices</h1>
          <p>Serving fresh snacks, healthy fruit boxes, original Goli Soda and traditional idly & dosa batter across Hyderabad with premium care.</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Explore Services</Link>
            <a href="tel:+919000278794" className="btn btn-secondary">Order Now</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image large">
            <img src={heroMirchi} alt="Mirchi Bajji" />
          </div>
          <div className="hero-image-row">
            <div className="hero-image small"><img src={heroFruit} alt="Fruit Box" /></div>
            <div className="hero-image small"><img src={heroSoda} alt="OG Soda" /></div>
            <div className="hero-image small"><img src={heroIdly} alt="Idly Batter" /></div>
          </div>
        </div>
      </section>

      <section className="section about-panel">
        <div>
          <span className="eyebrow">About Us</span>
          <h2>About Shanmukh Food & Beverage</h2>
        </div>
        <p>Shanmukh Food & Beverage is committed to delivering fresh, hygienic and delicious food products across Hyderabad. We proudly serve fresh evening snacks, healthy fruit boxes for school children, refreshing OG Goli Soda and ready-to-cook batter for busy families.</p>
      </section>

      <section className="section cards-grid">
        {services.map((service) => (
          <article key={service.title} className="feature-card card-image-top">
            <img src={service.image} alt={service.title} />
            <div className="card-content">
              <h3>{service.title}</h3>
              <p>{service.subtitle}</p>
              <Link to={service.to} className="btn btn-text">Explore Now</Link>
            </div>
          </article>
        ))}
      </section>

      <section className="section highlights-panel">
        <div>
          <span className="eyebrow">Why Choose Us</span>
          <h2>Premium quality, fresh ingredients and fast delivery.</h2>
        </div>
        <div className="highlight-grid">
          {highlights.map((item) => (
            <div key={item} className="highlight-card">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section testimonial-panel">
        <div className="section-header">
          <span className="eyebrow">Testimonials</span>
          <h2>Customers love our handpicked sourcing and fresh delivery.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <p>★★★★★</p>
              <p>{item.quote}</p>
              <strong>{item.name}</strong>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
