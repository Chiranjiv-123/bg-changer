import React from "react";

function Button({ color = "orange" }) {
  console.log(color);
  return (
    <button
      className=" py-1 px-3 rounded-3xl outline-none w-full"
      style={{ background: color }}
    >
      {color}
    </button>
  );
}
export default Button;
