import {
  Header,
  FeaturesShowcase,
  Hero,
  Features,
  About,
  Contact,
  Footer,
  ThemeSwitcher,
} from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <ThemeSwitcher />
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
