import { useState } from "react";
import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      title: "Accordion 1",
      content: "Content 1",
    },
    {
      title: "Accordion 2",
      content: "Content 2",
    },
    {
      title: "Accordion 3",
      content: "Content 3",
    },
  ];

  return <Accordion items = {items} />;
  
  
}

export default App;
