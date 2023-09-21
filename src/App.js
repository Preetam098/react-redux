import React, { Component }  from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Navbar from './components/Navbar'
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Login from './components/Login';


function App() {
  return (
    <> 
      <Routes>
        <Route index element={<Login />}/>
        <Route path="home"  element={<> <Navbar/><Home /> </>} />
          <Route path="cart" element={<> <Navbar/><Cart /> </>} />
          <Route path="contact" element={<> <Navbar/><Contact /> </>} />
           <Route path="layout" element={<> <Navbar/><Layout /> </>} />
      </Routes>
    </>
  );
}

export default App;