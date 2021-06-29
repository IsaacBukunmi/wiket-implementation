import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import "./assets/fonts/Faible/Faible-Regular.woff";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
