import "./Main.css";
import React from "react";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Ribbon from "./components/Ribbon";
import Line from "./components/Line.js";

import Table from "./components/forAll/campusexp/Table";

function Main() {
  return (
    <div className="App">
      <header class="font-serif">
        <h1>oneForAll (One point for all resources and opportunities)</h1>
        {/* html tag ... <header>.. */}
      </header>
      <Ribbon />
      <Intro />
      <br></br>
      <h1>Opportunities for all</h1>
      <br></br>
      <Table />

      <Line />
      <Line />
      <h1>Opportunities for all</h1>
      <br></br>
      <Table />
      <Table />
      <Table />
      <Footer />
    </div>
  );
}

export default Main;
