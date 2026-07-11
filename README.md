# Shushay Wave

A modern, fully-typed Next.js application for managing Equb (traditional savings groups) digitally. Built with a modular and maintainable architecture.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📁 Project Structure

The project follows a clean and organized structure:

```text
.
├── app/               # Next.js App Router (pages, layouts, and global styles)
├── components/        # React components
│   ├── layout/        # Site-wide elements (Navbar, Footer, etc.)
│   ├── sections/      # Page-specific sections (Hero, Partners, etc.)
│   └── ui/            # Reusable building blocks (Buttons, Containers, etc.)
├── lib/               # Utility functions, constants, and shared logic
├── public/            # Static assets like images and icons
└── types/             # TypeScript type definitions and interfaces
```

## 🛠️ Installation

Ensure you have Node.js installed. Then, clone the repository and run the following command to install the dependencies:

```bash
npm install
```

## 💻 Running the Project

Start the development server with:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📦 Available Scripts

In the project directory, you can run the following commands:

- `npm run dev` - Starts the development server.
- `npm run build` - Builds the app for production.
- `npm start` - Runs the built application in production mode.
- `npm run lint` - Runs ESLint to check for code quality and style issues.
