import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi';

const timeline = [
  {
    type: 'work',
    title: 'Freelance Full Stack Developer',
    org: 'Self-Employed',
    period: '2024 — Present',
    description:
      'Building bespoke web applications for clients — from landing pages and dashboards to full SaaS products using React, Node.js, and cloud services.',
  },
  {
    type: 'work',
    title: 'Junior Web Developer',
    org: 'Local Software Agency',
    period: '2023 — 2024',
    description:
      'Collaborated with a cross-functional team to deliver responsive web apps. Gained hands-on experience with React, REST APIs, and agile workflows.',
  },
  {
    type: 'education',
    title: 'BS Information Technology',
    org: 'University in the Philippines',
    period: '2019 — 2023',
    description:
      'Studied software development, database systems, and web technologies. Completed a capstone full-stack inventory management system.',
  },
  {
    type: 'education',
    title: 'Self-Taught Developer',
    org: 'Online Courses & Projects',
    period: '2021 — Present',
    description:
      'Continuously levelling up through online platforms — building real-world projects alongside academic coursework and client work.',
  },
];

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isWork = item.type === 'work';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative flex gap-6"
    >
      {/* Line + dot */}
      <div className="flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border ${
            isWork
              ? 'border-white/10 bg-white/5 text-white'
              : 'border-white/[0.06] bg-dark-600 text-dark-200'
          }`}
        >
          {isWork ? <HiBriefcase className="text-sm" /> : <HiAcademicCap className="text-sm" />}
        </div>
        {index < timeline.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent mt-3" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-12">
        <div className="glass rounded-2xl p-6 hover-lift">
          <span className="text-xs font-mono text-dark-300 uppercase tracking-wider">
            {item.period}
          </span>
          <h3 className="text-lg font-bold text-white mt-2">{item.title}</h3>
          <p className="text-sm font-medium text-dark-300 mt-0.5">{item.org}</p>
          <p className="text-dark-200 text-sm leading-relaxed mt-3">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

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

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="spotlight" />

      <div className="max-w-3xl mx-auto relative z-10">
        <FadeUp>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-dark-300 text-center mb-4">
            Journey
          </p>
          <h2 className="text-center text-[clamp(2rem,5vw,4rem)] font-black leading-[0.95] tracking-tight mb-16 lg:mb-20">
            <span className="text-metallic-light">Experience</span>
            <span className="font-serif italic text-dark-300 font-medium"> & </span>
            <span className="text-white">Education</span>
          </h2>
        </FadeUp>

        <div>
          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
