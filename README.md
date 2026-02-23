# Premium Electricista Landing Page

A high-end, ultra-modern, minimalist landing page for a premium Electrical Services brand built with React, TypeScript, Vite, and Framer Motion.

## Features

- **Dark Mode Theme**: Deep black background with high-contrast electric yellow accents
- **Glassmorphism Effects**: Service cards and sections with backdrop blur and subtle borders
- **Framer Motion Animations**: Smooth eased transitions, staggered reveal animations, and hover effects
- **Interactive Service Estimator**: Dynamic price calculator with toggles and sliders
- **Horizontal Portfolio Gallery**: Cinematic scrollable showcase of electrical projects
- **Responsive Design**: Mobile-first approach with clean grid layouts
- **Trust Signals**: Licensed & Insured badges and experience highlights

## Tech Stack

- React 19
- TypeScript
- Vite
- Framer Motion
- Lucide React (icons)
- Inter Font

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

## Sections

- Hero: Animated title with CTA and scroll indicator
- Services: Glassmorphism cards with hover effects
- Estimator: Interactive price calculator
- Portfolio: Horizontal scroll gallery
- Map: Embedded Google Maps
- Footer: Contact info and trust signals

## Customization

- Colors: Deep charcoal (#0a0a0a), electric yellow (#FFD700), white
- Typography: Inter font family
- Animations: Configurable via Framer Motion variants
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
