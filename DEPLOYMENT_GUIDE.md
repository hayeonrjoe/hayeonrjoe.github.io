# Deployment & Setup Guide

## What Was Built

Your personal website has been completely rebuilt from a Gatsby static site to a modern React.js application with the following features:

### ✅ Features Implemented

1. **Home Page** 
   - Professional introduction
   - Latest 5 news items displayed with dates
   - Last update timestamp (currently: Mar. 26, 2025)
   - Clean, welcoming layout

2. **About Page**
   - Personal bio and background
   - Skills and expertise section
   - Medical informatics focus

3. **Publications Page**
   - Ready for future publications
   - Displays research areas
   - Placeholder for upcoming work

4. **Research Page**
   - Current research focus at BiKE Lab
   - Research interests (5 key areas)
   - Collaboration opportunities
   - Call-to-action to contact

5. **Photos Page**
   - Professional photo gallery
   - Migrated 2 photos from about page:
     - Intend Plenary Meeting in Oslo (May 22, 2024)
     - PSC Workshop at SNU (Mar. 30, 2024)
   - Responsive grid layout with hover effects

6. **Contact Page**
   - Email contact information
   - Affiliation and lab details
   - Social media links (GitHub, LinkedIn)
   - Professional tone with response time expectation

7. **Navigation**
   - Clean, sticky navigation bar
   - Active page highlighting
   - Responsive design for mobile

### 📁 Project Structure

```
my-personal-website/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Navigation.tsx     # Top navigation bar
│   │   ├── Footer.tsx         # Footer with contact
│   │   └── NewsSection.tsx    # News list component
│   ├── pages/                 # Page components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── PublicationsPage.tsx
│   │   ├── ResearchPage.tsx
│   │   ├── PhotosPage.tsx
│   │   └── ContactPage.tsx
│   ├── data/
│   │   └── news.ts            # News items data (easily updatable)
│   ├── assets/                # Images and photos
│   │   ├── intend-in-oslo.jpg
│   │   └── psc-workshop.jpg
│   ├── App.tsx                # Main app with routing
│   ├── App.css                # Main app styles
│   ├── index.css              # Global styles
│   └── main.tsx               # React entry point
├── index.html                 # HTML template
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies
└── README.md                  # Documentation
```

### 🎨 Design Features

- **Professional Layout**: Clean, academic design suitable for researchers
- **Responsive Design**: Mobile-friendly on all devices
- **Fast Performance**: Built with Vite for optimal build times
- **Material Color Scheme**: Blue (#0066cc) accents with neutral grays
- **Easy to Maintain**: Modular component structure

## 🚀 Next Steps: Deployment Instructions

### Step 1: Install Node.js

1. Download Node.js from https://nodejs.org/ (LTS version recommended)
2. Install using the default settings
3. Close and reopen your terminal/command prompt

### Step 2: Install Dependencies

```bash
cd d:\GitHub\hayeonrjoe.github.io\my-personal-website
npm install
```

### Step 3: Test Locally (Optional)

```bash
npm run dev
```

This starts a development server at `http://localhost:5173`. You can now edit files and see changes live!

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
1. Build the project for production
2. Push the `dist` folder to your `gh-pages` branch
3. Your site will be live at: `https://hayeonrjoe.github.io/`

## 📝 Updating Content

### Adding News Items

Edit `src/data/news.ts`:

```typescript
export const newsItems: NewsItem[] = [
  {
    date: '2025-03-26',
    formattedDate: 'Mar. 26, 2025',
    title: 'Your news title here'
  },
  // ... more items
];
```

The home page automatically shows the 5 most recent items.

### Updating Page Content

Edit the respective page files in `src/pages/`:
- `HomePage.tsx` - Home page intro text
- `AboutPage.tsx` - About/bio content
- `ResearchPage.tsx` - Research description
- `PublicationsPage.tsx` - Publications section
- `ContactPage.tsx` - Contact information
- `PhotosPage.tsx` - Photo captions

### Adding Photos

1. Place image files in `src/assets/`
2. Import in the relevant page component:
   ```tsx
   import photos from '../assets/your-photo.jpg'
   ```
3. Use in JSX:
   ```tsx
   <img src={photos} alt="description" />
   ```

### Updating Styles

- Global styles: `src/index.css`
- Component-specific: `src/components/*.css` or `src/pages/*.css`

## 🎯 Design Inspiration Elements Incorporated

Your design preferences have been incorporated:

✅ **Latest News Section** (like soojean.github.io)
- Featured on home page
- Shows 5 most recent items
- With update date timestamp

✅ **Professional Academic Layout** (like yoonho-kim.com)
- Clean navigation
- Organized page structure
- Academic focus sections

✅ **Medical Informatics Focused**
- Appropriate terminology in bio
- Research section highlights medical focus
- Publications section for grad student

✅ **Photos Page**
- Professional conference photos
- Organized grid layout
- Image captions with dates

## ⚙️ Technical Details

- **Framework**: React 18.3 with TypeScript
- **Routing**: React Router v6
- **Build Tool**: Vite (fast, modern build tool)
- **Styling**: Pure CSS3 with flexbox/grid
- **Hosting**: GitHub Pages (static site)
- **Deployment**: Automated via `npm run deploy`

## 🔧 Troubleshooting

### Port already in use
If port 5173 is already in use during development:
```bash
npm run dev -- --port 5174
```

### Build errors
Clear the build cache and node_modules:
```bash
rm -r node_modules dist
npm install
npm run build
```

### Changes not deploying
Make sure you've committed changes to git before deploying:
```bash
git add .
git commit -m "Update website content"
npm run deploy
```

## 📧 Customization After Deployment

Once deployed, you can easily:
- Update news by editing `src/data/news.ts`
- Change page content by editing page files
- Add new photos to the gallery
- Modify colors in CSS files
- Update contact information

## ✨ Future Enhancements

Once you have publications:
1. Add publication items to `PublicationsPage.tsx`
2. Consider adding a publications data structure similar to `news.ts`
3. Link to DOI or publication venues

---

**Need Help?** Check the main README.md for additional details, or refer to React and Vite documentation online.
