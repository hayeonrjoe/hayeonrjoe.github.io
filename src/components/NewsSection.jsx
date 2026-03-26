import './NewsSection.css'

export default function NewsSection({ items, limit }) {
  const displayItems = limit ? items.slice(0, limit) : items

  return (
    <div className="news-section">
      <h2>Latest News</h2>
      <div className="news-list">
        {displayItems.map((item, index) => (
          <div key={index} className="news-item">
            <div className="news-date">{item.formattedDate}</div>
            <div className="news-title">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
