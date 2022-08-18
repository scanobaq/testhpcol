import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Components/Home";
import { Route, Router, Routes, Switch } from "react-router-dom";
import { NewCase } from "./Components/NewCase";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="newcase" element={<NewCase />} />
    </Routes>
    // <div className="App">
    //   <Home></Home>
    // </div>
  );
}

export default App;
