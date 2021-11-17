
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
<Router>
    <div className="App">

    <Navbar />
    
    <Routes>
    <Route  path='/' element={<Home/>} /> 
    <Route  path='/about' element={<About/>} />
    <Route path='/work' element={<Work/>} /> 
    <Route path='/skills' element={<Skills/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='/contact' element={<Contact/>} />
    {/*<Route path="*" element={<NotFound/>}/>*/}

    </Routes>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
