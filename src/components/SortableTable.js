import { useState } from "react";
import Table from "./Table";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;

  const { sortedData, handleClick, sortBy, sortOrder } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover"
          onClick={() => handleClick(column)}
        >
          {getIcon(column.label, sortBy, sortOrder)}
          {column.label}
        </th>
      ),
    };
  });

  return (
    <div>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}

function getIcon(column, sortBy, sortOrder) {
  if (column !== sortBy) {
    return null;
  }
  if (sortOrder === "asc") {
    return "🔼";
  }
  return "🔽";
}
export default SortableTable;
