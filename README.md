# Bluegrass Digital Coding Assessment

A **Next.js 15** project built with **React 19**, **TypeScript**, **TailwindCSS**, **Framer Motion**, and more. This repository showcases:

- Pixel-perfect implementation from Figma
- Responsive design across multiple breakpoints
- Animated transitions and interactive components
- Mock data integration with Chart.js, tables, and forms
- Clean, modular code following best practices

## Project Structure

```
├── app/
│   ├── layout.tsx               // Global Layout for login
│   ├── page.tsx                 // Login Page
│   ├── (dashboard)/
│   │   ├── layout.tsx           // Dashboard Layout (Navbar + Sidebar)
│   │   ├── dashboard/
│   │   │   └── page.tsx         // Main dashboard overview
│   │   ├── user-settings/
│   │   │   └── page.tsx         // Account management page
│   │   ├── manage-facilities/
│   │   │   └── page.tsx
│   │   └── logs/
│   │       └── page.tsx
├── components/
│   ├── Navbar.tsx               // Top nav with notifications & profile
│   ├── Sidebar.tsx              // Collapsible sidebar
│   ├── InfoCard.tsx             // Reusable card for metrics
│   ├── InfoChart.tsx            // Doughnut chart with Chart.js
│   ├── InfoTable.tsx            // Responsive table view
│   ├── ManageInfoTable.tsx      // Responsive table view to manage facilities
│   └── TechStack.tsx            // Overview of packages & usage
├── lib/
│   └── constants.ts             // Holds arrays, constants, user data
├── styles/
│   └── globals.css              // Tailwind base styles
├── README.md
└── ...
```

## Getting Started

1. **Install dependencies**:

```
npm install
```

2. **Run the development server**:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app. It supports **hot reloading**, so any saved changes will reflect immediately in your browser.

## Tech Stack

- **[Next.js 15](https://nextjs.org/docs)** – core framework for routing, SSR, SSG
- **[React 19](https://react.dev/)** – component-based UI library
- **[TypeScript](https://www.typescriptlang.org/)** – typed superset of JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** – utility-first CSS framework for rapid UI
- **[Framer Motion](https://www.framer.com/motion/)** – advanced animations & transitions
- **[Chart.js + React-Chartjs-2](https://react-chartjs-2.js.org/)** – flexible charting library
- **[React Hook Form + Zod](https://react-hook-form.com/)** – lightweight form handling & schema-based validation
- **[clsx](https://github.com/lukeed/clsx)** – conditional className utility

For more details on the purpose and usage of each, see [`TechStack.tsx`](./components/TechStack.tsx).

## Features

1. **Login & Auth**

   - Simple allowed-users array for demonstration
   - LocalStorage-based session
   - Redirect to `/dashboard` upon valid login

2. **Dashboard**

   - Animated cards (`InfoCard`), charts (`InfoChart`), and tables (`InfoTable`)
   - Mobile-friendly layouts

3. **User Settings**

   - Form built with **React Hook Form + Zod**
   - Real-time facility selection & mock data integration

4. **Responsive Sidebar & Navbar**

   - Hamburger menu for mobile
   - Sticky positioning for desktop
   - Dropdown notifications & user menu

## Deployment

To build for production:

```
npm run build
npm run start
```

Or deploy via **[Vercel](https://vercel.com)**:

1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. On Vercel dashboard, click **Import Project**.
3. Follow the prompts to link your repo & configure environment variables if needed.
4. Vercel automatically builds & deploys your Next.js app.

## Contributing

1. Fork this repository
2. Create a feature branch (`git checkout -b feat/new-stuff`)
3. Commit changes (`git commit -m "Add new stuff"`)
4. Push to the branch (`git push origin feat/new-stuff`)
5. Open a Pull Request

## License

Thi

---

### Further Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Docs](https://zod.dev/)

---

**Enjoy building with Next.js 15!**s project is licensed under the [MIT License](LICENSE).

---

### Further Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Docs](https://zod.dev/)

---

**Enjoy building with Next.js 15!**

