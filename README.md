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


<img width="1903" height="1023" alt="Screenshot 2026-04-20 at 14 31 11" src="https://github.com/user-attachments/assets/479b5e0e-e915-423e-bf8a-e286c7c21284" />
<img width="1912" height="981" alt="Screenshot 2026-04-20 at 14 31 21" src="https://github.com/user-attachments/assets/b4bdf76b-fb3e-46b7-9388-a2a833cb9f14" />
<img width="1890" height="1011" alt="Screenshot 2026-04-20 at 14 31 32" src="https://github.com/user-attachments/assets/444c7271-2112-4a3c-a24b-e06cdfd4b842" />
<img width="1878" height="1021" alt="Screenshot 2026-04-20 at 14 31 45" src="https://github.com/user-attachments/assets/1a86d66a-ce01-45b2-a21b-1dc74e0846b6" />

<img width="1863" height="1008" alt="Screenshot 2026-04-20 at 14 31 57" src="https://github.com/user-attachments/assets/bbbf36a9-40e7-4f44-9dd1-3b301ec1d0de" />
<img width="1469" height="889" alt="Screenshot 2026-04-20 at 14 33 08" src="https://github.com/user-attachments/assets/54608504-7881-4f1e-bf58-09c7c10baf84" />







