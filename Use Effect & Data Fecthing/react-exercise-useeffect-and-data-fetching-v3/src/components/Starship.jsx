// Starships.jsx
import React from "react";

const Starships = ({ starships }) => {
  return (
    <div>
      {starships.map((starship) => (
        <div key={starship.name}>
          <h3>{starship.name}</h3>
          <p>{`Model: ${starship.model}`}</p>{" "}
          {/* Ensure this is single element */}
          <p>{`Manufacturer: ${starship.manufacturer}`}</p>{" "}
          {/* Ensure this is single element */}
          <p>{`Cost: ${starship.cost_in_credits}`}</p>{" "}
          {/* Ensure this is single element */}
          <p>{`Length: ${starship.length}`}</p>{" "}
          {/* Ensure this is single element */}
        </div>
      ))}
    </div>
  );
};

export default Starships;
