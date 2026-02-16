import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-scroll';

const footerLinks = [
  { name: 'HOME', to: 'hero' },
  { name: 'ABOUT', to: 'about' },
  { name: 'SKILLS', to: 'skills' },
  { name: 'PROJECTS', to: 'projects' },
  { name: 'SERVICES', to: 'services' },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const year = new Date().getFullYear();

  return (
    <footer ref={ref} className="relative overflow-hidden bg-dark-800 pt-20 pb-10">
      {/* Navigation links row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-14 gap-y-3 mb-12">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={800}
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-dark-200 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Giant watermark text */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 0.06, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center select-none pointer-events-none"
      >
        <span className="text-[clamp(4rem,18vw,16rem)] font-black tracking-tight leading-none text-white uppercase">
          PORTFOLIO
        </span>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex items-center justify-center gap-3 mt-8"
      >
        <div className="w-7 h-7 rounded-md bg-gradient-to-br from-white to-dark-100 flex items-center justify-center shadow-lg shadow-white/10">
          <span className="text-dark-800 font-black text-[10px]" style={{ fontFamily: '"Playfair Display", serif' }}>CS</span>
        </div>
        <span className="text-dark-300 text-sm">&copy; {year}</span>
      </motion.div>
    </footer>
  );
}
