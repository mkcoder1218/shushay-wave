A modern, fully-typed Next.js application for managing Equb (traditional savings groups) digitally. Built with a modular, maintainable architecture.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000`

## 📚 Documentation

This project includes comprehensive documentation:

### For Getting Started

- **[QUICK_START.md](./QUICK_START.md)** - Get up and running in 5 minutes
  - Installation guide
  - Common edits
  - Where to find things
  - Troubleshooting

### For Understanding Structure

- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Complete architecture overview
  - Folder organization
  - Architecture principles
  - Design patterns
  - Best practices

### For Component Development

- **[COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md)** - Detailed component documentation
  - Component catalog with usage examples
  - Props and APIs
  - Styling system
  - Extension patterns

## ✨ Features

- **Modular Architecture** - Well-organized component structure
- **Type-Safe** - Full TypeScript coverage
- **Responsive Design** - Mobile-first approach
- **Modern Stack** - Next.js 16, React 19, Tailwind CSS
- **Component Library** - Reusable UI components
- **Performance Optimized** - Server components by default
- **Developer Friendly** - Clear patterns and conventions

## 📁 Project Structure

```
next-app/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   └── page.tsx           # Homepage
│
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Hero, Partners, HowItWorks
│   ├── ui/                # Button, Container (reusable)
│   └── Home.tsx           # Page composition
│
├── lib/
│   └── constants/         # Application constants
│
├── types/                 # TypeScript definitions
│
└── public/                # Static assets
```

## 🎯 Key Technologies

- **Next.js 16** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Type safety throughout
- **Tailwind CSS 4** - Utility-first styling
- **clsx** - Conditional class names

## 🏗️ Architecture Highlights

### Component Organization

- **Layout components** - Site-wide elements (Navbar, Footer)
- **Section components** - Page sections (Hero, Partners, etc.)
- **UI components** - Reusable building blocks (Button, Container)
- **Feature modules** - Complex features with sub-components

### Separation of Concerns

```
UI Layer (components/)
    ↓
Business Logic (lib/)
    ↓
Type Definitions (types/)
    ↓
Constants (lib/constants/)
```

### Design Patterns

- **Composition** - Build pages from sections
- **Props Pattern** - Type-safe component APIs
- **Constants** - Centralized configuration
- **Feature Modules** - Scalable feature organization

## 🎨 Styling System

- **Mobile-first** responsive design
- **Consistent spacing** scale (4, 8, 12, 16, 20, 24...)
- **Color palette** - Teal/Emerald primary colors
- **Tailwind utilities** - No custom CSS needed

## 📦 Available Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration (via postcss)
- `eslint.config.mjs` - ESLint rules

## 🎓 Learning Resources

### New to the Project?

1. Read [QUICK_START.md](./QUICK_START.md)
2. Make your first edit
3. Explore [COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md)

### Want to Understand Architecture?

1. Read [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
2. Study the component hierarchy
3. Review the design patterns

### Ready to Build Features?

1. Check [COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md)
2. Follow extension patterns
3. Maintain consistency with existing code

## 🎯 Code Quality

- ✅ TypeScript strict mode
- ✅ ESLint configuration
- ✅ Consistent code style
- ✅ Proper prop typing
- ✅ Accessibility considerations
- ✅ Performance optimizations

## 🌟 Best Practices

1. **Component Design**
   - Keep components focused and small
   - Use TypeScript interfaces for all props
   - Leverage composition over prop drilling

2. **Code Organization**
   - Place files in appropriate directories
   - Extract reusable logic
   - Use constants for configuration

3. **Styling**
   - Follow mobile-first approach
   - Use Tailwind utility classes
   - Maintain consistent spacing

4. **Performance**
   - Server Components by default
   - Client components only when needed
   - Optimize images and assets

## 🐛 Troubleshooting

See [QUICK_START.md](./QUICK_START.md#troubleshooting) for common issues and solutions.

## 📖 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🤝 Contributing

When contributing:

1. Follow the existing code structure
2. Maintain type safety
3. Write self-documenting code
4. Update documentation when needed

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ using modern web technologies**
