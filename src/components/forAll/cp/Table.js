import React from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import { cpData } from "components/Data";
import "components/Table.css";

const all_data = cpData.map((e) => ({
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
    name: <strong>Name</strong>,
    selector: "title",
    wrap: true,
    center: 1,
    cell: (row) => <div style={{ fontWeight: 700 }}>{row.title}</div>,
  },
  {
    name: <strong>Info</strong>,
    // selector: "info",
    cell: (d) => <Infos {...d} />,
    wrap: true,
    center: 1,
    grow: 2.5,
  },
  {
    name: <strong>Link</strong>,
    // selector: "link",
    cell: (d) => <Links {...d} />,
    center: 1,
    wrap: true,
  },
];

const customStyles = {
  rows: {
    style: {
      minHeight: "90px", // override the row height
      fontSize: "16.5px",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      fontSize: "19px",
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
    <div className="table">
      <Card>
        <div className="divcolor">
          <h1 class="alignset">Competitive Programming Contests</h1>

          <p class="alignp">
            Some useful links to practice and learn CP : <br></br>
            <a class="changeColor_a" href="https://codeforces.com/">
              Codeforces
            </a>
            ,{" "}
            <a class="changeColor_a" href="https://cp-algorithms.com/">
              CP-Algorithms
            </a>
            ,{" "}
            <a class="changeColor_a" href="https://www.topcoder.com/">
              Topcoder
            </a>
            ,{" "}
            <a class="changeColor_a" href="https://www.codechef.com/">
              Codechef
            </a>
            .
          </p>
        </div>
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
