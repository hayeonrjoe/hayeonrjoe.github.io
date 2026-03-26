import NewsSection from '../components/NewsSection'
import { getLatestNews } from '../data/news'
import './HomePage.css'

export default function HomePage() {
  const latestNews = getLatestNews(5)

  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>Hayeon R. Joe (Becca)</h1>
        <p className="subtitle">
          Researcher
        </p>
      </div>

      <div className="home-intro">
        <p>
          I am a <strong>researcher</strong> at the <strong>Biomedical Knowledge Engineering Lab (BiKE Lab)</strong> and a graduate student in the College of Medicine at <strong>Seoul National University</strong>, specializing in <strong>Medical Informatics</strong>. My research interests span the intersection of <strong>medicine, computer science, and data science</strong>, driven by their potential to address <strong>real-world challenges</strong> and enhance <strong>human well-being</strong>.
        </p>
      </div>

      <NewsSection items={latestNews} />

      <div className="last-update">
        <p>
          <em>Latest Update: Mar. 26, 2026</em>
        </p>
      </div>
    </div>
  )
}
