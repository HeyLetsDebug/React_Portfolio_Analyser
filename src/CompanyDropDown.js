import "./autosuggest.css";
import "bootstrap/dist/css/bootstrap.min.css";
import compData from "./data/shareslist.json";
import { Form } from "react-bootstrap";
import Autosuggest from "react-autosuggest";
import React from "react";

const fetchCompData = compData.map((data, key) => {
  return {
    compName: data.compName,
    compSymbol: data.compSymbol,
    compIndustry: data.compIndustry
  };
});
// export default function CompanyDropDown() {
//   // const [companyNames, companyData] = useState([]);
//   // this.companyData = { fetchCompData };
//   return (
//     <>
//       <Form.Group>
//         <Form.Control as="text" id="data1">
//           {compData.map((result) => (
//             <option key={result.compSymbol}>{result.compName}</option>
//           ))}
//         </Form.Control>
//       </Form.Group>
//       {/*
//       <input type="text" list="data1" placeholder="Search Company" />
//       <datalist id="data1">
//         {compData.map((result) => (
//           <option>{result.compName}</option>
//         ))}
//       </datalist> */}
//     </>
//   );
// }

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return fetchCompData.filter((compList) => regex.test(compList.compName));
}

function getSuggestionValue(suggestion) {
  return suggestion.compName;
}

function renderSuggestion(suggestion) {
  return <span>{suggestion.compName}</span>;
}

export default class CompanyNamer extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type 'company name'",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}
