import ContactSection from '../components/ContactSection'
import PageIntro from '../components/PageIntro'
import { contactPageMock } from '../data/portfolioData'

function ContactPage() {
  return (
    <main className="pb-16">
      <PageIntro
        title="Let us Work Together"
        subtitle="This page includes services, engagement details, common questions, and a direct message form."
      />

      <section className="section-wrap pt-6">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <article className="glass-card rounded-3xl p-6">
            <h2 className="text-2xl font-semibold text-white">Services</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              {contactPageMock.services.map((service) => (
                <li key={service} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  {service}
                </li>
              ))}
            </ul>
          </article>

          <article className="glass-card rounded-3xl p-6">
            <h2 className="text-2xl font-semibold text-white">FAQs</h2>
            <div className="mt-4 space-y-3">
              {contactPageMock.faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-cyan-200/20 bg-cyan-400/10 p-4">
                  <p className="font-semibold text-white">{faq.q}</p>
                  <p className="mt-1 text-slate-200">{faq.a}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}

export default ContactPage
