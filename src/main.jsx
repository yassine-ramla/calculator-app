import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

onload = () => {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "theme1");
  }
  const theme = localStorage.getItem("theme");
  document.querySelector("body").setAttribute("theme-data", theme);
  switch (theme) {
    case "theme2":
      document.getElementById("switch-btn").style.left = "28px";
      break;
    case "theme3":
      document.getElementById("switch-btn").style.left = "50px";
      break;
    default:
      document.getElementById("switch-btn").style.left = "5px";
  }
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
