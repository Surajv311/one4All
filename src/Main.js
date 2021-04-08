import "./Main.css";
import React from "react";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Ribbon from "./components/Ribbon";
import Line from "./components/Line.js";
import LineThick from "./components/LineThick.js";
import BreakLine from "./components/BreakLine.js";
import TableCampusExp from "./components/forAll/campusexp/Table";
import Cpc from "./components/forAll/cp/Table";
import Externship from "./components/forAll/externship/Table";
import Hackathons from "./components/forAll/hackathons/Table";
import Miscopp from "./components/forAll/miscOpportunities/Table";
import Opensource from "./components/forAll/opensource/Table";
import Research from "./components/forAll/research/Table";
import Scholarship_w from "./components/forWomen/scholarship/Table";
import Mentorship_w from "./components/forWomen/mentorship/Table";
import Diversity_w from "./components/forWomen/diversityhire/Table";
import Hackathon_w from "./components/forWomen/hackathoncontests/Table";
import Programming_w from "./components/forWomen/programmingcontests/Table";
import Resources from "./components/resourcesforAll/Table";

function Main() {
  return (
    <div className="App">
      <header class="font-serif">
        <h1>oneForAll (One point for all resources and opportunities)</h1>
        {/* html tag ... <header>.. */}
      </header>
      <Ribbon />
      <Intro />
      <BreakLine />
      <Line />
      <h1 class="font-serif htag">
        Opportunities <strong>for everyone</strong>
      </h1>
      <BreakLine />
      <Hackathons />
      <Line />
      <TableCampusExp />
      <Line />
      <Cpc />
      <Line />
      <Externship />
      <Line />
      <Research />
      <Line />
      <Opensource />
      <Line />
      <Miscopp />
      <LineThick />
      <h1 class="font-serif htag">
        Opportunities <strong>exclusively for women</strong>
      </h1>
      <BreakLine />

      <Scholarship_w />
      <Line />
      <Diversity_w />
      <Line />
      <Mentorship_w />
      <Line />
      <Programming_w />
      <Line />
      <Hackathon_w />
      <LineThick />
      <h1 class="font-serif htag">
        <strong>Resources</strong>
      </h1>
      <BreakLine />
      <Resources />

      <LineThick />
      <BreakLine />
      <Footer />
    </div>
  );
}

export default Main;
