import React from "react";

function Table({ data, config }) {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr className="border-b" key={index}>
            <td className="p-3">{item.name}</td>
            <td className="p-3">
              <div className={` p-3 m-2 ${item.color}`}></div>
            </td>
            <td className="p-3">{item.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
