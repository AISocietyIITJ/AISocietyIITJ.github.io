
import { Route, Routes } from "react-router-dom";
import About from './Mycomponents/About';
import Home from './Mycomponents/Home'
function App() {
  return (
    <Routes>
      <Route exact path="/About" element={<About/>} />
      <Route exact path="/" element={<Home/>} />
    </Routes>
  );
}

export default App;
