import React from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import data from "./Data";
import "components/Table.css";

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
        <h1 class="alignset"> Miscellaneous Opportunities</h1>

        <DataTable
          columns={columns}
          data={all_data}
          customStyles={customStyles}
        />
        <br></br>
        <hr></hr>
        <p class="alignp">
          (Apart from the list , a great platform for updates on such
          opportunities is :
          <a class="changeColor_a" href="https://scholarshiptrack.org/">
            Scholarshiptrack
          </a>
          .
        </p>
        <br></br>
      </Card>
    </div>
  );
}
export default Table;
