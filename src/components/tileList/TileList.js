import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ data }) => {
  return (
    <div className="tile-list">
      {data && data.map((contact, i) => {
        const { name, ...description } = contact;
        return <Tile name={name} description={description} key={i} />;
      })}
    </div>
  );
};


// This code creates a component called "TileList" that takes in a prop called "data".
// The "data" prop is used to render a list of items in a specific format.
// It checks if the "data" prop exists and is not empty.
// If it is not empty, it iterates over each item in the "data" array and creates another component called "Tile" for each item.
// Each "Tile" component receives the "name" and "description" properties from the item as props.
// The "key" prop is used to uniquely identify each "Tile" component based on its index in the "data" array.
// Finally, all the created "Tile" components are rendered inside a div with a class name "tile-list".