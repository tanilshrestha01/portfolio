import { lazy, Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { ArrowDownRight, Download, Send } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { profile } from '../data/portfolioData'

const ThreeBackground = lazy(() => import('./ThreeBackground'))

function HeroSection() {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const navigate = useNavigate()

  useEffect(() => {
    const handleMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 16
      const y = (event.clientY / window.innerHeight - 0.5) * 16
      setOffset({ x, y })
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>

      <div className="hero-grid absolute inset-0 -z-20" />

      <div className="mx-auto grid w-[92%] max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
        >
          <p className="mb-5 inline-flex rounded-full border border-cyan-200/20 bg-cyan-300/10 px-4 py-1 text-xs uppercase tracking-[0.22em] text-cyan-300">
            Available for freelance and full-time
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            {profile.name}
            <span className="block bg-gradient-to-r from-cyan-300 via-teal-200 to-rose-300 bg-clip-text text-transparent">
              {profile.title}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-300 md:text-lg">
            I craft immersive web interfaces with purposeful motion and scalable engineering.
            <span className="mt-1 block text-cyan-300">
              <Typewriter
                words={[
                  'React architecture that scales.',
                  'Awwwards-inspired interfaces.',
                  'Performance-first user experiences.',
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={65}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => navigate('/projects')}
              className="action-btn action-btn-primary"
            >
              View Projects <ArrowDownRight size={17} />
            </button>
            <a href={profile.resumeLink} className="action-btn" download>
              Download Resume <Download size={17} />
            </a>
            <button type="button" onClick={() => navigate('/contact')} className="action-btn">
              Contact <Send size={17} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card float-soft relative mx-auto w-full max-w-md rounded-3xl p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Current Focus</p>
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          </div>
          <ul className="space-y-4 text-sm text-slate-200">
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">Design systems with glass and neon aesthetics</li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">GPU-friendly, smooth animations using Framer Motion</li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">Interactive 3D accents with React Three Fiber</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
