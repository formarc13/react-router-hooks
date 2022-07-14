import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import Navbar from './components/Navbar';
import Detalle from './pages/Detalle';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/producto/:id' element={<Detalle />}/>
        <Route path='*' element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
