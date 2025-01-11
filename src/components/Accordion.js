import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleOnClick = (index) => {
    if (activeIndex === index) {
      return setActiveIndex(null);
    } else {
      return setActiveIndex(index);
    }
  };
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === activeIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
      </span>
    );

    return (
      <div key={index}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleOnClick(index)}
        >
          {item.title} {icon}
        </div>

        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
