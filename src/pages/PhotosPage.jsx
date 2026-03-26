import './PhotosPage.css'
import intendImage from '../assets/intend-in-oslo.jpg'
import pscImage from '../assets/psc-workshop.jpg'
import capstoneImage from '../assets/snu-capstone-final-pitch.png'
import intendViennaPresentation from '../assets/intend-in-vienna-inswitch-presentation.png'
import intendViennaGroup from '../assets/intend-in-vienna.jpeg'

export default function PhotosPage() {
  return (
    <div className="photos-page">
      <h1>Photos</h1>
      
      <div className="photos-grid">
        <figure className="photo-item">
          <img src={intendViennaGroup} alt="Intend Meeting in Vienna" />
          <figcaption>Intend Meeting in Vienna, Jul. 3, 2025</figcaption>
        </figure>

        <figure className="photo-item">
          <img src={intendViennaPresentation} alt="Intend inSwitch Presentation in Vienna" />
          <figcaption>Intend inSwitch Presentation in Vienna, Jul. 1, 2025</figcaption>
        </figure>

        <figure className="photo-item">
          <img src={capstoneImage} alt="SNU Global Capstone Project Final Pitch" />
          <figcaption>SNU Global Capstone Project Final Pitch, Jun. 25, 2025</figcaption>
        </figure>

        <figure className="photo-item">
          <img src={intendImage} alt="Intend Meeting in Oslo" />
          <figcaption>Intend Meeting in Oslo, May 22, 2024</figcaption>
        </figure>

        <figure className="photo-item">
          <img src={pscImage} alt="PSC Workshop at SNU" />
          <figcaption>PSC Workshop at Seoul National University, Mar. 30, 2024</figcaption>
        </figure>
      </div>

      <div className="videos-section">
        <h2>Videos</h2>
        <div className="videos-grid">
          <div className="video-item">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/8-wBP_nnqRE?si=kII_oMzpzB_90F0F" 
              title="Intend Meeting in Vienna" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
            </iframe>
            <p>Intend Meeting in Vienna, Jul. 1-3, 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}
