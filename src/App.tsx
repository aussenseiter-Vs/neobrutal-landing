import { motion } from 'motion/react'
import './App.css'

const spring = { type: 'spring', stiffness: 260, damping: 18 } as const
const rise = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { ...spring } },
}

const emojis = ['👊', '💥', '⭐', '🍩', '🚀', '🦖', '⚡', '🪩']

function Nav() {
  return (
    <motion.nav
      className="nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={spring}
    >
      <div className="logo">
        <span className="logo-box">T</span>
        TOONZ<span className="logo-star">★</span>
      </div>
      <div className="links">
        <a href="#features">Features</a>
        <a href="#gallery">Gallery</a>
        <a href="#pricing">Pricing</a>
      </div>
      <motion.a
        className="btn btn-pink"
        href="#join"
        whileHover={{ scale: 1.06, rotate: -2 }}
        whileTap={{ scale: 0.92, y: 4 }}
      >
        Get Started
      </motion.a>
    </motion.nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <motion.h1
        variants={rise}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.1 }}
      >
        YOUR WORLD, <br />
        <span className="hilite">BIGGER</span> &amp; <span className="hilite2">BOLDER.</span>
      </motion.h1>
      <motion.p
        className="sub"
        variants={rise}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.2 }}
      >
        The cartoon landing page that smashes your brand into a comic strip.
        Thick borders. Hard shadows. Zero boring.
      </motion.p>
      <motion.div
        className="cta"
        variants={rise}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.3 }}
      >
        <motion.a
          className="btn btn-yellow btn-lg"
          href="#join"
          whileHover={{ scale: 1.06, rotate: -2 }}
          whileTap={{ scale: 0.92, y: 4 }}
        >
          POW! START FREE 🚀
        </motion.a>
        <motion.a
          className="btn btn-white btn-lg"
          href="#gallery"
          whileHover={{ scale: 1.06, rotate: 2 }}
          whileTap={{ scale: 0.92, y: 4 }}
        >
          Watch Demo ▶
        </motion.a>
      </motion.div>

      <div className="hero-art" aria-hidden>
        <motion.div
          className="art-card art-a"
          animate={{ rotate: [0, -4, 4, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          <span className="art-face">😎</span>
          <p>no chill zone</p>
        </motion.div>
        <motion.div
          className="art-card art-b"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        >
          <span className="art-face">🤯</span>
          <p>brain exploding</p>
        </motion.div>
        <motion.div
          className="art-card art-c"
          animate={{ rotate: [0, -6, 6, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
        >
          <span className="art-face">🦖</span>
          <p>rawr</p>
        </motion.div>
      </div>
    </section>
  )
}

function Marquee() {
  const row = emojis.map((e, i) => (
    <span className="marquee-item" key={i}>
      {e} WE ARE SO BACK
    </span>
  ))
  return (
    <div className="marquee-wrap">
      <motion.div
        className="marquee"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
      >
        {row}
        {row}
      </motion.div>
    </div>
  )
}

const features = [
  { emoji: '👊', title: 'Punchy Layout', text: 'Big type that slaps. Nobody needs to squint.', color: 'yellow' },
  { emoji: '🎨', title: 'Wild Colors', text: 'A palette that screams louder than your marketing team.', color: 'pink' },
  { emoji: '⚡', title: 'Blazing Fast', text: 'Loads in a blink. Powered by pure cartoon energy.', color: 'blue' },
  { emoji: '🍩', title: 'Zero Calories', text: 'Design snacks that taste great and weigh nothing.', color: 'green' },
  { emoji: '🤸', title: 'Bouncy Motion', text: 'Everything wiggles, bounces, and boings around.', color: 'orange' },
  { emoji: '💾', title: 'Save the World', text: 'Or at least your conversion rate. Same energy.', color: 'purple' },
]

function Features() {
  return (
    <section id="features" className="section">
      <motion.h2
        className="section-title"
        variants={rise}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        FEATURES THAT GO <span className="hilite">BAM!</span>
      </motion.h2>
      <div className="grid">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className={`card card-${f.color}`}
            initial={{ opacity: 0, y: 60, rotate: i % 2 ? 3 : -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...spring, delay: i * 0.06 }}
            whileHover={{ rotate: i % 2 ? 2 : -2, scale: 1.03, x: i % 2 ? -4 : 4 }}
          >
            <motion.div
              className="card-emoji"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 + i * 0.3, ease: 'easeInOut' }}
            >
              {f.emoji}
            </motion.div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
            <span className="card-sticker">SIC!</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Stats() {
  const items = [
    { num: '250K+', label: 'Users crushed it' },
    { num: '99.9%', label: 'Uptime (probably)' },
    { num: '4.9★', label: 'Rated by fans' },
  ]
  return (
    <section className="section stats">
      {items.map((s, i) => (
        <motion.div
          key={s.label}
          className="stat"
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: i * 0.12 }}
        >
          <motion.span
            className="stat-num"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, delay: i * 0.3 }}
          >
            {s.num}
          </motion.span>
          <span className="stat-label">{s.label}</span>
        </motion.div>
      ))}
    </section>
  )
}

