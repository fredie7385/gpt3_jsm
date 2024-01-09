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
