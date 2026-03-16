import ProjectsSection from '../components/ProjectsSection'
import PageIntro from '../components/PageIntro'
import { projectsPageMock } from '../data/portfolioData'

function ProjectsPage() {
  return (
    <main className="pb-16">
      <PageIntro
        title="Project Case Studies"
        subtitle="Detailed snapshots of challenge framing, product strategy, implementation details, and business impact."
      />

      <ProjectsSection />

      <section className="section-wrap pt-4">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {projectsPageMock.map((study) => (
            <article key={study.title} className="glass-card rounded-3xl p-5">
              <h2 className="text-xl font-semibold text-white">{study.title}</h2>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-cyan-300">Challenge</p>
              <p className="mt-1 text-slate-300">{study.challenge}</p>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-cyan-300">Solution</p>
              <p className="mt-1 text-slate-300">{study.solution}</p>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-cyan-300">Impact</p>
              <ul className="mt-1 space-y-1 text-slate-200">
                {study.impact.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProjectsPage
