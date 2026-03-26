export interface NewsItem {
  date: string;
  title: string;
  formattedDate?: string;
}

export const newsItems: NewsItem[] = [
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
];

// Get the 5 most recent news items
export const getLatestNews = (count: number = 5): NewsItem[] => {
  return newsItems.slice(0, count);
};

// Get the latest update date in a nice format
export const getLatestUpdateDate = (): string => {
  const latest = newsItems[0];
  return latest.formattedDate || latest.date;
};
