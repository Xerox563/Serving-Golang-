import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/Routing/Main";
import Home from "./Components/Routing/Home";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;

// {} :  It does sanitization
// React.Fragment -> component which is exported by React , It groups list of childrens without adding extra nodes to the DOM. [</> , <React.Fragment>]
// Routes : define which route matches
// Route : defines url : component
