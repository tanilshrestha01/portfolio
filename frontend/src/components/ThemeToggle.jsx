import { Moon, SunMedium } from 'lucide-react'

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="glass-card flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-slate-100 transition hover:scale-105 hover:text-cyan-300"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
    </button>
  )
}

export default ThemeToggle
