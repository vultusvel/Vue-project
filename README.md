# Vue Product Catalog

A small e-commerce style frontend built with Vue 3, Vuetify, and Pinia.
The app lets users browse products, apply filters, open product details, and manage a shopping cart with persisted state.

## Features

- Product listing page with filter sidebar (brand, category, discount, rating)
- Dynamic filtering via query params (`/products?...`)
- Product details page (`/details/:name`)
- Shopping cart with quantity controls and total item counter
- Persistent cart and product data via local storage (`@vueuse/core`)
- Responsive UI components built with Vuetify

## Tech Stack

- [Vue 3](https://vuejs.org/)
- [Vuetify 3](https://vuetifyjs.com/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vite](https://vitejs.dev/)
- TypeScript + SCSS

## Prerequisites

- Node.js 18+ (recommended LTS)
- npm (or another package manager)
- A running API server at `http://localhost:3000`

This frontend expects at least these endpoints:

- `GET /products`
- `GET /filters`

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser (Vite will print the local URL, usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - start local dev server with HMR
- `npm run build` - type-check and build for production
- `npm run preview` - preview the production build locally

## Project Structure

```text
src/
  components/      # UI blocks (home, filters, details, cart, header/footer)
  views/           # Route-level pages
  stores/          # Pinia stores (products, cart)
  services/        # API requests
  routes/          # Vue Router configuration
  styles/          # SCSS styles
  types/           # TypeScript interfaces
  heplers/         # URL/query helper functions
```

## Routing

- `/` - Home
- `/products/:name?` - Product list and filters
- `/details/:name` - Product details
- `/cart` - Shopping cart

## Notes

- API URLs are currently hardcoded to `http://localhost:3000` in the service layer.
- Cart and product state are persisted in local storage, so data survives page refreshes.

## License

This project is for educational/personal use. Add your preferred license if needed.
