import { motion } from 'framer-motion'
import { Code2, Database, Figma, Server, Settings2, Wrench } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { skillCategories } from '../data/portfolioData'

const iconMap = {
  Frontend: Code2,
  Backend: Server,
  Tools: Wrench,
}

const accentMap = {
  Frontend: 'from-cyan-400/20 to-blue-400/10',
  Backend: 'from-rose-400/20 to-amber-300/10',
  Tools: 'from-emerald-400/20 to-teal-300/10',
}

function SkillTag({ text }) {
  let icon = <Settings2 size={14} />
  if (text.toLowerCase().includes('figma')) icon = <Figma size={14} />
  if (text.toLowerCase().includes('sql') || text.toLowerCase().includes('mongo')) icon = <Database size={14} />

  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
      {icon}
      {text}
    </span>
  )
}

function SkillsSection() {
  return (
    <section id="skills" className="section-wrap">
      <SectionHeading
        eyebrow="Skills"
        title="Built for Product Velocity"
        subtitle="A modern toolkit to craft resilient frontend systems and robust full-stack experiences."
      />

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {skillCategories.map((group, index) => {
          const Icon = iconMap[group.category]

          return (
            <motion.article
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className={`glass-card group rounded-3xl border border-white/15 bg-gradient-to-b ${accentMap[group.category]} p-5`}
            >
              <div className="mb-4 inline-flex rounded-xl border border-white/20 bg-white/10 p-3 text-cyan-300 transition group-hover:scale-110 group-hover:shadow-[0_0_26px_rgba(34,211,238,0.35)]">
                <Icon size={18} />
              </div>
              <h3 className="text-xl font-semibold text-white">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillTag key={skill} text={skill} />
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default SkillsSection
