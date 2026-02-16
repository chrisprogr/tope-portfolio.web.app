import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Spotlight */}
      <div className="spotlight" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — big heading with circle bg */}
          <FadeUp>
            <div className="relative">
              {/* Large circle decoration */}
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full bg-dark-600/40 pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-[clamp(3rem,7vw,6rem)] font-black leading-[0.95] tracking-tight">
                  <span className="text-metallic-light">Get to</span>
                  <br />
                  <span className="font-serif italic text-dark-200 font-medium">Know</span>
                  <span className="text-white font-black">Me</span>
                </h2>
              </div>
            </div>
          </FadeUp>

          {/* Right — profile photo */}
          <FadeUp delay={0.2}>
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] max-w-md mx-auto lg:ml-auto relative">
                <img
                  src="/images/aboutpfp.jpg"
                  alt="Christopher Solis"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Bio text below */}
        <FadeUp delay={0.3}>
          <div className="mt-16 lg:mt-24 max-w-4xl">
            <p className="text-base sm:text-lg leading-relaxed text-dark-100">
              I&apos;m <span className="text-white font-bold">Christopher Solis</span>, a
              passionate{' '}
              <span className="text-white font-bold">Full Stack Web Developer</span> based in the{' '}
              <span className="text-white font-bold">Philippines</span>. I have hands-on
              experience in{' '}
              <span className="text-white font-bold">
                front-end and back-end development, UI design, and modern web technologies
              </span>
              , with a strong focus on building clean, fast, and user-centered digital products.
              I&apos;ve designed, developed, and deployed real-world applications from{' '}
              <span className="text-white font-bold">
                e-commerce platforms and dashboards
              </span>{' '}
              to{' '}
              <span className="text-white font-bold">
                interactive client portfolios and management systems
              </span>
              , using React, Firebase, Node.js, and MongoDB.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
