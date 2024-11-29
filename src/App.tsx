import { HashRouter, Navigate, Route, Routes } from "react-router";
import Home from "./WanderSphere/home";

import "bootstrap/dist/css/bootstrap.min.css";
import About from "./WanderSphere/about";
import Contact from "./WanderSphere/contact";
import Tour from "./WanderSphere/tour";
import Signin from "./WanderSphere/signin";
import Register from "./WanderSphere/register";
import Blog from "./WanderSphere/blog";
import Destination from "./WanderSphere/tour/destination";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/tour/*" element={<Tour />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/tour/:destinationName"
            element={<Destination />}
          ></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
