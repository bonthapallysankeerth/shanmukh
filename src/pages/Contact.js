export default function Contact() {
  return (
    <section className="page-panel contact-page">
      <div className="page-header">
        <span className="eyebrow">Contact</span>
        <h1>Reach Out to Shanmukh Food & Beverage</h1>
        <p>Send your enquiry, book bulk delivery or place a special order for events and school programmes.</p>
      </div>
      <div className="page-grid">
        <div className="contact-card panel-card">
          <h2>Business Details</h2>
          <p><strong>Owner:</strong> Shanmukh</p>
          <p><strong>Phone:</strong> 9000278794</p>
          <p><strong>Address:</strong> Shop No. 786, Suraram Village Road, Near Masjid, Hyderabad, Telangana 500055</p>
          <div className="map-embed">
            <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7793702083248!2d78.36293491487278!3d17.473841088011586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96f2cd773b03%3A0x0!2zMTfCsDI4JzM5LjAiTiA3OMKwMjEnNDcuMCJF!5e0!3m2!1sen!2sin!4v1700000000000" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <form className="contact-form panel-card">
          <label>Name<input type="text" placeholder="Your name" /></label>
          <label>Phone<input type="tel" placeholder="Your phone number" /></label>
          <label>Message<textarea rows="5" placeholder="How can we help you?"></textarea></label>
          <div className="button-row">
            <button type="submit" className="btn btn-primary">Send Message</button>
            <a className="btn btn-secondary" href="https://wa.me/919000278794" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </form>
      </div>
    </section>
  );
}
