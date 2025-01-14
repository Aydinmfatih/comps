import {React,useState} from "react";
import Dropdown from "../components/Dropdown";
function DropDownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div className="flex justify-center">
      <Dropdown value={selection} onChange={handleSelect} options={options} />
      <Dropdown value={selection} onChange={handleSelect} options={options} />
    </div>
  );
}

export default DropDownPage;
