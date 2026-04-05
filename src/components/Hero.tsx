import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="accent-tag"
        >
          Welcome to
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ y: 150, opacity: 0, letterSpacing: "0.2em", marginRight: "-0.2em" }}
          animate={{ y: 0, opacity: 1, letterSpacing: "-0.04em", marginRight: "0.04em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <span className="hero-title-part">The Cannon</span>
          <span className="hero-title-part">Lab.</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Occidental College Chemistry & Biochemistry
        </motion.p>
      </div>
    </section>
  );
}
