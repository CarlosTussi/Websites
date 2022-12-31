import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import ServicePage from './components/ServicePage';

function App() {
  return (
    <ChakraProvider>
      <Nav />
      <LandingPage />
      <ServicePage />
    </ChakraProvider>
  );
}

export default App;
