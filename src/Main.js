import "./Main.css";
import "./fonts.css";
import React from "react";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Ribbon from "./components/Ribbon";
import Line from "./components/Line.js";
// import LineThick from "./components/LineThick.js";
import LineLong from "./components/LineLong.js";
import BreakLine from "./components/BreakLine.js";
import TableCampusExp from "./components/forAll/campusexp/Table";
import Cpc from "./components/forAll/cp/Table";
import Externship from "./components/forAll/externship/Table";
import Hackathons from "./components/forAll/hackathons/Table";
import Miscopp from "./components/forAll/miscOpportunities/Table";
import Opensource from "./components/forAll/opensource/Table";
import Research from "./components/forAll/research/Table";
import ScholarshipW from "./components/forWomen/scholarship/Table";
import MentorshipW from "./components/forWomen/mentorship/Table";
import DiversityW from "./components/forWomen/diversityhire/Table";
import HackathonW from "./components/forWomen/hackathoncontests/Table";
import ProgrammingW from "./components/forWomen/programmingcontests/Table";
import Resources from "./components/resourcesforAll/Table";
import Scrollup from "./components/Scrollup";

function Main() {
  return (
    <div className="App">
      <header>
        <h1 className="head">one4All</h1>
        <p className="para">One point for all resources & opportunities</p>
      </header>
      <Ribbon />
      <Intro />
      <BreakLine />
      <Line />
      <h1 class="htag">
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
      {/* <LineThick /> */}
      <LineLong />
      <h1 class="font-serif htag">
        Opportunities <strong>exclusively for women</strong>
      </h1>
      <BreakLine />

      <ScholarshipW />
      <Line />
      <DiversityW />
      <Line />
      <MentorshipW />
      <Line />
      <ProgrammingW />
      <Line />
      <HackathonW />
      {/* <LineThick /> */}
      <LineLong />
      <h1 class="font-serif htag">
        <strong>Resources</strong>
      </h1>
      <BreakLine />
      <Resources />
      <BreakLine />
      <LineLong />
      {/* <BreakLine /> */}
      <Scrollup />
      <Footer />
    </div>
  );
}

export default Main;
