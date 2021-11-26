import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Products from './pages/Products';
import Sunpar from './pages/Sunpar';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Sunpar" element={<Sunpar />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
