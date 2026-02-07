import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h3 className="contact__title">Get in Touch</h3>
          <p className="contact__subtitle">
            Ready to take your business to the next level? Contact us today.
          </p>
        </div>
        <div className="contact__form-wrapper">
          <form className="contact__form">
            <div className="contact__field">
              <label htmlFor="name" className="contact__label">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="contact__input"
                placeholder="Your full name"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email" className="contact__label">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="contact__input"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message" className="contact__label">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="contact__textarea"
                placeholder="Tell us about your project..."
              />
            </div>
            <div className="contact__field">
              <button type="submit" className="contact__button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;