import './About.scss';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__grid">
          <div className="about__content">
            <h3 className="about__title">About DynamicDuo</h3>
            <p className="about__description">
              We are a dynamic team of professionals dedicated to providing exceptional business solutions. With years of experience and a passion for innovation, we help companies achieve their goals and thrive in a competitive landscape.
            </p>
            <div className="about__features">
              <div className="about__feature">
                <div className="about__icon about__icon--blue">
                  <svg className="about__svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="about__feature-text">
                  <h4 className="about__feature-title">Expert Team</h4>
                  <p className="about__feature-description">
                    Our team consists of industry experts with diverse backgrounds and skills.
                  </p>
                </div>
              </div>
              <div className="about__feature">
                <div className="about__icon about__icon--green">
                  <svg className="about__svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="about__feature-text">
                  <h4 className="about__feature-title">Proven Results</h4>
                  <p className="about__feature-description">
                    We have a track record of delivering successful projects and satisfied clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about__mission">
            <div className="about__mission-card">
              <h4 className="about__mission-title">Our Mission</h4>
              <p className="about__mission-description">
                To empower businesses with cutting-edge technology and innovative strategies that drive growth and success. We believe in building long-term partnerships and delivering value that exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;