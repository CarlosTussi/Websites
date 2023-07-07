import Home from './pages/Home';
import HamburgerMenuProvider from './providers/HamburgerMenuProvider';
import './styles.css';

function App() {
  return (
 <body>
  <HamburgerMenuProvider>
    <Home />
  </HamburgerMenuProvider>
 </body>
  );
}

export default App;
