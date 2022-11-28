import { Route, Routes } from "react-router-dom";
import About from './Mycomponents/About';
import Home from './Mycomponents/Home';
import Ourteam from "./Mycomponents/Ourteam";
import Project from "./Mycomponents/Project";
import Template from "./Mycomponents/Template";
function App() {
  return (
    <Routes>
      <Route exact path="/About" element={<About/>} />
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Ourteam" element={<Ourteam/>}/>
      <Route exact path="/project" element={<Project/>}/>
            <Route exact path='/project/first' element={<Template/>}/>
    </Routes>
  );
}

export default App;
