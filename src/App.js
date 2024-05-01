import React, { Component }  from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Navbar from './components/Navbar'
import Cart from "./components/Cart";
import UseMemo from "./components/Hooks/useMemo";
import Login from './components/Login';
import Charts from './components/Charts';
import ProjectList from './components/ProjectManage';
import RazorUi from './components/Razorpay/RazorUI';
import Crud from './components/Crud';
import RemoveItem from './components/Remove';

function App() {
  return (
    <> 
      <Routes>
        <Route index element={<Login />}/>
        <Route path="home"  element={<> <Navbar/><Home /> </>} />
          <Route path="cart" element={<> <Navbar/><Cart /> </>} />
          <Route path="useMemo" element={<> <Navbar/><UseMemo /> </>} />
           <Route path="layout" element={<> <Navbar/><Layout /> </>} />
           <Route path="chart" element={<> <Navbar/><Charts /> </>} />
           <Route path="project" element={<> <Navbar/><ProjectList /> </>} />
           <Route path="razor-pay" element={<> <Navbar/><RazorUi /> </>} />
           <Route path="crud" element={<> <Navbar/><Crud /> </>} />
           <Route path="remove" element={<> <Navbar/><RemoveItem /> </>} />


      </Routes>
    </>
  );
}

export default App;