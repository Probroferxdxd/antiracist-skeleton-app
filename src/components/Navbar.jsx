import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">MyApp</Link>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Inicio</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">Acerca de</Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link">Servicios</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contacto</Link>
          </li>
          <li className="navbar-item">
            <Link to="/resources" className="navbar-link">Recursos</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
