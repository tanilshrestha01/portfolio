import TimelineSection from '../components/TimelineSection'
import PageIntro from '../components/PageIntro'
import { journeyPageMock } from '../data/portfolioData'

function JourneyPage() {
  return (
    <main className="pb-16">
      <PageIntro
        title="Experience Journey"
        subtitle="Milestones, role evolution, and the systems thinking that shaped my current engineering approach."
      />

      <TimelineSection />

      <section className="section-wrap pt-4">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="glass-card rounded-3xl p-6">
            <h2 className="text-2xl font-semibold text-white">Career Milestones</h2>
            <div className="mt-4 space-y-3">
              {journeyPageMock.milestones.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-cyan-300">{item.period}</p>
                  <p className="mt-1 font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-card rounded-3xl p-6">
            <h2 className="text-2xl font-semibold text-white">Education & Mentorship</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              {journeyPageMock.educationNotes.map((note) => (
                <li key={note} className="rounded-2xl border border-cyan-200/20 bg-cyan-400/10 p-3">
                  {note}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  )
}

export default JourneyPage
