import { ChevronUp, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { profile } from '../data/portfolioData'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto flex w-[92%] max-w-6xl flex-col items-center justify-between gap-4 py-8 text-sm text-slate-300 md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>

        <div className="flex items-center gap-3">
          <a className="social-btn" href={profile.socialLinks.github} target="_blank" rel="noreferrer">
            <Github size={15} />
          </a>
          <a className="social-btn" href={profile.socialLinks.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={15} />
          </a>
          <a className="social-btn" href={profile.socialLinks.x} target="_blank" rel="noreferrer">
            <Twitter size={15} />
          </a>
          <a className="social-btn" href={`mailto:${profile.email}`}>
            <Mail size={15} />
          </a>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="social-btn"
            aria-label="Back to top"
          >
            <ChevronUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
