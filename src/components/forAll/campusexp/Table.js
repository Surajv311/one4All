import React from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import data from "./Data";
// import "../../Table.css";
import "components/Table.css"; //absolute import..., jsconfig.json,...

const all_data = data.map((e) => ({
  ...e,
}));

const Test = (ee) => (
  <div className="changeColor">
    <a href={ee.year}>Link</a>
  </div>
);
const Test1 = (ee) => <p>{ee.info}</p>;

const columns = [
  {
    name: "Name",
    selector: "title",
    wrap: true,
    center: 1,
  },
  {
    name: "Info",
    // selector: "email",
    cell: (dd) => <Test1 {...dd} />,
    wrap: true,
    center: 1,
  },
  {
    name: "Link",
    // selector: "email",
    cell: (dd) => <Test {...dd} />,
    grow: 2,
    center: 1,
  },
];

const customStyles = {
  rows: {
    style: {
      minHeight: "85px", // override the row height
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

const title = (
  <div>
    <h1 className="alignset"> All data </h1>
  </div>
);
function Table() {
  return (
    <div className="font-serif table">
      <Card>
        {/* <h1 class="alignset">all resources data</h1> */}
        <DataTable
          title={title}
          columns={columns}
          data={all_data}
          customStyles={customStyles}
        />
      </Card>
    </div>
  );
}
export default Table;
