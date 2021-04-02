import "./App.css";
import React from "react";
import Table from "./components/Table";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <header class="font-serif">
        <h1>oneForAll (One point for all resources and opportunities)</h1>
      </header>

      <Intro />
      <Table />

      <Footer />
    </div>
  );
}

export default App;
