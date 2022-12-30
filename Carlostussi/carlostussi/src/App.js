import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import FullScreen from './components/FullScreen';

function App() {
  return (
    <ChakraProvider>
      <Nav />
      <LandingPage />
      <FullScreen />
    </ChakraProvider>
  );
}

export default App;
