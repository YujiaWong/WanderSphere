import { HashRouter, Navigate, Route, Routes } from "react-router";
import Home from "./pages/home";

import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/about";
import Contact from "./pages/contact";
import Tour from "./pages/tour";
import Signin from "./pages/signin";
import Register from "./pages/register";
import Destination from "./pages/tour/destination";
import { AuthContextProvider } from "./context/authContext";

function App() {
  return (
    <div>
      <HashRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/tour/*" element={<Tour />}></Route>
            <Route path="/login" element={<Signin />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route
              path="/tour/:destinationName"
              element={<Destination />}
            ></Route>
          </Routes>
        </AuthContextProvider>
      </HashRouter>
    </div>
  );
}

export default App;
