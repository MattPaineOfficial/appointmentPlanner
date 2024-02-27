import React from "react";

export const Tile = ({ name, description }) => {
  console.log(description)
  console.log(Object.entries(description))
  return (
    <div className="tile-container">
      <div className="tile">
        <h2>{name}</h2>
        {Object.entries(description).map(([key, value], index) => (
        <p key={index}>
          <strong>{key}:</strong> {value}
        </p>
      ))}
      </div>
    </div>
  );
};

// This code defines a component called Tile. It takes in two properties, name and description, and displays them in a structured way.
// First, it logs the description to the console so we can see it.
// Then, it converts the description object into an array and logs it to the console.
// The component then returns HTML code that displays the name as a heading and loops through each key-value pair in the description object.
// For each key-value pair, it creates a paragraph and displays the key-value pair.