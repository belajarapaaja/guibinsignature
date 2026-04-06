import { motion } from 'framer-motion';
import FloatingLanterns from '../ornaments/FloatingLanterns';
import GoldParticles from '../ornaments/GoldParticles';
import { siteSettings } from '@/data/mockData';

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${siteSettings.heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <FloatingLanterns />
      <GoldParticles />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p className="text-gold font-ui text-sm md:text-base tracking-[0.4em] uppercase mb-4">
            Premium Chinese Dining
          </p>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-heading text-ivory leading-tight mb-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.7 }}
        >
          <span className="text-gold">貴賓</span>
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-heading text-ivory mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.9 }}
        >
          Gui Bin Signature
        </motion.h2>

        <motion.p
          className="text-ivory/70 text-lg md:text-xl font-body mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          {siteSettings.tagline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <a
            href="/menu"
            className="px-8 py-3 bg-gold text-background font-ui text-sm tracking-wider uppercase rounded-sm hover:bg-gold/90 transition-all gold-glow"
          >
            View Menu
          </a>
          <button
            onClick={() => scrollTo('reservation')}
            className="px-8 py-3 border border-gold text-gold font-ui text-sm tracking-wider uppercase rounded-sm hover:bg-gold/10 transition-all"
          >
            Make Reservation
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border border-gold/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
