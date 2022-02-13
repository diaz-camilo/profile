import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

const availableLanguages = [
  { language: "en", flag: "australia" },
  // { language: "es", flag: "spain" },
];

ReactDOM.render(
  <StrictMode>
    <App availableLanguages={availableLanguages} />
  </StrictMode>,
  document.getElementById("root")
);
serviceWorker.register();
