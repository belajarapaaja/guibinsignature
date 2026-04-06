import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/mockData';

const TestimonialsSection = () => {
  const visible = testimonials.filter((t) => t.visible);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % visible.length), [visible.length]);
  const prev = () => setCurrent((p) => (p - 1 + visible.length) % visible.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = visible[current];

  return (
    <section className="py-20 bg-deep">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold font-ui text-sm tracking-[0.3em] uppercase mb-3">Guest Voices</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-ivory">
            What Our <span className="text-gold">Guests</span> Say
          </h2>
        </div>

        <div
          className="max-w-3xl mx-auto text-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={20} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-ivory/80 text-xl md:text-2xl font-body italic leading-relaxed mb-8">
              "{t.quote}"
            </p>
            <p className="text-gold font-ui text-sm tracking-wider uppercase">— {t.name}</p>
          </motion.div>

          <div className="flex justify-center items-center gap-6 mt-10">
            <button onClick={prev} className="text-gold/50 hover:text-gold transition-colors">
              <ChevronLeft size={28} />
            </button>
            <div className="flex gap-2">
              {visible.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-gold w-6' : 'bg-gold/30'}`}
                />
              ))}
            </div>
            <button onClick={next} className="text-gold/50 hover:text-gold transition-colors">
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
