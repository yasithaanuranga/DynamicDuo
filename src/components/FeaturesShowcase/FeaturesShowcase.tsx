import './FeaturesShowcase.scss';

const FeaturesShowcase = () => {
  const features = [
    {
      id: 1,
      icon: '🤖',
      title: 'AI-Powered Solutions',
      description: 'Next-gen AI technology'
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Ultra-high performance'
    },
    {
      id: 3,
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security'
    },
    {
      id: 4,
      icon: '🌐',
      title: 'Global Scale',
      description: 'Worldwide infrastructure'
    }
  ];

  return (
    <div className="features-showcase">
      <div className="features-showcase__container">
        <div className="features-showcase__content">
          <h2 className="features-showcase__title">Future of Technology</h2>
          <p className="features-showcase__subtitle">Experience next-generation digital solutions</p>
        </div>
        <div className="features-showcase__cards">
          {features.map((feature) => (
            <div key={feature.id} className="features-showcase__card">
              <div className="features-showcase__card-icon">{feature.icon}</div>
              <h3 className="features-showcase__card-title">{feature.title}</h3>
              <p className="features-showcase__card-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="features-showcase__glow"></div>
    </div>
  );
};

export default FeaturesShowcase;