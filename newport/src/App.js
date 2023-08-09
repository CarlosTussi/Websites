import './styles.css'

import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import MobileNavProvider from './providers/MobileNavProvider';
import DesktopNavProvider from './providers/DesktopNavProvider';

function App() {

  return (
    <div>
      <MobileNavProvider>
      <DesktopNavProvider>
        <Header/>     
        <Home />
        <Work />
        <About />
        <Contact />
      </DesktopNavProvider>
      </MobileNavProvider>
    </div>
  );
}

export default App;
