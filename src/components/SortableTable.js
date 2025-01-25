import { useState } from "react";
import Table from "./Table";

function SortableTable(props) {
  const { config,data } = props;
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
        <th onClick={() => handleClick(column)}>{column.label} IS SORTABLE</th>
      ),
    };
  });

  let sortedData = data;
  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} config={updatedConfig} />
    </div>
  );
}

export default SortableTable;
