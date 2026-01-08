import { useState } from "react";

const Footer = () => {
  const [val, setVal] = useState("Button Not Clicked");
  return (
    <>
      <h1> This is the Footer </h1>
      <button onClick={() => setVal("Button Clicked")}>Click ME</button>
      <h3>Output : {val}</h3>
    </>
  );
};

export default Footer;

// We can nest React.Fragment inside the React.Fragment
