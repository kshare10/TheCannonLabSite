import { motion } from 'framer-motion';
import globalData from '../data/global.json';
import './Hero.css';

export default function Hero() {
  const { accentTag, titlePart1, titlePart2, subtitle } = globalData.hero;
  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="accent-tag"
        >
          {accentTag}
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ y: 150, opacity: 0, letterSpacing: "0.2em", marginRight: "-0.2em" }}
          animate={{ y: 0, opacity: 1, letterSpacing: "-0.04em", marginRight: "0.04em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <span className="hero-title-part">{titlePart1}</span>
          <span className="hero-title-part">{titlePart2}</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
