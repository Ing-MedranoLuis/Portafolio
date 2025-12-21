import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-sm md:text-4xl md:text-base uppercase tracking-[0.3em] mb-6"
        >
          <span className="text-sm md:text-sm">   Full-Stack Developer</span>
       
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-body text-2xl md:text-7xl lg:text-8xl font-medium leading-tight mb-8"
        >
          Crafting Digital
          <br />
          <span className="text-gradient">Experiences</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-muted-foreground text-sm md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I design and build beautiful websites and applications that combine
          stunning aesthetics with seamless functionality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-1 font-body md:py-2 md:px-6 md:py-2 bg-primary text-primary-foreground rounded-full font-medium transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-1 font-body md:py-2 md:px-6 md:py-2 border border-border text-foreground rounded-full font-medium transition-colors duration-300 hover:bg-secondary hover:border-muted"
          >
            About Me
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <span className="md:text-xs text-[7px] uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
