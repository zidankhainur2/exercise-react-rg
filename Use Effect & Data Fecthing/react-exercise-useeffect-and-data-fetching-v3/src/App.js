import React, { useEffect, useState } from "react";
import People from "./components/People";
import Planets from "./components/Planet";
import Starships from "./components/Starship";

const App = () => {
  const [category, setCategory] = useState("people");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async (category) => {
    setLoading(true);
    try {
      const response = await fetch(`https://swapi.py4e.com/api/${category}`);
      const result = await response.json();
      setData(result.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(category);
  }, [category]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {category === "people" && <People data={data} />}
          {category === "planets" && <Planets data={data} />}
          {category === "starships" && <Starships data={data} />}
        </>
      )}
    </div>
  );
};

export default App;
