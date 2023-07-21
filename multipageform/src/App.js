import './styles.css'
import FormController from './pages/FormController';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>    
      <BrowserRouter>
        <FormController />  
      </BrowserRouter>
    </div>
  );
}

export default App;
