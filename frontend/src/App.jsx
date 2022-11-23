import { Routes, Route } from "react-router-dom";
import Nav from "./layouts/Nav";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
