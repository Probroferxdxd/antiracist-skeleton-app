import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomeSection from './pages/HomeSection'
import About from './pages/Sesion1'
import Services from './pages/Sesion2'
import Contact from './pages/Sesion4'
import Resources from './pages/Sesion3'
import './App.scss'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
