import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { NavLink, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { navItems } from '../data/portfolioData'

function Navbar({ onThemeToggle, theme }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavigate = (path) => {
    navigate(path)
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-3 z-50 mx-auto w-[95%] max-w-6xl"
    >
      <nav className="glass-card relative rounded-2xl border border-white/15 px-4 py-3 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="text-lg font-semibold tracking-wide text-cyan-300"
            onClick={() => handleNavigate('/')}
          >
            Tanil.dev
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm transition ${
                    isActive
                      ? 'bg-cyan-400/20 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.35)]'
                      : 'text-slate-200 hover:bg-white/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle theme={theme} onToggle={onThemeToggle} />
            <button
              type="button"
              aria-label="Toggle menu"
              className="glass-card rounded-full p-2 text-white"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-3 grid gap-2 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => handleNavigate(item.path)}
                className="rounded-xl bg-white/5 px-3 py-2 text-left text-sm text-slate-200 transition hover:bg-cyan-500/20 hover:text-cyan-300"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Navbar
