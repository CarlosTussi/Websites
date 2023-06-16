import './styles.css';

import HamburgerMenuProvider from "./providers/HamburgerMenuProvider";
import HeaderMobile from './components/HeaderMobile';
import Home from './pages/Home';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <>
    <main>
      
        <HamburgerMenuProvider> 
        <div className='mobile'>
            <HeaderMobile/>
        </div>
            
            <Nav />  
            <Header />          
            <Home />

        </HamburgerMenuProvider>
    

    </main>
    </>
  );
}

export default App;