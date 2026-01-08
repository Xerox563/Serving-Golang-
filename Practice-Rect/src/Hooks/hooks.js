/*
 * What are Hooks?
- Hooks are special functions in React
- They let you use state, lifecycle, and other React features in functional components
Rules:
- Hooks must be called at the top level of a component
- Hooks must be called only inside React functional components
- Hooks must not be called inside loops, conditions, or nested functions
 */

import React from "react";
import { useFetchData } from "./useFetchData";
// Using Custom hook
function Getdata() {
  const { data } = useFetchData("https://jsonplaceholder.typicode.com/users/1");
  console.log(data);
  return (
    <div>
      <h1>Utilising Custom Hook</h1>
      <h2>Name: {data?.name}</h2>
    </div>
  );
}

export default Getdata;
