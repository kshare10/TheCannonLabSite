import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

export default function FadeIn({ children, delay = 0, direction = 'up', duration = 0.6 }: FadeInProps) {
  const getHiddenTransform = () => {
    switch (direction) {
      case 'up': return { y: 40, opacity: 0 };
      case 'down': return { y: -40, opacity: 0 };
      case 'left': return { x: 40, opacity: 0 };
      case 'right': return { x: -40, opacity: 0 };
      case 'none': return { opacity: 0 };
    }
  };

  const getVisibleTransform = () => {
    switch (direction) {
      case 'up': case 'down': return { y: 0, opacity: 1 };
      case 'left': case 'right': return { x: 0, opacity: 1 };
      case 'none': return { opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getHiddenTransform()}
      whileInView={getVisibleTransform()}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
