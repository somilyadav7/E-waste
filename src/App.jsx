import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Facilities from './Components/Facilities';
import Recycle from './Components/Recycle';
import Ewaste from './Components/Ewaste';
import Contact from './Components/Contact';
import Signup from './Components/Signup';
import Smartphone from './Components/Recycle/Smartphone';
import Laptop from './Components/Recycle/Laptop';
import Other from './Components/Recycle/Other';
import Accesories from './Components/Recycle/Accesories';
import Refrigerator from './Components/Recycle/Refrigerator';
import Telivision from './Components/Recycle/Telivision';
import Signin from './Components/Signin';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/facilities' element={<Facilities />} />
          <Route path='/recycle' element={<Recycle />} />
          <Route path='/ewaste' element={<Ewaste />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path="/recycle/Smartphone" element={<Smartphone/>} />
          <Route path="/recycle/Laptop" element={<Laptop/>} />
          <Route path="/recycle/Accesories" element={<Accesories/>} />
          <Route path="/recycle/Refrigerator" element={<Refrigerator/>} />
          <Route path="/recycle/Telivision" element={<Telivision/>} />
          <Route path="/recycle/Other" element={<Other/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
