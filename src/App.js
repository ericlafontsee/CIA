import React from "react";
import Header from "./components/Header";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Jumbotron />
      <Card />
      <Card2 />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
