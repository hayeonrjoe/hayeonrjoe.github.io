import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          Hayeon R. Joe
        </Link>
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={location.pathname === '/projects' ? 'active' : ''}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/photos" 
              className={location.pathname === '/photos' ? 'active' : ''}
            >
              Photos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
