import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiGlobeAlt, HiDevicePhoneMobile, HiPaintBrush, HiUsers } from 'react-icons/hi2';
import { Link } from 'react-scroll';

const services = [
  {
    icon: <HiGlobeAlt className="w-12 h-12 stroke-[0.5]" />,
    title: 'Landing Pages',
    desc: 'Clear, focused, effective',
  },
  {
    icon: <HiDevicePhoneMobile className="w-12 h-12 stroke-[0.5]" />,
    title: 'Website Development',
    desc: 'Modern & responsive builds',
  },
  {
    icon: <HiPaintBrush className="w-12 h-12 stroke-[0.5]" />,
    title: 'UI & Responsive Design',
    desc: 'Clean and user-focused',
  },
  {
    icon: <HiUsers className="w-12 h-12 stroke-[0.5]" />,
    title: 'Collaborative Projects',
    desc: 'Limited free slots',
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

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="spotlight" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Label */}
        <FadeUp>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-dark-300 text-center mb-8">
            Bespoke Web Builds
          </p>
        </FadeUp>

        {/* Big statement */}
        <FadeUp delay={0.1}>
          <h2 className="text-center text-[clamp(1.5rem,4vw,3rem)] font-bold leading-snug max-w-4xl mx-auto mb-20">
            <span className="text-dark-100">A creative </span>
            <span className="font-serif italic text-dark-300">web studio </span>
            <span className="text-white font-extrabold">building bespoke websites and landing pages, </span>
            <span className="text-dark-100">with select </span>
            <span className="font-serif italic text-dark-300">free projects </span>
            <span className="text-dark-100">available for collaboration and growth.</span>
          </h2>
        </FadeUp>

        {/* Service cards grid */}
        <FadeUp delay={0.2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-darker rounded-2xl p-6 sm:p-8 text-center group cursor-default"
              >
                <div className="text-dark-300 group-hover:text-dark-100 transition-colors duration-300 flex justify-center mb-5">
                  {svc.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">{svc.title}</h3>
                <p className="text-xs sm:text-sm text-dark-300">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </FadeUp>

        {/* Statement + CTA */}
        <FadeUp delay={0.3}>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-[clamp(1.2rem,3vw,2.2rem)] font-bold leading-snug mb-10">
              <span className="text-dark-100">If you&apos;re looking to improve or launch your </span>
              <span className="font-serif italic text-dark-300">website</span>
              <span className="text-dark-100">, I offer a limited number of </span>
              <span className="font-serif italic text-dark-300">free</span>
              <span className="text-white font-extrabold">, collaborative builds focused on </span>
              <span className="font-serif italic text-dark-300">clarity </span>
              <span className="text-white font-extrabold">and real-world </span>
              <span className="font-serif italic text-dark-300">results</span>
              <span className="text-dark-100">.</span>
            </p>

            <Link
              to="contact"
              smooth
              duration={800}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-dark-500/50 border border-white/[0.06] text-white text-sm font-semibold uppercase tracking-[0.2em] hover:bg-dark-400/50 hover:border-white/10 transition-all duration-300 cursor-pointer"
            >
              What I Offer
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
