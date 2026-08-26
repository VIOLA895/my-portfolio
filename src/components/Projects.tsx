import { motion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  CloudSun,
  Trophy,
  Sprout,
  Activity,
} from "lucide-react";

type Project = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  github: string;
  live?: string;
  icon: React.ReactNode;
  accent: "lime" | "violet" | "cyan" | "orange";
};

const projects: Project[] = [
  {
    number: "01",
    title: "ApexOne",
    description:
      "An interactive Formula 1 platform designed to make the sport easier to understand through beginner-friendly lessons, driver statistics, race information and team data.",
    technologies: ["React", "JavaScript", "React Router", "OpenF1"],
    category: "Web Application",
    github: "https://github.com/VIOLA895/ApexOne",
    live: "https://apex-one-rho.vercel.app/",
    icon: <Trophy size={22} />,
    accent: "lime",
  },
  {
    number: "02",
    title: "AgriCare Hub",
    description:
      "A digital agricultural platform combining crop management, livestock management, weather insights and farmer communication in one experience.",
    technologies: ["React", "JavaScript", "CSS", "Responsive UI"],
    category: "Agricultural Platform",
    github: "https://github.com/VIOLA895/agricare-hub",
    icon: <Sprout size={22} />,
    accent: "lime",
  },
  {
    number: "03",
    title: "Atmos Weather",
    description:
      "A modern weather experience focused on clear forecasts, atmospheric conditions and useful weather information through a polished responsive interface.",
    technologies: ["Next.js", "TypeScript", "API", "CSS"],
    category: "Weather Application",
    github: "https://github.com/VIOLA895/atmos-weather",
    live: "https://atmos-weather-fawn.vercel.app/",
    icon: <CloudSun size={22} />,
    accent: "cyan",
  },
  {
    number: "04",
    title: "Predict Your Game",
    description:
      "A football prediction platform that evaluates teams and matchups to generate predictions while ranking previous predictions and results.",
    technologies: ["React", "JavaScript", "Prediction Logic", "LocalStorage"],
    category: "Sports Application",
    github: "https://github.com/VIOLA895/Predict-Your-Game",
    live: "https://predictyourgame.netlify.app/",
    icon: <Activity size={22} />,
    accent: "violet",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        {/* HEADER */}

        <motion.div
          className="projects-heading-new"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div className="projects-section-marker">
              <span>02</span>
              <span>SELECTED WORK</span>
            </div>

            <h2 className="projects-title">
              Things I&apos;ve
              <span> built.</span>
            </h2>
          </div>

          <p className="projects-intro-new">
            A collection of products, experiments and interfaces I&apos;ve
            designed and developed.
          </p>
        </motion.div>

        {/* PROJECT GRID */}

        <div className="projects-grid-new">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`project-card-new ${index === 0 ? "project-card-featured" : ""}`}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
              }}
            >
              {/* CARD VISUAL */}

              <div className={`project-card-visual ${project.accent}`}>
                <div className="project-card-grid" />

                <motion.div
                  className="project-glow"
                  initial={{ opacity: 0.4 }}
                  whileHover={{
                    opacity: 0.9,
                    scale: 1.15,
                  }}
                  transition={{ duration: 0.4 }}
                />

                <motion.div
                  className="project-icon-box"
                  whileHover={{
                    rotate: -5,
                    scale: 1.08,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  {project.icon}
                </motion.div>

                <div className="project-card-number">{project.number}</div>

                <div className="project-card-orbit" />
              </div>

              {/* CARD CONTENT */}

              <div className="project-card-content">
                <div className="project-card-category">{project.category}</div>

                <div className="project-card-title-row">
                  <h3>{project.title}</h3>

                  <motion.div
                    className="project-arrow"
                    whileHover={{
                      x: 4,
                      y: -4,
                    }}
                  >
                    <ArrowUpRight size={17} />
                  </motion.div>
                </div>

                <p>{project.description}</p>

                <div className="project-card-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-card-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Code2 size={15} />
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-live-link"
                    >
                      Live project
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM */}

        <motion.div
          className="projects-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span>MORE PROJECTS COMING</span>

          <div className="projects-bottom-line" />

          <span>04 / 04</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
