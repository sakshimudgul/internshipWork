import React, { useState } from "react";

function User({ id, firstName, hobbies }) {
  console.log(id, firstName, hobbies);
  const [count, setCount] = useState(1);
  const increaseCount = () => {
    setCount((prev) => {
      return prev - 1;
    });
  };
  return (useState
    <div key={id}>
      <div className="border bg-black text-white m-2 pl-4">
        <div>id :{id}</div>
        <div>firstName :{firstName}</div>
        <div>count:{count}</div>
        <div>hobbies :{hobbies}</div>
        
          <button
            className="bg-white text-black p-2 rounded-xl m-2"
            onClick={increaseCount}
          >
            add
          </button>
          <button className="bg-white text-black p-2 rounded-xl m-2">
            sub
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;
