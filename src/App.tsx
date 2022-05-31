import React from "react";
import Solution from "./components/solution";

function App() {
  const menuConfig = [
    {
      title: "Home",
    },
    {
      title: "Services",
      subItems: ["Cooking", "Cleaning"],
    },
    {
      title: "Contact",
      subItems: ["Phone", "Mail"],
    },
  ];

  return (
    <div>
      <Solution menuConfig={menuConfig} />
    </div>
  );
}

export default App;
