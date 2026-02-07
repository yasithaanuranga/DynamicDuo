import './Features.scss';

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="features__container">
        <div className="features__header">
          <h3 className="features__title">Our Features</h3>
          <p className="features__subtitle">
            Discover what makes us the perfect partner for your business needs.
          </p>
        </div>
        <div className="features__grid">
          <div className="features__card">
            <div className="features__card-content">
              <div className="features__icon features__icon--blue">
                <svg className="features__svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="features__text">
                <h4 className="features__card-title">Fast Performance</h4>
                <p className="features__card-description">
                  Lightning-fast solutions that keep your business ahead of the competition.
                </p>
              </div>
            </div>
          </div>
          <div className="features__card">
            <div className="features__card-content">
              <div className="features__icon features__icon--green">
                <svg className="features__svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="features__text">
                <h4 className="features__card-title">Reliable Support</h4>
                <p className="features__card-description">
                  24/7 customer support to ensure your business runs smoothly.
                </p>
              </div>
            </div>
          </div>
          <div className="features__card">
            <div className="features__card-content">
              <div className="features__icon features__icon--purple">
                <svg className="features__svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="features__text">
                <h4 className="features__card-title">Quality Assurance</h4>
                <p className="features__card-description">
                  Top-notch quality in every solution we deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;