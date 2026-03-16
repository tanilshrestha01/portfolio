import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'

const pageLinks = [
  {
    title: 'About Me',
    description: 'Background, philosophy, working style, and achievements.',
    path: '/about',
  },
  {
    title: 'Skills',
    description: 'Deep dive into frontend, backend, and product delivery capabilities.',
    path: '/skills',
  },
  {
    title: 'Projects',
    description: 'Detailed case studies with challenges, solutions, and measurable impact.',
    path: '/projects',
  },
  {
    title: 'GitHub',
    description: 'Open-source activity, repositories, and contribution highlights.',
    path: '/github',
  },
  {
    title: 'Journey',
    description: 'Experience timeline, milestones, and education journey.',
    path: '/journey',
  },
  {
    title: 'Contact',
    description: 'Services, FAQs, and a direct contact form for collaboration.',
    path: '/contact',
  },
]

function HomePage() {
  return (
    <main>
      <HeroSection />

      <section className="section-wrap pt-8">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center text-3xl font-bold text-white md:text-4xl"
          >
            Explore Detailed Pages
          </motion.h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
            Instead of one long scrolling page, each section now opens as its own content-rich page.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pageLinks.map((item, index) => (
              <motion.article
                key={item.path}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="glass-card rounded-2xl p-5"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                <Link to={item.path} className="action-btn action-btn-primary mt-4 inline-flex">
                  Open Page
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
