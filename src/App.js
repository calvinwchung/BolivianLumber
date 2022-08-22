import React from 'react';
import Header from './components/Header'
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import InventoryPage from './pages/InventoryPage';
import HomePage from './pages/HomePage';
import { Routes, Route, Redirect } from 'react-router-dom';
import Tajibo from './components/woodtypes/Tajibo'
import Pauqio from './components/woodtypes/Pauqio';
import Morado from './components/woodtypes/Morado';
import Tarara from './components/woodtypes/Tarara';
import Cuta from './components/woodtypes/Cuta'
import './App.css';

function App() {
  return (
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='contact' element={<ContactPage />} />
          {/* <Route path='/inventory' element={<InventoryPage />} /> */}
          <Route path='inventory' element={<InventoryPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='tajibo' element={<Tajibo />} />
          <Route path='pauqio' element={<Pauqio />} />
          <Route path='morado' element={<Morado />} />
          <Route path='tarara' element={<Tarara />} />
          <Route path='cuta' element={<Cuta />} />
          {/* <Route path="*"><NotFound/ ></Route> */}
        </Routes>
      </div>
  );
}

export default App;
