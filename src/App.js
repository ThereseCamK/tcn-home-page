// import logo from './img/CBigger2.png';
import Navbar from './Navbar';
import Projects from './pages/projects';
import About from './pages/about';
import Home from './pages/home';
import { Route, Routes } from "react-router-dom";



import './App.css';

function App() {

  return (
    <div className="App">
     <div className="topp-content"> 
          <Navbar />
     </div>
      <div className="main-content">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes> 
      </div>
      

     

      {/* <header className="App-header"><img src={logo} className="App-logo" alt="logo" /> </header> */}
    </div>
  );
}

export default App;
