import { useState } from 'react'
import Tilt from 'react-parallax-tilt'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolioData'

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
            className="glass-card w-full max-w-2xl rounded-2xl p-6"
          >
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <button type="button" className="rounded-full bg-white/10 p-2 text-white" onClick={onClose}>
                <X size={16} />
              </button>
            </div>
            <img src={project.image} alt={project.title} className="mb-4 h-60 w-full rounded-xl object-cover" />
            <p className="text-slate-300">{project.details}</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="section-wrap">
      <SectionHeading
        eyebrow="Projects"
        title="Interactive Product Showcase"
        subtitle="Selected work blending scalable engineering with premium interaction design."
      />

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={800} className="h-full">
              <article className="glass-card group h-full overflow-hidden rounded-2xl border border-white/15 transition hover:shadow-[0_0_30px_rgba(45,212,191,0.35)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="space-y-4 p-5">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((stack) => (
                      <span
                        key={stack}
                        className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs text-cyan-200"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-slate-100 transition hover:text-cyan-300"
                    >
                      <Github size={15} /> GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-slate-100 transition hover:text-cyan-300"
                    >
                      <ExternalLink size={15} /> Live
                    </a>
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="ml-auto text-sm text-cyan-300 transition hover:text-cyan-200"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}

export default ProjectsSection
