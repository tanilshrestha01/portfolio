import GithubSection from '../components/GithubSection'
import PageIntro from '../components/PageIntro'
import { githubPageMock } from '../data/portfolioData'

function GithubPage() {
  return (
    <main className="pb-16">
      <PageIntro
        title="GitHub & Open Source"
        subtitle="A richer overview of contribution style, repository themes, and knowledge-sharing footprint."
      />

      <GithubSection />

      <section className="section-wrap pt-4">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="glass-card rounded-3xl p-6">
            <h2 className="text-2xl font-semibold text-white">Contribution Highlights</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              {githubPageMock.highlights.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="glass-card rounded-3xl p-6">
            <h2 className="text-2xl font-semibold text-white">Featured Repositories</h2>
            <div className="mt-4 space-y-3">
              {githubPageMock.repositories.map((repo) => (
                <div key={repo.name} className="rounded-2xl border border-cyan-200/20 bg-cyan-400/10 p-4">
                  <p className="text-lg font-semibold text-white">{repo.name}</p>
                  <p className="mt-1 text-sm text-slate-200">{repo.description}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-cyan-200">
                    {repo.language} • {repo.stars} stars
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

export default GithubPage
