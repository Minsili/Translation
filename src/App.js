import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Components/Signup/signup";
import Login from "./Components/Login/Login";
import Home from "./Components/HomeScreen/Home";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
