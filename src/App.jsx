import { useState } from "react";
import React from "react";
import Button from "./components/Buttons";
import "./App.css";
function App() {
  const [color, setColor] = useState("orange");

  return (
    <div
      className="w-full h-screen duration-200 flex justify-center"
      style={{ backgroundColor: color }}
    >
      <div className=" inline-flex  bg-white rounded-2xl px-3 py-2 justify-center fixed flex-wrap bottom-12 shadow-2xl">
        <div className=" flex  gap-3 px-4 shadow-2xl rounded-2xl">
          <button
            onClick={() => {
              setColor("red");
            }}
            className=" py-1 px-3 rounded-3xl outline-none w-full"
            style={{ background: "red" }}
          >
            red
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className=" py-1 px-3 rounded-3xl outline-none w-full"
            style={{ background: "green" }}
          >
            green
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className=" py-1 px-3 rounded-3xl outline-none w-full"
            style={{ background: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => {
              setColor("olive");
            }}
            className=" py-1 px-3 rounded-3xl outline-none w-full"
            style={{ background: "olive" }}
          >
            olive
          </button>
          <button
            onClick={() => {
              setColor("gray");
            }}
            className=" py-1 px-3 rounded-3xl outline-none w-full"
            style={{ background: "gray" }}
          >
            gray
          </button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className=" py-1 px-3 rounded-3xl outline-none w-full"
            style={{ background: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => {
              setColor("purple");
            }}
            className=" py-1 px-3 rounded-3xl outline-none w-full"
            style={{ background: "purple" }}
          >
            purple
          </button>
          <button
            onClick={() => {
              setColor("cyan");
            }}
            className=" py-1 px-3 rounded-3xl outline-none w-full"
            style={{ background: "cyan" }}
          >
            cyan
          </button>
          <button
            onClick={() => {
              setColor("pink");
            }}
            className=" py-1 px-3 rounded-3xl outline-none w-full"
            style={{ background: "pink" }}
          >
            pink
          </button>
          <button
            onClick={() => {
              setColor("lavender");
            }}
            className=" py-1 px-3 rounded-3xl outline-none w-full"
            style={{ background: "lavender" }}
          >
            lavender
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className=" py-1 px-3 rounded-3xl outline-none w-full text-white"
            style={{ background: "black" }}
          >
            black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
