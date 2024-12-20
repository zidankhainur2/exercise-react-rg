import React, { useEffect, useState } from "react";

const People = () => {
  const [people, setPeople] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.py4e.com/api/people");
        const data = await response.json();
        setPeople(data.results); // Assuming the API returns results in this format
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>; // Loading indicator

  return (
    <div>
      {people.map((person) => (
        <div key={person.name}>
          <h3>{person.name}</h3>
          <p>{`Gender: ${person.gender}`}</p>
        </div>
      ))}
    </div>
  );
};

export default People;
