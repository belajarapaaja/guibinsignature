import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LotusRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const LotusReveal = ({ children, delay = 0, className = '' }: LotusRevealProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default LotusReveal;
