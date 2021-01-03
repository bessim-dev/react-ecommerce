import React, { useState } from "react";
export const onTextChange = (e, items) => {
  const value = e.target.value;
  if (value > 0) {
    const regex = new RegExp(`^${value}`, "i");
    setSuggestions(items.sort().filter((v) => regex.text(v)));
  }
};
export default function AutoTextComplete() {
  const [suggestions, setSuggestions] = useState([]);

  const renderSuggestionsList = () => {
    if (suggestions.length > 0) {
      return (
        <ul>
          {suggestions.map((suggestion) => (
            <li>{suggestion.name}</li>
          ))}
        </ul>
      );
    }
    return null;
  };
  return <div>{renderSuggestionsList}</div>;
}
