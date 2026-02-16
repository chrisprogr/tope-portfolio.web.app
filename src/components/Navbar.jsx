import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiX } from 'react-icons/hi';
import { HiArrowUpRight } from 'react-icons/hi2';

const menuColumns = [
  {
    title: 'About',
    links: [
      { name: 'About', to: 'about' },
      { name: 'Skills', to: 'skills' },
      { name: 'Experience', to: 'experience' },
    ],
  },
  {
    title: 'Projects',
    links: [
      { name: 'Featured', to: 'projects' },
      { name: 'Services', to: 'services' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { name: 'Email', href: 'mailto:christophercabralsolis@gmail.com' },
      { name: 'Contact', to: 'contact' },
      { name: 'Facebook', href: 'https://www.facebook.com/christopher.solis.180873' },
      { name: 'GitHub', href: 'https://github.com/chrisprogr' },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* Top bar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled ? 'bg-dark-800/80 backdrop-blur-xl border-b border-white/[0.04]' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 sm:px-8 lg:px-12 h-16 md:h-20">
          {/* Logo */}
          <Link
            to="hero"
            smooth
            duration={800}
            className="cursor-pointer z-[70]"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-white to-dark-100 flex items-center justify-center shadow-lg shadow-white/10">
              <span className="text-dark-800 font-black text-sm tracking-tight" style={{ fontFamily: '"Playfair Display", serif' }}>CS</span>
            </div>
          </Link>

          {/* Menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="z-[70] flex items-center gap-3 group cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="text-sm font-medium text-dark-200 group-hover:text-white transition-colors hidden sm:inline">
              {menuOpen ? 'Close' : 'Menu'}
            </span>
            <div className="flex flex-col gap-1.5 w-6">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="block h-[2px] bg-white rounded-full origin-center"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                className="block h-[2px] bg-white rounded-full origin-center"
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[55] bg-dark-800/95 backdrop-blur-2xl flex flex-col"
          >
            {/* Spotlight for menu */}
            <div className="spotlight" />

            <div className="flex-1 flex items-center justify-center pt-20 pb-10 px-6 sm:px-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl w-full">
                {menuColumns.map((col, ci) => (
                  <motion.div
                    key={col.title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: ci * 0.1 }}
                    className={`rounded-2xl p-6 md:p-8 ${
                      ci === 0
                        ? 'bg-white text-dark-800'
                        : ci === 1
                        ? 'glass'
                        : 'bg-dark-400/40 backdrop-blur-sm border border-white/[0.06]'
                    }`}
                  >
                    <h3
                      className={`text-xl md:text-2xl font-bold mb-5 ${
                        ci === 0 ? 'text-dark-800' : ci === 2 ? 'text-red-400' : 'text-white'
                      }`}
                    >
                      {col.title}
                    </h3>
                    <ul className="space-y-3">
                      {col.links.map((link) => (
                        <li key={link.name}>
                          {link.to ? (
                            <Link
                              to={link.to}
                              smooth
                              offset={-20}
                              duration={800}
                              onClick={() => setMenuOpen(false)}
                              className={`flex items-center gap-2 text-base cursor-pointer transition-colors ${
                                ci === 0
                                  ? 'text-dark-400 hover:text-dark-800'
                                  : 'text-dark-200 hover:text-white'
                              }`}
                            >
                              <HiArrowUpRight className="text-xs opacity-50" />
                              {link.name}
                            </Link>
                          ) : (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setMenuOpen(false)}
                              className={`flex items-center gap-2 text-base transition-colors ${
                                ci === 0
                                  ? 'text-dark-400 hover:text-dark-800'
                                  : 'text-dark-200 hover:text-white'
                              }`}
                            >
                              <HiArrowUpRight className="text-xs opacity-50" />
                              {link.name}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
