import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer'
import {Promo, Services} from './components/Main';


function App() {
  return (
    <>
     <Header />
     <Nav />
     <main>
      <Promo />
      <Services />
    </main>
     <Footer />
     </>
  );
}

export default App;
