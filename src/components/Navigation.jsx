import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  const location = useLocation()
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          Hayeon R. Joe (Becca)
        </Link>
        <div className="nav-right">
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
          <button
            className="theme-toggle"
            onClick={() => setDark(d => !d)}
            aria-label="Toggle dark mode"
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? '☀' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}
