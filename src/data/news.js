export const newsItems = [
  {
    date: '2024-09-01',
    formattedDate: 'Sep. 1, 2024',
    title: 'Began Graduate School at Seoul National University'
  },
  {
    date: '2024-04-05',
    formattedDate: 'Apr. 5, 2024',
    title: 'Earned the SQL Developer (SQLD) Certification'
  },
  {
    date: '2024-02-22',
    formattedDate: 'Feb. 22, 2024',
    title: 'Joined the Biomedical Knowledge Engineering (BiKE) Lab'
  },
  {
    date: '2023-07-27',
    formattedDate: 'Jul. 27, 2023',
    title: 'Completed the Full-Stack Web Developer Training Program'
  },
]

export const getLatestNews = (count = 5) => {
  return newsItems.slice(0, count)
}

export const getLatestUpdateDate = () => {
  const latest = newsItems[0]
  return latest.formattedDate || latest.date
}
