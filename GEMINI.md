# GEMINI.md

This file contains the development context and guidelines for the My-Link project. These instructions take absolute precedence for all development tasks.

## 1. Project Overview
- **Project Name**: My-Link
- **Goal**: A minimalist, nickname-based link management service that removes unnecessary features.
- **Core Value**: "A clean profile completed only with text and favicons, without the need for image uploads."
- **Key Features**:
  - Google Social Login via Firebase Auth.
  - Personalized URLs (`mylink.com/displayName`).
  - Add, delete, and inline edit links.
  - Automatic favicon extraction using Google API.
  - Simple UI/UX (Skeleton UI, Sticky Footer).

## 2. Tech Stack
- **Framework**: Next.js 15+ (App Router, Turbopack)
- **UI Library**: React 19, shadcn/ui
- **Icons**: Hugeicons (React)
- **Styling**: Tailwind CSS 4 (PostCSS)
- **Backend/Auth**: Firebase (Authentication, Firestore)
- **Language**: TypeScript
- **Deployment**: Vercel

## 3. Key Commands
- `npm run dev`: Run development server (with Turbopack)
- `npm run build`: Production build
- `npm run start`: Start production server
- `npm run lint`: Linting with ESLint
- `npm run format`: Formatting with Prettier (`ts, tsx`)
- `npm run typecheck`: TypeScript type checking

## 4. Development Conventions
- **User Preferences**:
  - Automatically open the browser when running the development server (`npm run dev`).
- **Component Structure**:
  - Common UI components reside in `components/ui/` (managed via shadcn/ui CLI).
  - Business logic components should be organized under `components/`.
- **Styling**:
  - Use Tailwind CSS 4 for all styling.
  - Default fonts: `Nunito_Sans` and `Roboto` (defined in `@app/layout.tsx`).
- **UI/UX Guidelines**:
  - **Inline Editing**: Prefer direct editing in the list without navigating to a separate edit page. Use the pencil icon (`✎`) to indicate editable fields.
  - **Favicons**: Use Google Favicon API (`https://www.google.com/s2/favicons?domain=[URL]&sz=64`) for real-time display.
  - **Sticky Footer**: Always place a CTA button ("Create your My-Link") at the bottom of the page.
  - **Skeleton UI**: Use shadcn/ui Skeleton components for all loading states to prevent layout shifts.
  - **Interactions**: Apply a subtle `scale` effect on link cards when hovered.
- **Data Management**:
  - Use Firebase Firestore.
  - User info: `users` collection.
  - Links: `links` sub-collection under each user document.
- **Collaboration**:
  - Refer to documents in the `@docs/` directory for PRD, scenarios, and wireframes.

## 5. Project Structure
- `app/`: Next.js App Router pages and layouts
- `components/`: React components
- `docs/`: Project documentation (PRD, Scenarios, Wireframe)
- `hooks/`: Custom React hooks
- `lib/`: Utility functions and configuration
- `public/`: Static assets
