import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import { FiGithub, FiFacebook, FiSend } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';

const socials = [
  { icon: <FiGithub />, href: 'https://github.com/chrisprogr', label: 'GitHub' },
  { icon: <FiFacebook />, href: 'https://www.facebook.com/christopher.solis.180873', label: 'Facebook' },
  { icon: <SiGmail />, href: 'mailto:christophercabralsolis@gmail.com', label: 'Gmail' },
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

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="spotlight" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header — centered */}
        <FadeUp>
          <div className="text-center mb-14">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-dark-300 mb-5">
              Get in Touch
            </p>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.95] tracking-tight mb-5">
              <span className="text-metallic-light">Let&apos;s Work</span>
              <br />
              <span className="font-serif italic text-dark-300 font-medium">Together</span>
            </h2>
            <p className="text-dark-200 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? Drop me a message — I&apos;d love to bring your ideas to life.
            </p>
          </div>
        </FadeUp>

        {/* Contact info row — centered */}
        <FadeUp delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-dark-600 border border-white/[0.06] flex items-center justify-center text-dark-200">
                <HiOutlineMail className="text-lg" />
              </div>
              <div>
                <p className="text-[10px] text-dark-400 uppercase tracking-wider">Email</p>
                <a href="mailto:christophercabralsolis@gmail.com" className="text-white text-sm font-medium hover:text-dark-100 transition-colors">
                  christophercabralsolis@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-dark-600 border border-white/[0.06] flex items-center justify-center text-dark-200">
                <HiOutlineLocationMarker className="text-lg" />
              </div>
              <div>
                <p className="text-[10px] text-dark-400 uppercase tracking-wider">Location</p>
                <p className="text-white text-sm font-medium">Philippines</p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Form — glass card, centered */}
        <FadeUp delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-8 sm:p-10 md:p-12 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-[11px] font-semibold text-dark-300 uppercase tracking-[0.15em] mb-2.5">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full px-5 py-3.5 rounded-xl bg-dark-700/50 border border-white/[0.06] text-white placeholder-dark-400 focus:outline-none focus:border-white/15 focus:bg-dark-700/70 transition-all text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[11px] font-semibold text-dark-300 uppercase tracking-[0.15em] mb-2.5">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full px-5 py-3.5 rounded-xl bg-dark-700/50 border border-white/[0.06] text-white placeholder-dark-400 focus:outline-none focus:border-white/15 focus:bg-dark-700/70 transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-[11px] font-semibold text-dark-300 uppercase tracking-[0.15em] mb-2.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                value={form.message}
                onChange={handleChange}
                placeholder=""
                className="w-full px-5 py-3.5 rounded-xl bg-dark-700/50 border border-white/[0.06] text-white placeholder-dark-400 focus:outline-none focus:border-white/15 focus:bg-dark-700/70 transition-all resize-none text-sm leading-relaxed"
              />
            </div>

            {/* Submit button — centered */}
            <div className="flex flex-col items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-xl bg-white text-dark-800 text-sm font-bold uppercase tracking-[0.15em] hover:bg-dark-50 hover:shadow-lg hover:shadow-white/5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="text-base" />
                    Send Message
                  </>
                )}
              </button>

              {status === 'sent' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm font-medium"
                >
                  Message sent! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </div>
          </form>
        </FadeUp>

        {/* Socials row — centered below form */}
        <FadeUp delay={0.3}>
          <div className="text-center mt-14">
            <p className="text-[11px] font-semibold text-dark-400 uppercase tracking-[0.25em] mb-5">
              Or Find Me On
            </p>
            <div className="flex items-center justify-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-12 h-12 rounded-full bg-dark-600 border border-white/[0.06] flex items-center justify-center text-lg text-dark-200 hover:text-white hover:bg-dark-500 hover:border-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-black/30"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
