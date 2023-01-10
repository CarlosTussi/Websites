import Header from './Header';
import Navigation from './Navigation';
import Adds from './Adds';
import Main from './Main';
import Footer from './Footer';

import { Container, Col, Row } from 'react-bootstrap';



function App() {
  return (
    <>
    <Container className="mt-4">
      <Row>
        <Col sm={12} md={{span:3,  order:2}}><Navigation /></Col>
        <Col sm={12} md={{span:12, order:1}}><Header /></Col>        
        <Col sm={12} md={{span:6,  order:3}}><Main /></Col>
        <Col sm={12} md={{span:3,  order:4}}><Adds /></Col>
        <Col sm={12} md={{span:12, order:5}}><Footer /></Col>
      </Row>
    </Container>
    </>
    
  );
}

export default App;
