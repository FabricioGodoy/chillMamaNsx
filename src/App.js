import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navBar/navBar";
import { Login } from "./components/navBar/login/login";
import { Register } from "./components/navBar/login/register/register";
import { Home } from "./components/home/home";
import { Footer } from "./components/footer/footer";

import { Collection } from "./components/navBar/collection/collection";
import { GamingPcs } from "./components/navBar/gamingPcs/gamingPcs"
import { OfficePcs } from "./components/navBar/officePcs/officePCs";
import { ComponentsNavBar } from "./components/navBar/ComponentsNavBar/componentsNavBar";
import { Peripherals } from "./components/navBar/peripherals/peripherals";
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
      

        <Route path="/collection" element={<Collection />} />
        <Route path="/gamingPcs" element={<GamingPcs />} />
        <Route path="/officePcs" element={<OfficePcs />} />
        <Route path="/componentsNavBar" element={<ComponentsNavBar />} />
        <Route path="/peripherals" element={<Peripherals />} />
        <Route path="/cardGamersDetail/:catId" element={<CardGamersDetail />} />
        <Route path="/cardOfficeDetail/:catId" element={<CardOfficeDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
