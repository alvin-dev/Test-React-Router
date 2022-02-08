import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Produtos from './pages/Produtos'
import Contato from './pages/Contato'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='sobre' element={<Sobre/>}/>
              <Route path='produtos' element={<Produtos/>}/>
              <Route path='contato' element={<Contato/>}/>
            </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
