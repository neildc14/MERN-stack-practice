import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Nav from "./layouts/Nav";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useEffect } from "react";

const queryClient = new QueryClient();
function App() {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
  }, []);

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/logout" element={<Login />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
