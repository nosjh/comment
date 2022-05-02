import * as React from "react";
import { Reset } from "styled-reset";
import { Route, Routes } from "react-router-dom";
import List from "./pages/List";
import ListIn from "./pages/ListIn";

const App = () => (
  <React.Fragment>
    <Reset />
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/list/:listname" element={<ListIn />} />
    </Routes>
  </React.Fragment>
);

export default App;
