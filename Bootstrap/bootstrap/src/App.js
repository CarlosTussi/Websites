import Header from './Header';
import Nav from './Nav';
import Adds from './Adds';
import Main from './Main';
import Footer from './Footer';

import { Container, Col, Row } from 'react-bootstrap';



function App() {
  return (
    <>
    <Container as="body" className="text-center">
      <Row>
        <Col sm={12} md={{span:3,  order:2}}><Nav /></Col>
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
