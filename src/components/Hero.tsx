import { useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

function Hero() {
  const [mouseInside, setMouseInside] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <section
      className="hero-new"
      id="home"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setMouseInside(true)}
      onMouseLeave={() => setMouseInside(false)}
    >
      {/* Animated background */}
      <div className="hero-new-grid" />

      <motion.div
        className="hero-new-glow"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          opacity: mouseInside ? 1 : 0,
        }}
      />

      {/* Decorative orbit */}
      <motion.div
        className="hero-new-orbit"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span />
      </motion.div>

      {/* Navigation marker */}
      <motion.div
        className="hero-new-index"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        
        <span>INTRO</span>
      </motion.div>

      {/* Main heading */}
      <div className="hero-new-content">
        <motion.p
          className="hero-new-kicker"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.7,
          }}
        >
          SOFTWARE ENGINEER / FRONT-END DEVELOPER
        </motion.p>

        <h1 className="hero-new-title">
          <motion.span
            initial={{
              opacity: 0,
              x: -80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.45,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            VIOLA
          </motion.span>

          <motion.span
            className="hero-new-outline"
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.58,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            KAMBUNI
          </motion.span>
        </h1>

        <motion.div
          className="hero-new-bottom"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.9,
            duration: 0.8,
          }}
        >
          <p>
            I build thoughtful digital products where
            <span> design, interaction and technology </span>
            come together.
          </p>

          <motion.a
            href="#projects"
            className="hero-new-work-link"
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <span>EXPLORE MY WORK</span>
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>
      </div>

      {/* Floating technical information */}
      <motion.div
        className="hero-tech hero-tech-one"
        animate={{
          y: [0, -12, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>LAT</span>
        <strong>-1.2921</strong>
      </motion.div>

      <motion.div
        className="hero-tech hero-tech-two"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>LNG</span>
        <strong>36.8219</strong>
      </motion.div>

      {/* Scroll */}
      <motion.a
        href="#about"
        className="hero-scroll"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.3,
        }}
      >
        <span>SCROLL</span>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDownRight size={18} />
        </motion.div>
      </motion.a>

      {/* Year */}
      <div className="hero-new-year">2026</div>
    </section>
  );
}

export default Hero;
