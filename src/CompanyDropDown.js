import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import compData from "./data/shareslist.json";

// const fetchCompData = compData.map((data, key) => {
//   return {
//     compName: data.companyName,
//     compSymbol: data.compSymbol,
//     compIndustry: data.compIndustry
//   };
// });
export default function CompanyDropDown() {
  // const [companyNames, companyData] = useState([]);
  // this.companyData = { fetchCompData };
  return (
    <>
      <input type="text" list="data1" placeholder="Search Company" />
      <datalist id="data1">
        {compData.map((result) => (
          <option>{result.companyName}</option>
        ))}
      </datalist>
    </>
  );
}
