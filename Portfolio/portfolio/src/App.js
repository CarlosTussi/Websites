import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PopUpProvider from './components/contexts/PopUpProvided';
import PopUp from './components/PopUp';
import ProjectCardProvider from './components/contexts/ProjectCardProvider';

function App() {
  return (
    <ChakraProvider>
      <PopUpProvider>
      <main>
        <Header />
        <LandingSection />

        <ProjectCardProvider>
          <ProjectsSection />
        </ProjectCardProvider>
        
        <ContactSection />
        <Footer />
        <PopUp />       
      </main>
      </PopUpProvider>
    </ChakraProvider>
  );
}

export default App;
