import { Route, Routes } from "react-router-dom";
import List from "./pages/List";
import ListIn from "./pages/ListIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/list/:listname" element={<ListIn />} />
    </Routes>
  );
}

export default App;
