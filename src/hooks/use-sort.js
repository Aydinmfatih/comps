import { useState } from "react";
function useSort(data,config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const handleClick = (column) => {
    if (sortBy && column.label !== sortBy) {
      setSortOrder("asc");
      setSortBy(column.label);
      return;
    }
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
            return {sortedData, handleClick, sortBy, sortOrder};

}
export default useSort;
