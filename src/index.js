import { StrictMode } from "react";
import ReactDOM from "react-dom";
import CompanyNamer from "./CompanyDropDown.js";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <App /> */}
    <CompanyNamer />
  </StrictMode>,
  rootElement
);
