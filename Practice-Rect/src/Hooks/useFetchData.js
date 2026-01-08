// Custom hook
import React, { useEffect, useState } from "react";

export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const d = await fetch(url);
        const res = await d.json();
        setData(res);
      } catch (err) {
        console.log(err);
      } finally {
        console.log("Yae toh Chalega hi");
      }
    }
    if (url) getData(url);
  }, [url]);
  return { data };
};


