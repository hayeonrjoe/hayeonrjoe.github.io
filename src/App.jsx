import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PhotosPage from './pages/PhotosPage'
import ProjectsPage from './pages/ProjectsPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/photos" element={<PhotosPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<div style={{ padding: '2rem' }}><h1>Page not found</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
