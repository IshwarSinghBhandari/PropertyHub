# PropertyHub 🏠

> **Important:** The `main` branch contains the latest codebase and is the version currently deployed on Vercel.

A responsive real estate property listing portal built with Next.js, TypeScript, and Tailwind CSS.

## Live Demo

🔗 https://property-hub-blond-sigma.vercel.app/)

## GitHub Repository

🔗 https://github.com/IshwarSinghBhandari/PropertyHub

---

## Features

### Property Listing Page
- Display property cards with:
  - Property Image
  - Title
  - Price
  - Location
  - BHK Configuration

### Search Functionality
- Debounced search input
- Filter properties by location as the user types

### Filters
- BHK Filter
- Buy / Rent Toggle

### Property Details Page
- Dynamic property details page
- Navigation from listing page to details page

### Loading States
- Skeleton loader while data is loading

### Responsive Design
- Mobile-first design
- Tablet and Desktop optimized layouts

---

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- Lucide React Icons

---

## Project Structure

```text
propertyhub/
│
├── public/
│   ├── images/
│   └── logo/
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── property/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── SearchBar.tsx
│   │   │
│   │   ├── property/
│   │   │   ├── PropertyCard.tsx
│   │   │   ├── PropertyGrid.tsx
│   │   │   ├── PropertyFilters.tsx
│   │   │   ├── FavoriteButton.tsx
│   │   │   └── PropertySkeleton.tsx
│   │   │
│   │   └── ui/
│   │
│   ├── data/
│   │   └── properties.json
│   │
│   ├── lib/
│   │   ├── constants.ts
│   │   ├── utils.ts
│   │   └── formatPrice.ts
│   │
│   ├── types/
|   |   ├──common.ts
│   │   └── property.ts
│   │
│   └── hooks/
│       └── useDebounce.ts
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

---

## Getting Started

### Clone Repository

```bash
git clone https://github.com/IshwarSinghBhandari/PropertyHub.git
```

### Navigate to Project

```bash
cd PropertyHub
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## Assignment Requirements Checklist

- [x] Property Listing Cards
- [x] Search with Debounce
- [x] BHK Filter
- [x] Buy/Rent Toggle
- [x] Property Detail Page
- [x] Skeleton Loader
- [x] Responsive Design
- [x] TypeScript
- [x] Mock JSON Data
- [x] Next.js
- [x] Tailwind CSS

---

## Future Improvements

- Property Sorting
- Favorites Persistence
- API Integration
- Pagination
- Authentication
- Map Integration

---

## Author

**Ishwar Singh Bhandari**
