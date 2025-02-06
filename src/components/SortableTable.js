import { useState } from "react";
import Table from "./Table";

function SortableTable(props) {
  const { config, data } = props;
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const handleClick = (column) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(column.label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(column.label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th className="cursor-pointer hover" onClick={() => handleClick(column)}>
          {getIcon(column.label,sortBy,sortOrder)}
          {column.label}</th>
      ),
    };
  });

  let sortedData = data;
  if (sortOrder && sortBy) {
    const {sortValue} = config.find(column => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
    const valueA = sortValue(a);
    const valueB = sortValue(b);
    const reverseOrder = sortOrder === "asc" ? 1 : -1;

    if (typeof valueA === "string") {
      return valueA.localeCompare(valueB) * reverseOrder;
    }
    else
    {
      return (valueA - valueB) * reverseOrder;
    }
    });

  }

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
