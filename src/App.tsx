import React from "react";

import { People } from "./interfaces/People";
import PeopleData from "./Components/PeopleData";

const App: React.FC = () => {
  const myPeoples: People[] = [
    {
      id: 4,
      Name: "Rakesh",
      add:"CRP",
      age: 25,
      mob:8976765612,
    },
    {
      id: 7,
      Name: "Biswajit",
      add:"Rasulghar",
      age: 25,
      mob:8901765612,
    },
    {
      id: 10,
      Name: "Jitendra",
      add:"Banivihar",
      age: 25,
      mob:8974565612,
    },
    
  ];
  return (
    <div>
      <h1>React DataTable with TypeScript</h1>
      <PeopleData myPeoples={myPeoples} /> 
    </div>
  );

};

export default App;
