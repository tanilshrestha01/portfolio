import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolioData'

function AboutSection() {
  return (
    <section id="about" className="section-wrap">
      <SectionHeading
        eyebrow="About"
        title="Design-Minded Engineer"
        subtitle="I bridge visual storytelling and technical craft to ship polished products with measurable impact."
      />

      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="glass-card mx-auto grid max-w-5xl gap-8 rounded-3xl p-6 md:grid-cols-[220px_1fr] md:p-8"
      >
        <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-2xl border border-white/20">
          <img
            src="/tanil.png"
            alt="Developer portrait"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white">Hello, I am {profile.name.split(' ')[0]}</h3>
          <p className="mt-3 text-slate-300">{profile.bio}</p>
          <p className="mt-4 text-sm text-cyan-300">Based in {profile.location}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </section>
  )
}

export default AboutSection
