
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Footer from './components/Footer';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  return (
<Router>
    <div className="App">

    <Navbar />
    <Home />
    <Routes>
    <Route  path="/" exact component={<Home/>} /> 
    <Route  path="/about" exact component={<About/>} />
    <Route exact path="/work" component={<Work/>} /> 
    <Route exact path="/skills" component={<Skills/>} />
    <Route exact path="/projects" component={<Projects/>} />
    <Route exact path="/contact" component={<Contact/>} />
    </Routes>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
