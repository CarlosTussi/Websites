import './styles.css';

import HamburgerMenuProvider from "./providers/HamburgerMenuProvider";
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
    <main>
      
        <HamburgerMenuProvider> 
        <div className='mobile'>
            <Header/>
        </div>
            <Home />
          
        </HamburgerMenuProvider>
    

    </main>
    </>
  );
}

export default App;