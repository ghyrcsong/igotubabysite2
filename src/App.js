import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Directory from './pages/Directory';
import About from './pages/About';
import Contact from './pages/Contact'; 
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar dark color='pink' sticky='top' expand='md'>
        <Container>
          <h1>IGotYouBaby</h1>
          <h3>An Essential For Families With Baby</h3>
        </Container>
      </Navbar>
        <nav>
          <Link to='/'>Home</Link> | <Link to='/directory'>Directory</Link> | <Link to='/about'>About</Link> | <Link to='/contact'>Contact</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/directory' element={<Directory />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
