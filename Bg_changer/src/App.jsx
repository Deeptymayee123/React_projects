import { useState } from "react";
// import "./App.css";

function App() {
  const [colour, setColour] = useState("olive");
  // const setUpColour = (color) => {
  //   switch (color) {
  //     case "green":
  //       setColour("green");
  //       break;
  //     case "yellow":
  //       setColour("#ffff00");
  //       break;
  //     case "white":
  //       setColour("#fff");
  //       break;
  //     default:
  //       setColour("#ccc");
  //   }
  // };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: colour }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* <h1>The background is {colour}</h1> */}
          <br></br>

          <button
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "green" }}
            onClick={() => setColour("green")}
          >
            green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColour("yellow")}
          >
            yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "white" }}
            onClick={() => setColour("white")}
          >
            white
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
