import React, { useState } from "react";

const arrData = ["play cricket ", "play footbatt", "play rugby"];

const RemoveItem = () => {
  const [data, setData] = useState(arrData);
  const [checkedIndices, setCheckedIndices] = useState([]);

  const handleCheck = (index) => {
    const currentIndex = checkedIndices.indexOf(index);
    const newCheckedIndices = [...checkedIndices];
    if (currentIndex === -1) {
      newCheckedIndices.push(index);
    } else {
      newCheckedIndices.splice(currentIndex, 1);
    }
    setCheckedIndices(newCheckedIndices);
  };

  const handleRemove = (id) => {
      const newData = data.filter((_, i) => !checkedIndices.includes(i));
      setData(newData);
      delete data[id]
    setCheckedIndices([]);
  };

  return (
    <div className="flex text-xl h-screen justify-center items-center">
      {data.map((item, index) => (
        <div className="text-center p-4" key={index}>
          <input
            type="checkbox"
            id={index}
            checked={checkedIndices.includes(index)}
            onChange={() => handleCheck(index)}
          />
          <p className="my-4 mx-2">{item}</p>
          {checkedIndices.includes(index) && (
            <button onClick={() => handleRemove(index)}>Remove Item</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RemoveItem;
