import {
  Header,
  FeaturesShowcase,
  Hero,
  Features,
  About,
  Contact,
  Footer,
} from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero /> 
      <FeaturesShowcase />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
