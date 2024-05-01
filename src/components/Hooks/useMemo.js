import React, { useMemo, useState } from "react";

const UseMemoTest = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(50);

  const multiple = useMemo(
    function multiply() {
      console.log("chl rha h");
      return add * 10;
    },
    [add]
  );

  return (
    //For Test Code Check Console

    <div className="container my-auto mx-auto h-screen">
      <div className=" border text-center py-2 ">
        <h1> multiplication :- {multiple} </h1>
      </div>
      <div className=" border text-center py-2  my-4 ">
        <h1> Add :- {add} </h1>
        <button onClick={() => setAdd(add + 1)}> Add</button>
      </div>
      <div className=" border text-center py-2">
        <h1> Subtract :- {minus} </h1>
        <button onClick={() => setMinus(minus - 1)}>Subtract</button>
      </div>
    </div>
  );
};

export default UseMemoTest;
