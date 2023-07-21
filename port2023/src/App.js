import './styles.css';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Ellipses from './components/Ellipses';

import HamburgerMenuProvider from './providers/HamburgerMenuProvider';
import Contact from './pages/Contact';
import { Fade, Slide } from 'react-awesome-reveal';



function App() {
  return (
    <div>
      <HamburgerMenuProvider>
        <Header />
        <Ellipses />
        <Home />
        <Fade duration="1000">
          <Work />
        </Fade>
        <Fade duration="1000">
          <About />
        </Fade>      
          <Contact />
        <Footer />
      </HamburgerMenuProvider>
    </div>
  );
}

export default App;
 