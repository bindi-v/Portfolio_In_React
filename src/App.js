
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from "./components/Header";
import Footer from './components/Footer';
import About from './components/About';
import Work from './components/Work';

function App() {
  
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Footer />
    </>
  );
}

export default App;
