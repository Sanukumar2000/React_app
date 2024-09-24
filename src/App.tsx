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
    {
      id: 10,
      Name: "Urmila",
      add:"Patia",
      age: 23,
      mob:7876785645,
    },
    {
      id: 10,
      Name: "Priyanka",
      add:"Patia",
      age: 21,
      mob:3454323454,
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
