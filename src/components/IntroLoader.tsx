import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type IntroLoaderProps = {
  onComplete: () => void;
};

function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const duration = 2400;
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + increment, 100);

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setFinished(true);

            setTimeout(() => {
              onComplete();
            }, 700);
          }, 250);
        }

        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          className="intro-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(12px)",
            transition: {
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Background */}
          <div className="intro-grid" />

          <div className="intro-orb intro-orb-one" />
          <div className="intro-orb intro-orb-two" />

          {/* Top information */}
          <div className="intro-top">
            <span>VK.</span>
            <span>PORTFOLIO / 2026</span>
          </div>

          {/* Main */}
          <div className="intro-center">
            <motion.div
              className="intro-name"
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              VIOLA
            </motion.div>

            <motion.div
              className="intro-name intro-name-outline"
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              KAMBUNI
            </motion.div>

            <motion.div
              className="intro-role"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
            >
              SOFTWARE ENGINEER
              <span> / </span>
              FRONT-END DEVELOPER
            </motion.div>
          </div>

          {/* Progress */}
          <div className="intro-progress-area">
            <div className="intro-progress-meta">
              <span>INITIALIZING EXPERIENCE</span>

              <motion.span
                key={Math.floor(progress)}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
              >
                {Math.floor(progress).toString().padStart(3, "0")}%
              </motion.span>
            </div>

            <div className="intro-progress-track">
              <motion.div
                className="intro-progress-bar"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>

          {/* Bottom */}
          <div className="intro-bottom">
            <span>NAIROBI / KENYA</span>

            <motion.span
              animate={{
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              PLEASE WAIT
            </motion.span>

            <span>01 / 01</span>
          </div>

          {/* Big percentage */}
          <motion.div
            className="intro-big-number"
            animate={{
              rotate: progress * 0.15,
              scale: progress >= 100 ? 1.1 : 1,
            }}
          >
            {Math.floor(progress)}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroLoader;