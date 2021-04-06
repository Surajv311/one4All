import React from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import data from "./Data";
// import "../../Table.css";
import "components/Table.css"; //absolute import..., jsconfig.json,...

const all_data = data.map((e) => ({
  ...e,
}));

const Links = (e) => (
  <div className="changeColor">
    <a href={e.link}>Link</a>
  </div>
);
const Infos = (e) => <p>{e.info}</p>;

const columns = [
  {
    name: "Name",
    selector: "title",
    wrap: true,
    center: 1,
  },
  {
    name: "Info",
    // selector: "info",
    cell: (d) => <Infos {...d} />,
    wrap: true,
    center: 1,
  },
  {
    name: "Link",
    // selector: "link",
    cell: (d) => <Links {...d} />,
    // grow: 2,
    center: 1,
    wrap: true,
  },
];

const customStyles = {
  rows: {
    style: {
      minHeight: "90px", // override the row height
      fontSize: "16px",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      fontSize: "18px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

function Table() {
  return (
    <div className="font-serif table">
      <Card>
        <h1 class="alignset">Competitive Programming Competitions</h1>

        <p class="alignp">
          Some useful links exclusively to practice and learn CP : <br></br>
          <a class="changeColor_a" href="https://codeforces.com/">
            Codeforces
          </a>
          ,
          <a class="changeColor_a" href="https://cp-algorithms.com/">
            CP-Algorithms
          </a>
          ,
          <a class="changeColor_a" href="https://www.topcoder.com/">
            Topcoder
          </a>
          ,
          <a class="changeColor_a" href="https://www.codechef.com/">
            Codechef
          </a>
        </p>

        <DataTable
          columns={columns}
          data={all_data}
          customStyles={customStyles}
        />
      </Card>
    </div>
  );
}
export default Table;
