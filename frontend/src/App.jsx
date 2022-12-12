import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Nav from "./layouts/Nav";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const queryClient = new QueryClient();
function App() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
        <Routes>
          <Route path="/logout" element={<Login />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
