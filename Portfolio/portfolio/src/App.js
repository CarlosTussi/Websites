import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <LandingSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