function Pricing() {
  const plans = [
    { name: 'LOONEY', price: '$0', color: 'green', tag: 'just for fun', features: ['1 cartoon page', 'Basic boings', 'Community support'] },
    { name: 'TOONY', price: '$19', color: 'yellow', tag: 'most popular', features: ['All cartoon pages', 'Unlimited wiggles', 'Priority BAM support'] },
    { name: 'ZANY', price: '$49', color: 'pink', tag: 'for true chaos', features: ['Everything + confetti', 'Custom mascot', 'Dedicated silly coach'] },
  ]
  return (
    <section id="pricing" className="section">
      <motion.h2
        className="section-title"
        variants={rise}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        PICK YOUR <span className="hilite2">CHAOS</span> PLAN
      </motion.h2>
      <div className="grid grid-3">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            className={`card plan card-${p.color} ${p.tag === 'most popular' ? 'plan-hot' : ''}`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...spring, delay: i * 0.1 }}
            whileHover={{ scale: 1.04, rotate: i === 1 ? 0 : (i % 2 ? 2 : -2) }}
          >
            {p.tag === 'most popular' && <span className="hot-badge">🔥 HOT</span>}
            <h3 className="plan-name">{p.name}</h3>
            <p className="plan-price">{p.price}</p>
            <p className="plan-tag">{p.tag}</p>
            <ul>
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <motion.a
              className="btn btn-white"
              href="#join"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92, y: 4 }}
            >
              GO {p.name}!
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Join() {
  return (
    <motion.section
      id="join"
      className="section join"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={spring}
    >
      <h2>
        READY TO GET <span className="hilite">GOOFY?</span>
      </h2>
      <p className="sub">Join 2,000+ teams drawing their way to glory.</p>
      <form className="join-form" onSubmit={(e) => e.preventDefault()}>
        <motion.input
          type="email"
          placeholder="your@email.com"
          whileHover={{ rotate: -1 }}
          required
        />
        <motion.button
          className="btn btn-yellow btn-lg"
          type="submit"
          whileHover={{ scale: 1.06, rotate: 2 }}
          whileTap={{ scale: 0.92, y: 4 }}
        >
          YES, PLEASE!
        </motion.button>
      </form>
      <motion.span
        className="confetti"
        aria-hidden
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
      >
        🎉
      </motion.span>
    </motion.section>
  )
}

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <p>© 2026 TOONZ — made with ☕ and questionable taste.</p>
      <div className="footer-links">
        <a href="#features">Docs</a>
        <a href="#pricing">Pricing</a>
        <a href="#join">Contact</a>
      </div>
    </motion.footer>
  )
}

function App() {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <Marquee />
      <Features />
      <Stats />
      <Pricing />
      <Join />
      <Footer />
    </div>
  )
}

export default App
