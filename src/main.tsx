import React from "react";
import ReactDOM from "react-dom";
import RouteSwitch from "./RouteSwitch";
// import { UserContextProvider } from "./context/UserContextProvider";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>,
  document.getElementById("root")
);
