import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send, Twitter } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolioData'

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'Email service is not configured yet. Add EmailJS keys in your environment file.',
      })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: 'idle', message: '' })

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: profile.name,
          reply_to: form.email,
        },
        { publicKey },
      )

      setStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' })
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus({
        type: 'error',
        message: 'Unable to send right now. Please try again shortly or reach out via email link.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-wrap pb-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let us Build Something Sharp"
        subtitle="Send a quick brief and I will respond with timeline, approach, and transparent pricing."
      />

      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.form
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          onSubmit={handleSubmit}
          className="glass-card rounded-3xl p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="input-wrap">
              Name
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label className="input-wrap">
              Email
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>
          </div>

          <label className="input-wrap mt-4">
            Message
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project goals..."
            />
          </label>

          <button type="submit" disabled={isSubmitting} className="action-btn action-btn-primary mt-4 disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
          </button>
          {status.message ? (
            <p
              className={`mt-3 text-sm ${
                status.type === 'success' ? 'text-emerald-300' : 'text-rose-300'
              }`}
            >
              {status.message}
            </p>
          ) : (
            <p className="mt-3 text-xs text-slate-400">
              Powered by EmailJS. Messages are delivered without exposing server credentials.
            </p>
          )}
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="glass-card rounded-3xl p-6"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Connect</p>
          <a href={`mailto:${profile.email}`} className="mt-2 inline-flex items-center gap-2 text-lg text-white">
            <Mail size={17} /> {profile.email}
          </a>
          <div className="mt-5 flex gap-3">
            <a className="social-btn" href={profile.socialLinks.github} target="_blank" rel="noreferrer">
              <Github size={17} />
            </a>
            <a className="social-btn" href={profile.socialLinks.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={17} />
            </a>
            <a className="social-btn" href={profile.socialLinks.x} target="_blank" rel="noreferrer">
              <Twitter size={17} />
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-cyan-200/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
            For internships and freelance inquiries, include timeline, scope, and budget range for the fastest response.
          </div>
        </motion.aside>
      </div>
    </section>
  )
}

export default ContactSection
