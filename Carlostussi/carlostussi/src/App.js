import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react'
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import ServicePage from './components/ServicePage';
import FullScreen from './components/FullScreen';
import ContactPage from './components/ContactPage';


function App() {
  return (
    <ChakraProvider>
      <Nav />      
      <LandingPage />
      <ServicePage />  
      <ContactPage />        
    </ChakraProvider>
  );
}

export default App;
