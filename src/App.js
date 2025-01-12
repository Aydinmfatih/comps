import { useState, useEffect } from "react";
import Dropdown from "./components/Dropdown";

function App() {
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
    <div className="flex justify-center items-center h-screen">
      <Dropdown value={selection} onChange={handleSelect} options={options} />
 
    </div>
  );
}

export default App;
