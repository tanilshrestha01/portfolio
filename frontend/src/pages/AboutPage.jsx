import AboutSection from '../components/AboutSection'
import PageIntro from '../components/PageIntro'
import { aboutPageMock } from '../data/portfolioData'

function AboutPage() {
  return (
    <main className="pb-16">
      <PageIntro
        title="About Me"
        subtitle="A deeper look at how I design, engineer, and collaborate to ship digital products that actually move metrics."
      />

      <AboutSection />

      <section className="section-wrap pt-4">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="glass-card rounded-3xl p-6">
            <h2 className="text-2xl font-semibold text-white">Professional Summary</h2>
            <div className="mt-4 space-y-3 text-slate-300">
              {aboutPageMock.summary.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>

          <article className="glass-card rounded-3xl p-6">
            <h2 className="text-2xl font-semibold text-white">Core Principles</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              {aboutPageMock.principles.map((item) => (
                <li key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <p className="font-semibold text-cyan-300">{item.title}</p>
                  <p className="mt-1">{item.detail}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article className="glass-card mx-auto mt-6 max-w-6xl rounded-3xl p-6">
          <h2 className="text-2xl font-semibold text-white">Selected Outcomes</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {aboutPageMock.achievements.map((point) => (
              <li key={point} className="rounded-2xl border border-cyan-200/20 bg-cyan-400/10 p-4 text-slate-200">
                {point}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  )
}

export default AboutPage
