import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Main from "./layouts/Main";
import People from "./routes/People";
import PeopleDetail from "./routes/PeopleDetail";
import Movies from "./routes/Movies"; // Import Movies component
import MovieDetail from "./routes/MovieDetail"; // Import MovieDetail component
import Planets from "./routes/Planets"; // Import Planets component
import PlanetDetail from "./routes/PlanetDetail"; // Import PlanetDetail component
import NotFound from "./routes/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="star-wars" element={<Main />}>
        <Route path="people">
          <Route index element={<People />} />
          <Route path=":id" element={<PeopleDetail />} />
        </Route>
        <Route path="movies">
          <Route index element={<Movies />} />
          <Route path=":id" element={<MovieDetail />} />
        </Route>
        <Route path="planets">
          <Route index element={<Planets />} />
          <Route path=":id" element={<PlanetDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
