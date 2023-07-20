import Header from "./components/Header";
import PagesMenu from "./components/PagesMenu";
import About from "./components/About";
import Jobs from "./components/Jobs";
import Apprenticeships from "./components/Apprenticeships";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import "./style/general.css";

const App = () => {
  return (
    <div className="app">
      <Header/>
      <PagesMenu/>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/apprenticeships" element={<Apprenticeships/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
