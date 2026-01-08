import React, { useEffect, useState } from "react";

const useEffectHook = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const d = await fetch("");
        const res = await d.json();
        setData(res);
      } catch (err) {
        console.log(err);
      } finally {
        console.log("Yae toh Chalega hi");
      }
    }
    getData();
  }, []);
  return (
    <div>
      <h1>Use effect Hook</h1>
      <h2>Name:{data.name}</h2>
    </div>
  );
};

export default useEffectHook;
