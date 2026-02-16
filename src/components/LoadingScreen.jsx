import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState(0); // 0 = name animating, 1 = exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2200);
    const t2 = setTimeout(() => onComplete(), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  const firstName = 'Christopher';
  const letterVariants = {
    hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        delay: 0.3 + i * 0.06,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-dark-900 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Spotlight on loading screen */}
          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[700px] pointer-events-none"
            style={{
              background: `conic-gradient(
                from 180deg at 50% 0%,
                transparent 40%,
                rgba(200, 200, 220, 0.05) 46%,
                rgba(255, 255, 255, 0.09) 50%,
                rgba(200, 200, 220, 0.05) 54%,
                transparent 60%
              )`,
            }}
          />

          {/* Glow dot */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[100px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
              filter: 'blur(25px)',
            }}
          />

          {/* Name */}
          <motion.div
            animate={phase === 1 ? { scale: 0.9, opacity: 0, filter: 'blur(10px)' } : {}}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="relative z-10 flex"
          >
            {firstName.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-[clamp(2.5rem,10vw,7rem)] font-black tracking-tight text-metallic-load inline-block"
                style={{ willChange: 'transform, opacity, filter' }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              phase === 0
                ? { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.6 } }
                : { opacity: 0, y: -10, transition: { duration: 0.4 } }
            }
            className="relative z-10 text-dark-300 text-sm sm:text-base tracking-[0.3em] uppercase mt-4 font-medium"
          >
            Portfolio
          </motion.p>

          {/* Loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.4 }}
            className="relative z-10 mt-10 w-40 h-[2px] bg-dark-600 rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-full bg-gradient-to-r from-white/40 via-white to-white/40 rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
