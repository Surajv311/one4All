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

const columns = [
  {
    name: "Name",
    selector: "title",
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
      minHeight: "80px", // size changed...
      fontSize: "16px",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      fontSize: "18px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
};

function Table() {
  return (
    <div className="font-serif table">
      <Card>
        <h1 class="alignset"> Resource </h1>
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
