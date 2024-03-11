
import './App.css';
import Header from "../src/components/Header/Header.jsx";
import Hero from './components/UI/Hero.jsx';
import Home from './components/UI/Home.jsx';
import Services from './components/UI/Services.jsx';
import Pricing from './components/UI/Pricing.jsx';
import Testimonials from './components/UI/Testimonials.jsx';
import Signup from './components/UI/Signup.jsx';
import Footer from './components/footer/Footer.jsx';


function App() {
  return (<>
   <Header />
   <Hero />
   <Home />
   <Services />
   <Pricing />
   <Testimonials />
   <Signup />
   <Footer />
   </>
  
  
  );
}

export default App;
