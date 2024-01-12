import React from "react";
import { Article, Brand, Cta, Navbar } from "./components/Components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGpt3,
} from "./container/Container";
import "./App.css";
import SignUp from "./authentication/SignUp.jsx";

import Login from "./authentication/LogIn.jsx";

export default function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer /> 
    </div>
  );
}
