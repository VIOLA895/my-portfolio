import { useState } from "react";
import { motion } from "motion/react";

function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;

    setMousePosition({
      x: clientX,
      y: clientY,
    });
  };

  return (
    <section className="hero" id="home" onMouseMove={handleMouseMove}>
      {/* Cursor glow */}
      <motion.div
        className="hero-cursor-glow"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{
          type: "spring",
          stiffness: 45,
          damping: 28,
          mass: 0.6,
        }}
      />

      {/* Background grid */}
      <div className="hero-grid" />

      {/* Decorative orbit */}
      <motion.div
        className="hero-orbit"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span />
      </motion.div>

      {/* Hero content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
      >
        {/* Eyebrow */}
        <motion.p
          className="hero-eyebrow"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          SOFTWARE ENGINEER · FRONT-END DEVELOPER
        </motion.p>

        {/* Main heading */}
        <h1 className="hero-title">
          <motion.span
            className="hero-title-line"
            initial={{
              opacity: 0,
              y: 70,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            I build digital
          </motion.span>

          <motion.span
            className="hero-title-line hero-title-muted"
            initial={{
              opacity: 0,
              y: 70,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.58,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            experiences
          </motion.span>

          <motion.span
            className="hero-title-line"
            initial={{
              opacity: 0,
              y: 70,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.71,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            that feel different.
          </motion.span>
        </h1>

        {/* Description */}
        <motion.p
          className="hero-description"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          I&apos;m Viola Kambuni, a developer who enjoys turning ideas into
          thoughtful, interactive products with clean code and purposeful
          design.
        </motion.p>

        {/* Actions */}
        <motion.div
          className="hero-actions"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 1.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.a
            href="#projects"
            className="hero-primary-button"
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <span>Explore my work</span>

            <span className="hero-button-arrow">↗</span>
          </motion.a>

          <motion.a
            href="#contact"
            className="hero-secondary-button"
            whileHover={{
              x: 4,
            }}
          >
            Get in touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-side-note"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.3,
        }}
      >
        <span>SCROLL TO EXPLORE</span>

        <div className="scroll-line" />
      </motion.div>

      {/* Year */}
      <motion.div
        className="hero-year"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 1.3,
        }}
      >
        {new Date().getFullYear()}
      </motion.div>
    </section>
  );
}

export default Hero;
