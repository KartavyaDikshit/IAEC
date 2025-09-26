# Project Overview: IAEC Consultants Website

This is a Next.js web application for "IAEC Consultants", a leading overseas education consultancy. The website serves as a comprehensive platform providing information about studying abroad in various countries, detailing the services offered by IAEC, showcasing blog posts, testimonials, and providing essential contact information. The project is built with React, TypeScript, and Tailwind CSS, with a strong emphasis on SEO, performance, and user experience. It utilizes a file-based API for dynamic content like blog posts.

## Technologies Used

*   **Framework:** Next.js
*   **Language:** TypeScript
*   **UI Library:** React
*   **Styling:** Tailwind CSS
*   **Image Optimization:** Next.js Image component
*   **SEO:** Next.js Metadata API, JSON-LD, OpenGraph, Twitter cards
*   **Analytics:** Google Tag Manager

## Architecture Highlights

*   **Component-based:** The application follows a modular, component-based architecture with reusable UI components (e.g., Header, Footer, CountryRibbon).
*   **Page-based Routing:** Leverages Next.js's file-system based routing for different sections of the website (e.g., `/study-abroad/uk`, `/services`).
*   **API Routes:** Utilizes Next.js API routes for server-side data fetching and processing, such as retrieving blog posts from local JSON files.
*   **Static Data Management:** Static content like country details and contact information is managed through TypeScript arrays and JSON files, respectively.
*   **Global Styling:** Tailwind CSS is integrated with custom CSS variables to maintain brand consistency and provide a responsive design.

## Building and Running

To get started with the project, follow these steps:

1.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit the files.

3.  **Build for Production:**
    ```bash
    npm run build
    ```
    This command creates an optimized production build of your application.

4.  **Start Production Server:**
    ```bash
    npm run start
    ```
    This command starts the Next.js production server.

5.  **Run Linting:**
    ```bash
    npm run lint
    ```
    This command runs ESLint to check for code quality and style issues.

## Development Conventions

*   **Code Style:** Adhere to ESLint configurations defined in `eslint.config.mjs` and `tsconfig.json`.
*   **TypeScript First:** All new components and modules should be written in TypeScript to ensure type safety and improve code maintainability.
*   **Component Structure:** Components are typically located in the `src/components` directory, organized into subdirectories based on their functionality (e.g., `src/components/home`).
*   **Styling:** Utilize Tailwind CSS classes for styling. Custom styles and brand colors are defined in `src/app/globals.css` using CSS variables.
*   **Image Handling:** Use the `next/image` component for all images to leverage Next.js's built-in image optimization features. Ensure `alt` attributes are provided for accessibility.
*   **SEO Best Practices:** Pay attention to metadata in `layout.tsx` and individual page components for optimal search engine visibility.
*   **Accessibility:** Strive to make the website accessible by following WCAG guidelines, including proper semantic HTML, keyboard navigation, and focus management.
*   **Data Management:** For static data, prefer TypeScript arrays or JSON files in the `data` directory. For dynamic data, implement Next.js API routes.
*   **File Naming:** Follow Next.js conventions for file-based routing (e.g., `page.tsx`, `layout.tsx`, `route.ts`). Components should use PascalCase.
