import { Route, Routes } from "react-router-dom";
import About from './Mycomponents/About';
import Home from './Mycomponents/Home';
import Ourteam from "./Mycomponents/Ourteam";
import Project from "./Mycomponents/Project";
import Template from "./Mycomponents/Template";
import Data from './DataTemplate';
import { useState } from "react";
function App() {
  const [data, setData] = useState(Data);
  return (
    <Routes>
      <Route exact path="/About" element={<About/>} />
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Ourteam" element={<Ourteam/>}/>
      <Route exact path="/project" element={<Project/>}/>
            <Route exact path='/project/zero' element={<Template daata = {data[0]}/>}/>
            <Route exact path='/project/first' element={<Template daata = {data[1]}/>}/>
            <Route exact path='/project/second' element={<Template daata = {data[2]}/>}/>
            <Route exact path='/project/third' element={<Template daata = {data[3]}/>}/>
            <Route exact path="/project/fourth" element={<Template daata = {data[4]} />}/>
    </Routes>
  );
}

export default App;
