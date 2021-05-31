import { StrictMode } from "react";
import ReactDOM from "react-dom";
import CompanyDropDown from "./CompanyDropDown.js";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <App /> */}
    <CompanyDropDown />
  </StrictMode>,
  rootElement
);
