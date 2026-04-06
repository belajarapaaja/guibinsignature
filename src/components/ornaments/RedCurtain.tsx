import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const RedCurtain = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {children}
      <AnimatePresence>
        {!isOpen && (
          <>
            <motion.div
              className="fixed inset-y-0 left-0 w-1/2 z-[9999]"
              style={{
                background: 'linear-gradient(to right, hsl(0,100%,20%), hsl(0,100%,27%))',
                boxShadow: 'inset -20px 0 40px rgba(0,0,0,0.5)',
              }}
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-8" style={{
                background: 'repeating-linear-gradient(180deg, transparent, transparent 20px, hsl(43,52%,54%,0.15) 20px, hsl(43,52%,54%,0.15) 22px)',
              }} />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <div className="w-6 h-16 rounded-full bg-gold opacity-30" />
              </div>
            </motion.div>
            <motion.div
              className="fixed inset-y-0 right-0 w-1/2 z-[9999]"
              style={{
                background: 'linear-gradient(to left, hsl(0,100%,20%), hsl(0,100%,27%))',
                boxShadow: 'inset 20px 0 40px rgba(0,0,0,0.5)',
              }}
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-8" style={{
                background: 'repeating-linear-gradient(180deg, transparent, transparent 20px, hsl(43,52%,54%,0.15) 20px, hsl(43,52%,54%,0.15) 22px)',
              }} />
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <div className="w-6 h-16 rounded-full bg-gold opacity-30" />
              </div>
            </motion.div>
            {/* Center logo during curtain */}
            <motion.div
              className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-heading text-gold gold-glow-strong">
                  貴賓
                </h1>
                <p className="text-ivory text-lg mt-2 font-body tracking-[0.3em]">GUI BIN SIGNATURE</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RedCurtain;
