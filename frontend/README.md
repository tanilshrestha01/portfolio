# Developer Portfolio - React + Tailwind + Framer Motion + R3F

A production-quality developer portfolio with glassmorphism aesthetics, animated section transitions, a 3D hero background, and responsive UX across mobile, tablet, and desktop.

## Tech Stack

- React (Vite)
- Tailwind CSS
- Framer Motion
- React Three Fiber + Drei + Three.js
- Lucide React icons

## Project Structure

src/
- components/
- pages/
- assets/
- styles/
- data/

## Installed Packages

Runtime:
- @react-three/fiber
- @react-three/drei
- three
- framer-motion
- lucide-react
- react-simple-typewriter
- react-parallax-tilt
- react-github-calendar
- @emailjs/browser
- clsx

Dev:
- tailwindcss
- postcss
- autoprefixer

## Local Development

1. Install dependencies:

	npm install

2. Start dev server:

	npm run dev

3. Build for production:

	npm run build

4. Preview production build:

	npm run preview

## Personalization Checklist

Update values in src/data/portfolioData.js:
- Name, title, email, location
- Social links
- Resume URL
- GitHub username
- Skills, projects, timeline

Update static assets if needed:
- public/resume.pdf
- public/og-cover.png

## Email Integration (EmailJS)

The contact form is already wired to EmailJS.

1. Copy environment template:

	cp .env.example .env

2. Add EmailJS values in .env:

	VITE_EMAILJS_SERVICE_ID=...
	VITE_EMAILJS_TEMPLATE_ID=...
	VITE_EMAILJS_PUBLIC_KEY=...

3. In EmailJS template, map these variables:
- from_name
- from_email
- message
- to_name
- reply_to

4. Restart dev server after changing env values.

## Deploy to Vercel

1. Push project to GitHub.
2. Go to Vercel Dashboard and import your repository.
3. Vercel auto-detects Vite settings.
4. Build command: npm run build
5. Output directory: dist
6. Deploy.

For CLI deployment:

1. Install Vercel CLI:

	npm i -g vercel

2. Run:

	vercel

3. For production:

	vercel --prod
