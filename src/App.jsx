import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import HomeSection from './pages/HomeSection'
import Empathize from './pages/Empathize'
import Define from './pages/Define'
import Ideation from './pages/Ideation'
import Development from './pages/Development'
import Prototype from './pages/Prototype'
import Sesion1 from './pages/Sesion1'
import Sesion2 from './pages/Sesion2'
import Sesion3 from './pages/Sesion3'
import Sesion4 from './pages/Sesion4'
import Sesion5 from './pages/Sesion5'
import Sesion6 from './pages/Sesion6'
import Sesion7 from './pages/Sesion7'
import Sesion8 from './pages/Sesion8'
import Sesion9 from './pages/Sesion9'
import Sesion10 from './pages/Sesion10'
import Sesion11 from './pages/Sesion11'
import Sesion12 from './pages/Sesion12'
import FirstVersion from './pages/FirstVersion'

import './App.scss'

function App() {
  return (
    <Router>
      <div className="container">
        <motion.div 
          className="entrance-animation"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, display: 'none' }}
          transition={{ duration: 1, delay: 2 }}

        >

        
        </motion.div>
        <Navbar />
        <Routes>
          <Route path="/antiracist-skeleton-app/" element={<HomeSection />} />
          <Route path="/antiracist-skeleton-app/empathize" element={<Empathize />} />
          <Route path="/antiracist-skeleton-app/define" element={<Define />} />
          <Route path="/antiracist-skeleton-app/ideation" element={<Ideation />} />
          <Route path="/antiracist-skeleton-app/development" element={<Development />} />
          <Route path="/antiracist-skeleton-app/prototype" element={<Prototype />} />
          <Route path="/antiracist-skeleton-app/sesion1" element={<Sesion1 />} />
          <Route path="/antiracist-skeleton-app/sesion2" element={<Sesion2 />} />
          <Route path="/antiracist-skeleton-app/sesion3" element={<Sesion3 />} />
          <Route path="/antiracist-skeleton-app/sesion4" element={<Sesion4 />} />
          <Route path="/antiracist-skeleton-app/sesion5" element={<Sesion5 />} />
          <Route path="/antiracist-skeleton-app/sesion6" element={<Sesion6 />} />
          <Route path="/antiracist-skeleton-app/sesion7" element={<Sesion7 />} />
          <Route path="/antiracist-skeleton-app/sesion8" element={<Sesion8 />} />
          <Route path="/antiracist-skeleton-app/sesion9" element={<Sesion9 />} />
          <Route path="/antiracist-skeleton-app/sesion10" element={<Sesion10 />} />
          <Route path="/antiracist-skeleton-app/sesion11" element={<Sesion11 />} />
          <Route path="/antiracist-skeleton-app/sesion12" element={<Sesion12 />} />
          <Route path="/antiracist-skeleton-app/firstversion" element={<FirstVersion />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
