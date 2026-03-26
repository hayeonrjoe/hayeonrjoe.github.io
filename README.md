# Hayeon R Joe - Personal Website

A modern, responsive personal website built with React and TypeScript, tailored for a medical informatics researcher and graduate student.

## Overview

This website showcases my research, publications, and professional background in medical informatics. It features:

- **Home Page**: Introduction with latest 5 news items and last update timestamp
- **About Page**: Biography and professional background
- **Publications Page**: (Ready for future publications)
- **Research Page**: Current research focus and interests
- **Photos Page**: Professional and conference photos
- **Contact Page**: Contact information and social links

## Tech Stack

- **Frontend**: React 18.3 with TypeScript
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Styling**: CSS3 with responsive design
- **Deployment**: GitHub Pages

## Installation & Development

### Prerequisites

- Node.js 16+ and npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Deploy to GitHub Pages:

```bash
npm run deploy
```

This will build the project and deploy to the `gh-pages` branch.

## File Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.tsx   # Navigation bar
│   ├── Footer.tsx       # Footer with contact
│   └── NewsSection.tsx  # News display component
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── PublicationsPage.tsx
│   ├── ResearchPage.tsx
│   ├── PhotosPage.tsx
│   └── ContactPage.tsx
├── data/               # Data structures
│   └── news.ts         # News items data
├── assets/             # Images and static files
├── App.tsx             # Main app component with routing
└── main.tsx            # Entry point
```

## News Management

News items are stored in `src/data/news.ts`. To add a new item:

```typescript
{
  date: 'YYYY-MM-DD',
  formattedDate: 'Mon. DD, YYYY',
  title: 'Your news title here'
}
```

The homepage automatically displays the 5 most recent items.

## Customization

### Adding Photos

Place images in `src/assets/` and import them in the PhotosPage component.

### Updating Content

Edit the respective page components in `src/pages/` to update content.

### Styling

Global styles are in `src/index.css`. Component-specific styles are in corresponding `.css` files.

## License

0BSD (Open Software License)
