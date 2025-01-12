import { useState,useEffect } from "react";

import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, onChange ,value}) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handler = (e) => {
      console.log(e.target);
    };
    document.addEventListener("click", handler,true);
    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, []);
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };


  const renderedItems = options.map((option) => {
    return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>;
  });


  return (
    <div className="w-48 relative ">
      <Panel className="flex justify-between items-center cursor-poiner" onClick={handleOnClick}>
        {value?.label || "Select..."}
        <GoChevronDown className="text-xl" />
      </Panel>
      {isOpen && <Panel className="absolute top-full border ">{renderedItems}</Panel>}
    </div>
  );
}

export default Dropdown;
