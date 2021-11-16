
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from "./components/Header";
import Footer from './components/Footer';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';

function App() {
  
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Footer />
    </>
  );
}

export default App;
