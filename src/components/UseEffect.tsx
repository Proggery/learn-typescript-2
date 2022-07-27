import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function UseEffect() {
  const [val, setVal] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVal((v) => v + 1);
    }, 3000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return <div>{val}</div>;
}

export default UseEffect;
