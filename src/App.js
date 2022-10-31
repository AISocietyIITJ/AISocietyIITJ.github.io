
import { Route, Routes } from "react-router-dom";
import About from './Mycomponents/About';
import Home from './Mycomponents/Home';
import Ourteam from "./Mycomponents/Ourteam";
import Project from "./Mycomponents/Project";
function App() {
  return (
    <Routes>
      <Route exact path="/About" element={<About/>} />
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Ourteam" element={<Ourteam/>}/>
      <Route exact path="/project" element={<Project/>}/>
    </Routes>
  );
}

export default App;
