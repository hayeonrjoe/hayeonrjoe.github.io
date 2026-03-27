# Hayeon R Joe - Personal Website

A modern, responsive personal website built with React (JavaScript) and Vite.

## Overview

This website showcases my professional background and projects. It features:

- **Home Page**: Introduction with latest 5 news items and last update timestamp
- **Photos Page**: Professional and conference photos
- **Projects Page**: Project descriptions and images

## Tech Stack

- **Frontend**: React 18.3 (JavaScript)
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Styling**: CSS3 with responsive design
- **Deployment**: GitHub Pages

## Installation & Development

### Prerequisites

- Node.js 18+ and npm

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
│   ├── Navigation.jsx   # Navigation bar (+ theme toggle)
│   ├── Footer.jsx       # Footer
│   └── NewsSection.jsx  # News display component
├── pages/              # Page components
│   ├── HomePage.jsx
│   ├── ProjectsPage.jsx
│   └── PhotosPage.jsx
├── data/               # Data structures
│   └── news.js         # News items data
├── assets/             # Images and static files
├── App.jsx             # Main app component with routing
└── main.jsx            # Entry point
```

## News Management

News items are stored in `src/data/news.js`. To add a new item:

```js
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
