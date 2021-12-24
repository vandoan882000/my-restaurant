import './App.css';
import React from 'react';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import Order from './components/pages/Order';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/menu' element={<Menu/>} />
             <Route path='/order' element={<Order/>} />
             <Route path='/login' element={<Login/>} />
             <Route path='/register' element={<Register/>} />
          </Routes>
          <Footer />
          
      </Router>
      
    </>
  );
}

export default App;
