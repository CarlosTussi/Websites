import './App.css';
import { ChakraProvider, } from '@chakra-ui/react'
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import ServicePage from './components/ServicePage';
import ContactPage from './components/ContactPage';
import PopUp from './components/PopUp';
import PopUpProvider from './contexts/PopUpProvider';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <ChakraProvider>
      <PopUpProvider>
        <Nav />      
        <LandingPage />
        <ServicePage />  
        <Portfolio />
        <ContactPage />            
        <PopUp />
      </PopUpProvider>    
    </ChakraProvider>
  );
}

export default App;
