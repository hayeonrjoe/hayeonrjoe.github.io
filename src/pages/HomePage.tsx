import NewsSection from '../components/NewsSection'
import { getLatestNews, getLatestUpdateDate } from '../data/news'
import './HomePage.css'

export default function HomePage() {
  const latestNews = getLatestNews(5)
  const lastUpdate = getLatestUpdateDate()

  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>Hayeon R. Joe</h1>
        <p className="subtitle">
          Researcher
        </p>
      </div>

      <div className="home-intro">
        <p>
          I am a researcher at the Biomedical Knowledge Engineering Lab (BiKE Lab) and a graduate student in the College of Medicine at Seoul National University, specializing in Medical Informatics. My research interests span the intersection of medicine, computer science, and data science, driven by their potential to address real-world challenges and enhance human well-being.
        </p>
      </div>

      <NewsSection items={latestNews} />

      <div className="last-update">
        <p>
          <em>Latest update: {lastUpdate}</em>
        </p>
      </div>
    </div>
  )
}
