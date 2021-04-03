import "./App.css";
import React from "react";
import Table from "./components/Table";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Horizontal from "./components/Horizontalrule.js";
function App() {
  return (
    <div className="App">
      <header class="font-serif">
        <h1>oneForAll (One point for all resources and opportunities)</h1>
      </header>

      <Intro />
      <br></br>
      <Table />

      <Horizontal />
      <Table />
      <Table />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
