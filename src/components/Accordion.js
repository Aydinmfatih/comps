import React from "react";

function Accordion({ items }) {
  const renderedItems = items.map((item, index) => {
    return (
      <div key={index}>
        <div>{item.title}</div>
        <div>{item.content}</div>
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
