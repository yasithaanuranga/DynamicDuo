import './ProductTeaser.scss';

const ProductTeaser = () => {
  const products = [
    {
      title: 'Pulse Desk Lamp',
      tag: 'New drop',
      copy: 'Warm glow, adjustable neck, and a hidden wireless charger.',
    },
    {
      title: 'MarbleSound Mini',
      tag: 'Staff pick',
      copy: 'Pocket speaker with deep bass and 18-hour playtime.',
    },
    {
      title: 'Arc Coffee Kit',
      tag: 'Bestseller',
      copy: 'Pour-over set with reusable filter and travel case.',
    },
  ];

  return (
    <section className="product-teaser" id="products">
      <div className="product-teaser__inner">
        <header className="product-teaser__header">
          <p className="product-teaser__eyebrow">Designed to be noticed</p>
          <h2 className="product-teaser__title">Our products, in a quick teaser</h2>
          <p className="product-teaser__subtitle">
            A peek at what we are building right now. Each product is tuned for
            bold spaces and even bolder routines.
          </p>
        </header>

        <div className="product-teaser__grid">
          {products.map((product) => (
            <article className="product-teaser__card" key={product.title}>
              <span className="product-teaser__tag">{product.tag}</span>
              <h3 className="product-teaser__card-title">{product.title}</h3>
              <p className="product-teaser__copy">{product.copy}</p>
              <button className="product-teaser__cta" type="button">
                Preview details
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTeaser;import './ProductTeaser.scss';

const ProductTeaser = () => {
  const products = [
    {
      title: 'Pulse Desk Lamp',
      tag: 'New drop',
      copy: 'Warm glow, adjustable neck, and a hidden wireless charger.',
    },
    {
      title: 'MarbleSound Mini',
      tag: 'Staff pick',
      copy: 'Pocket speaker with deep bass and 18-hour playtime.',
    },
    {
      title: 'Arc Coffee Kit',
      tag: 'Bestseller',
      copy: 'Pour-over set with reusable filter and travel case.',
    },
  ];

  return (
    <section className="product-teaser" id="products">
      <div className="product-teaser__inner">
        <header className="product-teaser__header">
          <p className="product-teaser__eyebrow">Designed to be noticed</p>
          <h2 className="product-teaser__title">Our products, in a quick teaser</h2>
          <p className="product-teaser__subtitle">
            A peek at what we are building right now. Each product is tuned for
            bold spaces and even bolder routines.
          </p>
        </header>

        <div className="product-teaser__grid">
          {products.map((product) => (
            <article className="product-teaser__card" key={product.title}>
              <span className="product-teaser__tag">{product.tag}</span>
              <h3 className="product-teaser__card-title">{product.title}</h3>
              <p className="product-teaser__copy">{product.copy}</p>
              <button className="product-teaser__cta" type="button">
                Preview details
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTeaser;