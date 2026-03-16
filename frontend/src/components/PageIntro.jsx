import { motion } from 'framer-motion'

function PageIntro({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mx-auto w-[92%] max-w-6xl pt-28"
    >
      <div className="glass-card rounded-3xl p-6 md:p-8">
        <h1 className="text-3xl font-bold text-white md:text-5xl">{title}</h1>
        <p className="mt-3 max-w-3xl text-slate-300">{subtitle}</p>
      </div>
    </motion.div>
  )
}

export default PageIntro
