import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects";
import Learning from "./components/Learning";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Learning />
      <Contact />
    </>
  );
}

export default App;

const root = document.getElementById("root");
if (!root) throw new Error("root not found");
