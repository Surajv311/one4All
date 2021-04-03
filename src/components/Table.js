import React from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import data from "./Data";
import "../index.css";

const all_data = data.map((e) => ({
  ...e,
}));

const Test = (ee) => <a href={ee.year}>Link</a>;
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

function App() {
  return (
    <div className="font-serif table">
      <Card>
        <h1 class="alignname">all resources data</h1>
        <DataTable
          title="all resources data"
          columns={columns}
          data={all_data}
          customStyles={customStyles}
        />
      </Card>
    </div>
  );
}
export default App;
