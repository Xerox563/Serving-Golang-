import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import comp from "./Components/utils";
import { add as Addition, multiply } from "./Components/utils";
import SearchBar from "./Components/SearchBar";
const UserName = <h1>Amit Gangwar</h1>;

const App = () => {
  return (
    <div>
      {/* <Header />
      <Body />
      <Footer />
      Made by {UserName} of age {20 + 3} */}
      {/* <h3>Addition is : {Addition(8, 98)}</h3>
      <h3>Division is : {comp.divide(80, 9)}</h3>
      <h3>Power is : {comp.power(8, 2)}</h3>
      <h3>Multiplication of : {multiply(76, 78)}</h3> */}
      {/* <SearchBar /> */}
    </div>
  );
};

export default App;

// {} :  It does sanitization
// React.Fragment -> component which is exported by React , It groups list of childrens without adding extra nodes to the DOM. [</> , <React.Fragment>]
