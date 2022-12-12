import './App.css';

import Header from './components/Header';
import Footer from './components/Footer'
// import {Promo, Services} from './components/Main';
import Main from './components/Main';

import {Routes, Route, Link} from 'react-router-dom';
import React, {useRef} from 'react';

import About from './components/About';
import  Booking from './components/Booking';

function App() {
  const refScroll = useRef();

  return (
    <>
     <Header />

     <nav>
      <ul>
        <li><Link className='navBtn' to="/">Home</Link></li>
        <li><Link className='navBtn' onClick={(e) =>{
            e.preventDefault();
            refScroll.current.scrollIntoView({behavior: "smooth", block: "center"});
        } }>Services</Link></li>
        <li><Link className='navBtn' to="/booking">Booking</Link></li>
        <li><Link className='navBtn' to="/about">About</Link></li>
      </ul>
     </nav>
     
    <Routes>
      <Route path='/' element={<div ref={refScroll}><Main/></div>}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path ='/booking' element={<Booking/>}/>
    </Routes>

    {/* <h1 ref={scrollServices}>Header at the bottom</h1> */}
     <Footer />
     </>
  );
}

export default App;
