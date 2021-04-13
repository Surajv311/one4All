import React from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import { resourcesData } from "components/Data";
import "components/Table.css";

const all_data = resourcesData.map((e) => ({
  ...e,
}));

const Links = (e) => (
  <div className="changeColor">
    <a href={e.link}>Link</a>
  </div>
);

const columns = [
  {
    name: <strong>Type</strong>,
    selector: "title",
    wrap: true,
    center: 1,
    cell: (row) => <div style={{ fontWeight: 700 }}>{row.title}</div>,
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
      minHeight: "75px", // size changed...
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
          <h1 class="alignset"> Resource </h1>
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
