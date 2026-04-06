import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LotusReveal from '../ornaments/LotusReveal';
import { galleryImages } from '@/data/mockData';
import { X } from 'lucide-react';

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold font-ui text-sm tracking-[0.3em] uppercase mb-3">Visual Journey</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-ivory">
            Our <span className="text-gold">Gallery</span>
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <LotusReveal key={img.id} delay={i * 0.05}>
              <div
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-sm"
                onClick={() => setLightbox(img.url)}
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-300 flex items-end">
                  <p className="text-ivory font-ui text-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {img.caption}
                  </p>
                </div>
              </div>
            </LotusReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-gold hover:text-ivory transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              src={lightbox}
              alt="Gallery"
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
