import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import logo from './utils/img/logo.png'
import './App.css';

function App() {
  return (
    <div>
      <Navbar expand="lg" className="fixed-top bg-white shadow-sm">
  <Container>
    <Navbar.Brand>
      <Link to="/" className="navbar-brand text-dark fw-bold" style={{ letterSpacing: '0.09rem' }}>
      <img src={logo}  style={{ height:'50px', marginRight: '10px' }} />
        GreenTrace
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto justify-content-end w-100">
        <Nav.Link href="/" className="active text-uppercase" style={{ margin: '0 1rem' }}>Home</Nav.Link>
        <Nav.Link href="/about" className="text-uppercase" style={{ margin: '0 1rem' }}>About</Nav.Link>
        <Nav.Link href="/shop" className="text-uppercase" style={{ margin: '0 1rem' }}>Shop</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>



      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>

      <footer className='bg-body-tertiary'>
        <p className='p-3 m-0 text-center'>Copyright @ Made by Arushi & Sanskriti</p>
      </footer>
    </div>
  );
}

export default App;