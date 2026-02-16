import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

/* Rotating circular badge SVG */
function RotatingBadge() {
  const text = 'OPEN * FOR * COLLABS * ';
  return (
    <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52">
      <svg viewBox="0 0 200 200" className="w-full h-full rotate-badge">
        <defs>
          <path
            id="circlePath"
            d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
          />
        </defs>
        <text fill="white" fontSize="14" fontWeight="700" letterSpacing="4">
          <textPath href="#circlePath">{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-2xl sm:text-3xl font-bold">✦</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-16 sm:pb-20 lg:pb-24 overflow-hidden bg-dark-900"
    >
      {/* Spotlight cone */}
      <div className="spotlight" />

      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-8 lg:px-12">
        {/* Portfolio label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-dark-300 mb-6"
        >
          Portfolio
        </motion.p>

        {/* Big headline row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[clamp(2.5rem,8vw,6.5rem)] font-black leading-[0.95] tracking-tight"
            >
              <span className="text-white">Hi, I&apos;m </span>
              <span className="text-metallic">Christopher</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-2"
            >
              <h2 className="text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-tight">
                <span className="font-serif italic text-dark-200 font-medium">Full Stack </span>
                <span className="text-white font-black">Web</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.95] tracking-tight text-metallic">
                Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 text-dark-200 text-base sm:text-lg max-w-xl leading-relaxed"
            >
              I build modern, fast, and user-friendly web applications for businesses and clients.
              <br />
              Let&apos;s bring your vision to life . . .
            </motion.p>
          </div>

          {/* Rotating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
            className="flex-shrink-0 self-end lg:self-auto"
          >
            <RotatingBadge />
          </motion.div>
        </div>
      </div>

      {/* Scroll down hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <Link to="about" smooth duration={800} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-dark-400 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-dark-300" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
