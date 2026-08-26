import { motion } from "motion/react";

type Skill = {
  name: string;
  short: string;
  type: string;
};

const skills: Skill[] = [
  {
    name: "TypeScript",
    short: "TS",
    type: "Language",
  },
  {
    name: "React",
    short: "R",
    type: "Framework",
  },
  {
    name: "JavaScript",
    short: "JS",
    type: "Language",
  },
  {
    name: "HTML",
    short: "</>",
    type: "Markup",
  },
  {
    name: "CSS",
    short: "#",
    type: "Styling",
  },
  {
    name: "Git",
    short: "G",
    type: "Version Control",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* ========================================
            SECTION HEADING
        ======================================== */}

        <motion.div
          className="about-heading"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span className="section-number">01</span>

          <span className="section-label">ABOUT</span>
        </motion.div>

        {/* ========================================
            ABOUT CONTENT
        ======================================== */}

        <div className="about-content">
          {/* MAIN STATEMENT */}

          <motion.div
            className="about-statement"
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2>
              I like turning
              <span> complicated ideas </span>
              into simple, useful experiences.
            </h2>
          </motion.div>

          {/* DESCRIPTION */}

          <motion.div
            className="about-description"
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p>
              I'm a software developer with a strong interest in front-end
              development and creating digital products that are both functional
              and enjoyable to use.
            </p>

            <p>
              I care about the details from the way an interface responds to a
              user's actions to the structure and maintainability of the code
              behind it.
            </p>

            <a href="#contact" className="about-link">
              Let's build something
              <span>↗</span>
            </a>
          </motion.div>
        </div>

        {/* ========================================
            DIVIDER
        ======================================== */}

        <motion.div
          className="about-divider"
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />

        {/* ========================================
            CURRENT TOOLKIT
        ======================================== */}

        <motion.div
          className="about-skills"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          {/* TOOLKIT LABEL */}

          <div className="skills-label">CURRENT TOOLKIT</div>

          {/* SKILLS */}

          <div className="skills-list">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* ICON / MONOGRAM */}

                <div className="skill-icon" aria-hidden="true">
                  {skill.short}
                </div>

                {/* SKILL INFORMATION */}

                <div className="skill-info">
                  <strong>{skill.name}</strong>

                  <span>{skill.type}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
