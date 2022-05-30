import Header from "./components/Header";
import PagesMenu from "./components/PagesMenu";
import About from "./components/About";
import Jobs from "./components/Jobs";
import Apprenticeships from "./components/Apprenticeships";
import { Routes, Route } from "react-router-dom";


import "./style/general.css";

const App = () => {
  return (
    <div>
      <Header/>
      <PagesMenu/>
      <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/jobs" element={<Jobs/>}/>
                <Route path="/apprenticeships" element={<Apprenticeships/>}/>
      </Routes>
      <p>FOOTER</p>
    </div>
  );
}

export default App;
