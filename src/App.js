import { Route, Routes } from "react-router-dom";
import About from './Mycomponents/About';
import Home from './Mycomponents/Home';
import Ourteam from "./Mycomponents/Ourteam";
import Project from "./Mycomponents/Project";
import Template from "./Mycomponents/Template";
import pic from './Mycomponents/Test_image.png'
function App() {
  return (
    <Routes>
      <Route exact path="/About" element={<About/>} />
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Ourteam" element={<Ourteam/>}/>
      <Route exact path="/project" element={<Project/>}/>
            <Route exact path='/project/first' element={<Template heading='this is first' image = {pic} para1='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' para2='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            para3='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>}/>
            <Route exact path='/project/second' element={<Template heading='this is second'/>}/>
            <Route exact path='/project/third' element={<Template heading='this is third'/>}/>
            <Route exact path='/project/fourth' element={<Template heading='this is fourth'/>}/>
            <Route exact path="/project/fifth" element={<Template heading='well done' />}/>
    </Routes>
  );
}

export default App;
