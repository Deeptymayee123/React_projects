import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function CustomRender(reactElement, container) {
  /*
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.Children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

   container.appendChild(domElement);
*/
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.Children;

  for (const prop in reactElement.props) {
    if (prop == "Children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

function MyApp() {
  return <h1>Hellow World! It's my application.</h1>;
}
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

// const mainContainer = document.querySelector("#root");

// CustomRender(reactElement, mainContainer);

const anotherElement = (
  <a href="https://goggle.com" target="_blank">
    Visit google
  </a>
);
const anotherUser = "KishanKumar";
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit google.",
  anotherUser,
);

createRoot(document.getElementById("root")).render(reactElement);
// createRoot(document.getElementById("root")).render(<App />);
