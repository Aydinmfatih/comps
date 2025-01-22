import React from "react";
import Table from "./Table";

function SortableTable(props) {
  const { config } = props;

  const handleClick = (column) => {
    console.log(" Sorting by ", column.label);
  };
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column)}>
          {column.label} IS SORTABLE
        </th>
      ),
    };
  });

  return <Table {...props} config={updatedConfig} />;
}

export default SortableTable;
