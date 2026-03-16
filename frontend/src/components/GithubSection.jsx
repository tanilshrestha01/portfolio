import { motion } from 'framer-motion'
import { GitHubCalendar } from 'react-github-calendar'
import { Star, GitCommitHorizontal, GitFork, CircleUserRound } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolioData'

const stats = [
  { label: 'Commits', value: '1.2K+', icon: GitCommitHorizontal },
  { label: 'Stars', value: '420+', icon: Star },
  { label: 'Forks', value: '95+', icon: GitFork },
  { label: 'Contributions', value: '2.8K+', icon: CircleUserRound },
]

function GithubSection() {
  return (
    <section id="github" className="section-wrap">
      <SectionHeading
        eyebrow="GitHub"
        title="Open Source Activity"
        subtitle="Daily coding consistency, public projects, and a visible engineering footprint."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="glass-card mx-auto max-w-6xl rounded-3xl p-4 md:p-7"
      >
        <div className="overflow-auto rounded-2xl border border-white/10 bg-slate-950/35 p-4">
          <GitHubCalendar
            username={profile.githubUsername}
            colorScheme="dark"
            blockSize={14}
            blockMargin={4}
            fontSize={12}
          />
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <article key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <item.icon size={18} className="text-cyan-300" />
              <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
              <p className="text-sm text-slate-300">{item.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-6">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${profile.githubUsername}&show_icons=true&theme=tokyonight&hide_border=true`}
            alt="GitHub stats"
            className="h-auto w-full rounded-xl border border-white/10"
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default GithubSection
