import React from "react";
import { Fragment } from "react";
function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column) => {
    if (column.header)
      return <Fragment key={column.label}>{column.header()}</Fragment>;

    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((item, index) => {
    const renderedCells = config.map((column) => {
      return (
        <td key={column.label} className="p-3">
          {column.render(item)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={keyFn(item)}>
        {renderedCells}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
