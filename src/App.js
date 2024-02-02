import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Events from "./components/Events.jsx";
import Home from "./components/home.jsx";
import Login from "./components/Login.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Create from "./components/EventCreation.jsx";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <>
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          ></Route>
          <Route
            path="/Events"
            element={
              <>
                <Events />
              </>
            }
          ></Route>
          <Route
            path="/AboutUs"
            element={
              <>
                <AboutUs />
              </>
            }
          ></Route>
          <Route
            path="/EventCreation"
            element={
              <>
                <Create />
              </>
            }
          ></Route>
        </Routes>
        <Outlet />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
