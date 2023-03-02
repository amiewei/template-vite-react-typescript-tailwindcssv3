import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import App from "./App";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}

      <Routes>
        {["/", "/app"].map((path, index) => {
          return <Route path={path} element={<App />} key={index} />;
        })}
        {/* <Route path="/profile" element={<SignIn />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
