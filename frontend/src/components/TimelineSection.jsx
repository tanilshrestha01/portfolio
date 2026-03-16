import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { timeline } from '../data/portfolioData'

function TimelineSection() {
  return (
    <section id="timeline" className="section-wrap">
      <SectionHeading
        eyebrow="Experience"
        title="Professional Journey"
        subtitle="A timeline of impact across product teams, client work, and technical growth."
      />

      <div className="mx-auto max-w-4xl">
        {timeline.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8 ml-4 border-l border-cyan-300/30 pl-6"
          >
            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
            <p className="text-sm text-cyan-300">{item.year}</p>
            <h3 className="mt-1 text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-slate-300">{item.place}</p>
            <p className="mt-2 text-slate-300">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default TimelineSection
