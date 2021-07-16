import React from "react";
import Autocomplete from "./AutoComplete.js";
const AutoSuggestCompany = () => {
  return (
    <div className="App">
      <Autocomplete
        options={[
          "Papaya",
          "Persimmon",
          "Paw Paw",
          "Prickly Pear",
          "Peach",
          "Pomegranate",
          "Pineapple"
        ]}
      />
    </div>
  );
};

export default AutoSuggestCompany;
