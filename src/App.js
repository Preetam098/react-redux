import React, { Component }  from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Navbar from './components/Navbar'
import UseMemo from "./components/Hooks/useMemo";
import Login from './components/Login';
import Charts from './components/Charts';
import Search from './components/searchBar/search';
import AddMultiple from './components/add-multi';

function App() {
  return (
    <> 
      <Routes>
        <Route index element={<Login />}/>
        <Route path="home"  element={<> <Navbar/><Home /> </>} />
          <Route path="useMemo" element={<> <Navbar/><UseMemo /> </>} />
           <Route path="layout" element={<> <Navbar/><Layout /> </>} />
           <Route path="chart" element={<> <Navbar/><Charts /> </>} />
           <Route path="search" element={<> <Navbar/><Search /> </>} />
           <Route path="add-multiple" element={<> <Navbar/><AddMultiple /> </>} />

      </Routes>
    </>
  );
}

export default App;