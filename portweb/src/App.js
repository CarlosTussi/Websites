import './styles.css';

import { GitHub, Linkedin } from 'react-feather';

import HamburgerMenuProvider from "./providers/HamburgerMenuProvider";
import Home from './pages/Home';
import Logo from './components/Logo';
import Work from './pages/Work';
import About from './pages/About';
import Nav from './components/Nav';


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
          <footer>
            <div className='footer-social-git'>
              <GitHub size="4.5vh"/>
            </div>
            <div className='footer-social-linkedin'>
              <Linkedin size="4.5vh"/>
            </div>            
            <p>&copy; 2023 Carlos Tussi.</p>
          </footer>

        </HamburgerMenuProvider>
    

    </main>
    </>
  );
}

export default App;