import SkillsSection from '../components/SkillsSection'
import PageIntro from '../components/PageIntro'
import { skillsPageMock } from '../data/portfolioData'

function SkillsPage() {
  return (
    <main className="pb-16">
      <PageIntro
        title="Skills & Capabilities"
        subtitle="Beyond tool lists: this page covers architecture depth, execution strengths, and delivery outcomes."
      />

      <SkillsSection />

      <section className="section-wrap pt-4">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {skillsPageMock.capabilities.map((block) => (
            <article key={block.domain} className="glass-card rounded-3xl p-5">
              <h2 className="text-xl font-semibold text-white">{block.domain}</h2>
              <p className="mt-2 text-slate-300">{block.details}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {block.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-cyan-200">
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <article className="glass-card mx-auto mt-6 max-w-6xl rounded-3xl p-6">
          <h2 className="text-2xl font-semibold text-white">Certifications & Continuous Learning</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {skillsPageMock.certifications.map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  )
}

export default SkillsPage
