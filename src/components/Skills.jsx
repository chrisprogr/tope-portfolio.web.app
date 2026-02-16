import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiGit, SiFigma,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const floatingIcons = [
  { icon: <SiHtml5 />, x: '10%', y: '15%', size: 'text-3xl', color: 'text-orange-500/20' },
  { icon: <SiJavascript />, x: '25%', y: '8%', size: 'text-4xl', color: 'text-yellow-400/15' },
  { icon: <SiReact />, x: '55%', y: '12%', size: 'text-5xl', color: 'text-cyan-400/15' },
  { icon: <SiNodedotjs />, x: '80%', y: '10%', size: 'text-3xl', color: 'text-green-500/15' },
  { icon: <SiTailwindcss />, x: '90%', y: '20%', size: 'text-4xl', color: 'text-cyan-300/10' },
  { icon: <SiMongodb />, x: '5%', y: '28%', size: 'text-2xl', color: 'text-green-400/15' },
  { icon: <SiFirebase />, x: '70%', y: '5%', size: 'text-3xl', color: 'text-amber-500/15' },
  { icon: <SiFigma />, x: '42%', y: '25%', size: 'text-2xl', color: 'text-purple-400/15' },
  { icon: <SiGit />, x: '15%', y: '5%', size: 'text-2xl', color: 'text-red-400/10' },
];

const skillCards = [
  {
    title: 'FRONTEND DEVELOPMENT',
    description:
      'I build responsive, performant user interfaces with React, Tailwind CSS, and modern JavaScript. Every component is crafted for speed, accessibility, and seamless user experience across all devices.',
    techs: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'BACKEND DEVELOPMENT',
    description:
      'I architect robust server-side solutions with Node.js and Express, building RESTful APIs, authentication systems, and real-time data flows that power reliable, scalable applications.',
    techs: ['Node.js', 'Express', 'REST APIs', 'Authentication'],
  },
  {
    title: 'DATABASE & CLOUD',
    description:
      'I design efficient data models and leverage cloud services for storage, hosting, and real-time sync. From MongoDB collections to Firebase integrations, I ensure data is structured and accessible.',
    techs: ['MongoDB', 'Firebase', 'Cloud Hosting', 'Real-time DB'],
  },
  {
    title: 'TOOLS & WORKFLOW',
    description:
      'I use industry-standard tooling for version control, design prototyping, and development workflow. Git for collaboration, Figma for UI mockups, and VS Code as my daily driver.',
    techs: ['Git', 'GitHub', 'Figma', 'VS Code'],
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

export default function Skills() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? skillCards.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === skillCards.length - 1 ? 0 : c + 1));

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Spotlight */}
      <div className="spotlight" />

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((fi, i) => (
          <motion.div
            key={i}
            className={`absolute ${fi.size} ${fi.color}`}
            style={{ left: fi.x, top: fi.y }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {fi.icon}
          </motion.div>
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Label */}
        <FadeUp>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-dark-300 text-center mb-8">
            Core Technologies
          </p>
        </FadeUp>

        {/* Big heading */}
        <FadeUp delay={0.1}>
          <h2 className="text-center text-[clamp(1.5rem,4vw,3.2rem)] font-bold leading-snug max-w-4xl mx-auto mb-16">
            <span className="text-dark-100">The </span>
            <span className="font-serif italic text-dark-300">skills, </span>
            <span className="font-serif italic text-dark-300">tools, </span>
            <span className="text-dark-100">and </span>
            <span className="font-serif italic text-dark-300">experience</span>
            <br />
            <span className="text-white font-extrabold">
              I apply across development, design, and delivery.
            </span>
          </h2>
        </FadeUp>

        {/* Carousel arrows */}
        <FadeUp delay={0.2}>
          <div className="flex items-center justify-center gap-4 mb-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-dark-400 flex items-center justify-center text-dark-200 hover:text-white hover:border-white/30 transition-all duration-300"
              aria-label="Previous skill"
            >
              <HiChevronLeft className="text-xl" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-dark-400 flex items-center justify-center text-dark-200 hover:text-white hover:border-white/30 transition-all duration-300"
              aria-label="Next skill"
            >
              <HiChevronRight className="text-xl" />
            </button>
          </div>
        </FadeUp>

        {/* Cards carousel */}
        <FadeUp delay={0.3}>
          <div className="relative flex items-stretch justify-center gap-5 overflow-hidden px-4">
            {skillCards.map((card, i) => {
              const offset = i - current;
              const isActive = i === current;
              return (
                <motion.div
                  key={card.title}
                  animate={{
                    x: `${offset * 105}%`,
                    scale: isActive ? 1 : 0.85,
                    opacity: Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.4,
                    zIndex: isActive ? 10 : 1,
                  }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute w-full max-w-md glass rounded-2xl p-8 text-center"
                  style={{ position: i === 0 ? 'relative' : 'absolute' }}
                >
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-dark-500/50 border border-white/[0.06] flex items-center justify-center">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/[0.02]" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-wide uppercase mb-4">
                    {card.title}
                  </h3>
                  <div className="w-8 h-px bg-dark-400 mx-auto mb-4" />
                  <p className="text-dark-200 text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {card.techs.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-dark-500/60 border border-white/[0.04] text-dark-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </FadeUp>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {skillCards.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-white w-6' : 'bg-dark-400'
              }`}
              aria-label={`Skill ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
