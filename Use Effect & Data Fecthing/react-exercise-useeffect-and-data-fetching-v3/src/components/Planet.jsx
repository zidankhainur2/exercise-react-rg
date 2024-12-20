// Planets.jsx
import React from "react";

const Planets = ({ planets }) => {
  return (
    <div>
      {planets.map((planet) => (
        <div key={planet.name}>
          <h3>{planet.name}</h3>
          <p>{`Rotation Period: ${planet.rotation_period}`}</p>{" "}
          {/* Ensure this is single element */}
          <p>{`Orbital Period: ${planet.orbital_period}`}</p>{" "}
          {/* Ensure this is single element */}
          <p>{`Diameter: ${planet.diameter}`}</p>{" "}
          {/* Ensure this is single element */}
          <p>{`Climate: ${planet.climate}`}</p>{" "}
          {/* Ensure this is single element */}
        </div>
      ))}
    </div>
  );
};

export default Planets;
