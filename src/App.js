
import './App.css';
import AboutMe from './Component/AboutMe';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Portofolio from './Component/Portofolio';
import Skills from './Component/Skills';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Portofolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
