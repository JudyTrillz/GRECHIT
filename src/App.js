import React from "react";
//* Importing Components =====>>
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Home,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";

// Importing Assets =====>>
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default App;
