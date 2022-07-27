import React from "react";
import { useState } from "react";

function UseState() {
  const [arr, setArr] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setArr([...arr, arr.length + 1]);
          }}
        >
          Add to Array
        </button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button
          onClick={() => {
            setName("Geri");
          }}
        >
          Add Name
        </button>
        {JSON.stringify(name)}
        <button
          onClick={() => {
            setName(null);
          }}
        >
          Delete Name
        </button>
      </div>
    </div>
  );
}

export default UseState;
