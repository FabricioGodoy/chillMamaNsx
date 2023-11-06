import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navBar/navBar";
import { Login } from "./components/navBar/login/login";
import { Register } from "./components/navBar/login/register/register";
import { Home } from "./components/home/home";
import { Footer } from "./components/footer/footer";

import { Buzos } from "./components/navBar/buzos/buzos";
import { Remeras } from "./components/navBar/remeras/remeras"
import { Kids } from "./components/navBar/kids/kids";
import { ComponentsNavBar } from "./components/navBar/ComponentsNavBar/componentsNavBar";
import { Releases } from "./components/navBar/releases/releases";
import 'bootstrap/dist/css/bootstrap.min.css';
import SlideHome from "./components/home/fragments/slider/SlideHome";
import { CardGamersDetail } from "./components/home/fragments/cardGamersDetail";
import { CardOfficeDetail } from "./components/home/fragments/cardOfficeDetail";
  
function App() {
  return (
    <Router>
      <NavBar />
      <SlideHome />

      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      

        <Route path="/buzos" element={<Buzos />} />
        <Route path="/remeras" element={<Remeras />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/componentsNavBar" element={<ComponentsNavBar />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/cardGamersDetail/:catId" element={<CardGamersDetail />} />
        <Route path="/cardOfficeDetail/:catId" element={<CardOfficeDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
