import { Header, Banner, Hero, Features, About, Contact, Footer } from './components';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Banner />
      <Header />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
