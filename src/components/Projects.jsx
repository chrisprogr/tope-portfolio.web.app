import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';

const projects = [
  {
    category: 'E-COMMERCE CLOTHING STORE',
    title: ['Fashion', '& ', 'Style'],
    name: 'CS THREADS',
    description:
      'A modern online clothing shop with a sleek product catalogue, cart system, and seamless checkout experience — designed to elevate any streetwear brand.',
    liveUrl: 'https://cs-threads.vercel.app/',
    image: '/images/cs-threads.png',
    color: 'from-purple-900/30 to-dark-700',
  },
  {
    category: 'CAPSTONE WEB APPLICATION',
    title: ['Community', '& ', 'Services'],
    name: 'CROSS-WEB',
    description:
      'A full-stack capstone platform providing community-focused web services — built with real-world functionality, authentication, and a production-ready deployment.',
    liveUrl: 'https://cross-web.org/',
    image: '/images/cross-web.png',
    color: 'from-cyan-900/30 to-dark-700',
  },
];

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

function ProjectShowcase({ project, index, reversed }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        reversed ? 'lg:direction-rtl' : ''
      }`}
    >
      {/* Project Image */}
      <div className={`${reversed ? 'lg:order-2' : ''}`}>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative block rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br ${project.color} group`}
        >
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-800/70 via-dark-800/20 to-transparent pointer-events-none" />
          {/* Hover label */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-wider uppercase">
              View Project
            </span>
          </div>
        </a>
      </div>

      {/* Content */}
      <div className={`${reversed ? 'lg:order-1' : ''}`}>
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-dark-300 mb-4">
          {project.category}
        </p>
        <h3 className="text-[clamp(2rem,5vw,4rem)] font-black leading-[0.95] tracking-tight mb-2">
          <span className="text-metallic-light">{project.title[0]}</span>
          <br />
          <span className="font-serif italic text-dark-300 font-medium">{project.title[1]}</span>
          <span className="text-white">{project.title[2]}</span>
        </h3>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-dark-200 mt-4 mb-4">
          {project.name}
        </p>
        <p className="text-dark-200 text-sm sm:text-base leading-relaxed max-w-lg mb-8">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-dark-500/50 border border-white/[0.06] text-white text-sm font-semibold uppercase tracking-wider hover:bg-dark-400/50 hover:border-white/10 transition-all duration-300 group"
          >
            Visit Website
            <HiArrowUpRight className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Spotlight */}
      <div className="spotlight" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section label */}
        <FadeUp>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-dark-300 mb-4">
            2025 — 2026
          </p>
        </FadeUp>

        {/* Big heading */}
        <FadeUp delay={0.1}>
          <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight mb-20 lg:mb-28">
            <span className="font-serif italic text-dark-200 font-medium">Featured</span>
            <br />
            <span className="text-metallic">Capstone &</span>
            <br />
            <span className="text-white">Website</span>
            <br />
            <span className="text-metallic">Projects</span>
          </h2>
        </FadeUp>

        {/* Project showcases */}
        <div className="space-y-24 lg:space-y-36">
          {projects.map((project, i) => (
            <ProjectShowcase
              key={project.name}
              project={project}
              index={i}
              reversed={i % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
