import './styles.css';

import HamburgerMenuProvider from "./providers/HamburgerMenuProvider";
import Home from './pages/Home';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Work from './pages/Work';
import About from './pages/About';

function App() {
  return (
    <>
    <main>
      
        <HamburgerMenuProvider> 
            
          <header>
              <Logo />          
              <Nav />        
          </header>    
          <main>
            <Home />
            <Work />
            <About />
          </main>

        </HamburgerMenuProvider>
    

    </main>
    </>
  );
}

export default App;