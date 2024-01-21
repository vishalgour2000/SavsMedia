import logo from './logo.svg';
import './App.css';
import Savsmedia from './components/Savsmedia';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clientform from './components/Clientform';
import Savs from './components/Savs';
// import About from './components/about';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Savsmedia/>}/>
        <Route path='/clientform' element={<Clientform/>}/>
        {/* <Route path='/aboutSavs' element={<About/>}/> */}
        <Route path='/savs' element={<Savs/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Savsmedia></Savsmedia> */}
    </div>
  );
}

export default App;
