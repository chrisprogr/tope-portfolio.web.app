import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/images/me1.png',
    '/images/me2.jpg',
    '/images/me3.jpg',
    '/images/me4.jpg',
    '/images/aboutpfp.jpg'
  ];

  // Auto-slide images every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0.5, y: 0.5 });
  };

  // Calculate tilt based on mouse position
  const tiltX = isHovering ? (mousePosition.y - 0.5) * -20 : 0;
  const tiltY = isHovering ? (mousePosition.x - 0.5) * 20 : 0;
  const scale = isHovering ? 1.05 : 1;

  const getNextIndex = () => (currentImageIndex + 1) % images.length;

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

          {/* Right — profile photo carousel with sliding animation */}
          <FadeUp delay={0.2}>
            <div className="relative w-full max-w-[600px] mx-auto lg:ml-auto perspective-1000">
              {/* Main carousel wrapper with visible overflow on right */}
              <div className="relative overflow-hidden">
                {/* Carousel viewport - shows current image + peek of next */}
                <div 
                  className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`,
                    transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
                  }}
                >
                  {/* Sliding track - horizontal layout */}
                  <div 
                    className="flex h-full transition-transform duration-1000 ease-in-out"
                    style={{
                      transform: `translateX(-${currentImageIndex * 100}%)`,
                    }}
                  >
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="relative h-full flex-shrink-0 w-full"
                      >
                        <img
                          src={image}
                          alt={`Christopher Solis ${index + 1}`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800/50 via-transparent to-transparent pointer-events-none z-10" />
                </div>

                {/* Preview peek - shows next image on the right edge */}
                <div 
                  className="hidden md:block absolute top-0 left-full ml-2 w-24 aspect-[3/4] rounded-xl overflow-hidden opacity-50 shadow-2xl pointer-events-none"
                  style={{
                    filter: 'brightness(0.6)',
                  }}
                >
                  <img
                    src={images[getNextIndex()]}
                    alt="Next preview"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-dark-900/40" />
                </div>
              </div>

              {/* Carousel indicators */}
              <div className="mt-6 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      backgroundColor: currentImageIndex === index ? '#fff' : 'rgba(255,255,255,0.4)',
                      width: currentImageIndex === index ? '32px' : '8px',
                      height: '8px',
                    }}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
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
