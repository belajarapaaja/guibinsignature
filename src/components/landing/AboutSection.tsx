import { motion } from 'framer-motion';
import CloudDivider from '../ornaments/CloudDivider';
import { siteSettings } from '@/data/mockData';

const AboutSection = () => {
  return (
    <section id="about">
      <CloudDivider />
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold font-ui text-sm tracking-[0.3em] uppercase mb-3">Our Story</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-ivory mb-8">
              A Legacy of <span className="text-gold">Imperial</span> Cuisine
            </h2>
            {siteSettings.aboutText.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-ivory/70 text-lg font-body leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-3 border border-gold/30 rounded-sm" />
              <div className="absolute -inset-6 border border-gold/15 rounded-sm" />
              <img
                src={siteSettings.aboutImage}
                alt="Gui Bin Signature kitchen"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-sm"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
      <CloudDivider />
    </section>
  );
};

export default AboutSection;
