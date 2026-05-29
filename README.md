<div align="center">
  <img width="1200" height="475" alt="Portfolio Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Personal Portfolio Website

A modern frontend portfolio built with React, TypeScript, Tailwind CSS, and Vite.

- Live demo: https://nwaforgodspower.netlify.app
- GitHub repo: https://github.com/my-portfolio

## Overview

This project is a responsive portfolio website showcasing personal branding, skills, projects, experience, and contact information. It includes:

- A responsive hero section with smooth animations
- An About section featuring a full-width profile image and project details
- Skills and experience sections with reusable UI components
- A dark mode toggle that persists the user's preference
- Tailwind CSS styling and utility-first design

## Tech Stack

- Bun (package manager and runtime)
- React
- TypeScript
- Tailwind CSS
- Vite
- React Query
- Motion for animations
- Lucide React icons

## Getting Started

### Prerequisites

- Bun installed (recommended)
- Git

If Bun is not installed, follow the official installation instructions: https://bun.sh/

### Clone the repository

```bash
git clone https://github.com/my-portfolio.git
cd my-portfolio
```

### Install dependencies

```bash
bun install
```

### Start the development server

```bash
bun run dev
```

Open the URL shown in the terminal (typically `http://localhost:3000`).

## Build for Production

```bash
bun run build
```

## Preview Production Build

```bash
bun run preview
```

## Project Structure

- `src/` — application source code
  - `components/` — reusable UI components and section layouts
  - `context/` — application state providers such as theme switching
  - `components/sections/` — page sections like About, Skills, Projects
  - `components/ui/` — UI primitives like buttons and cards
- `public/` — static assets such as `nelson.jpg`
- `tailwind.config.ts` — Tailwind CSS configuration
- `vite.config.ts` — Vite configuration

## Dark Mode Support

A theme toggle is available in the navigation bar. It:

- switches between light and dark mode
- saves the selected preference to `localStorage`
- applies the `dark` class to the root element for Tailwind compatibility

## Deployment

This site can be deployed to platforms like Netlify, Vercel, or Render.

The live demo is already hosted at:

- https://nwaforgodspower.netlify.app

## Notes

- The portfolio image is served from the `public/` folder as `/nelson.jpg`.
- Bun is used instead of npm for dependency management and script execution.

## Contact

If you want to connect, update the contact section in `src/components/sections/Contact.tsx` with your preferred email or social links.
