import { motion } from "motion/react";
import { ArrowUpRight, Code2 } from "lucide-react";

type Project = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  github: string;
  live?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "ApexOne",
    description:
      "An interactive Formula 1 platform that makes the sport easier to understand while giving users access to race schedules, driver performance, Grand Prix statistics, and beginner-friendly F1 lessons.",
    technologies: ["React", "JavaScript", "React Router", "OpenF1 API", "CSS"],
    category: "Web Application",
    github: "https://github.com/VIOLA895/ApexOne",
    live: "https://apex-one-rho.vercel.app/",
  },
  {
    number: "02",
    title: "AgriCare Hub",
    description:
      "A digital agricultural platform bringing farming information, crop and livestock management, weather insights, and a farmer community together in one accessible experience.",
    technologies: ["React", "JavaScript", "CSS", "Responsive Design"],
    category: "Agricultural Platform",
    github: "https://github.com/VIOLA895/agricare-hub",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        {/* SECTION HEADER */}

        <motion.div
          className="projects-heading"
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
          <div className="section-marker">
            <span>02</span>
            <span>SELECTED WORK</span>
          </div>

          <p className="projects-intro">
            A selection of things I&apos;ve built, experimented with, and
            learned from.
          </p>
        </motion.div>

        {/* PROJECTS */}

        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={
                index === 0
                  ? "featured-project"
                  : "featured-project featured-project-secondary"
              }
              initial={{
                opacity: 0,
                y: 60,
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
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* PROJECT VISUAL */}

              <div className="project-visual">
                <div className="project-visual-grid" />

                <div className="project-visual-content">
                  <div className="project-window">
                    <div className="window-top">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="window-content">
                      <div className="window-sidebar">
                        <div className="window-logo">
                          {project.title === "ApexOne" ? "A1" : "AC"}
                        </div>

                        <div className="window-line" />
                        <div className="window-line short" />
                        <div className="window-line" />
                        <div className="window-line short" />
                      </div>

                      <div className="window-main">
                        <div className="window-header">
                          <span>
                            {project.title === "ApexOne"
                              ? "RACE WEEKEND"
                              : "AGRICULTURE HUB"}
                          </span>

                          <span>2026</span>
                        </div>

                        <div className="window-title">
                          {project.title === "ApexOne"
                            ? "FORMULA 1"
                            : "AGRICARE"}
                        </div>

                        <div className="window-cards">
                          <div className="window-card">
                            <span>01</span>

                            <strong>
                              {project.title === "ApexOne"
                                ? "Drivers"
                                : "Crops"}
                            </strong>
                          </div>

                          <div className="window-card">
                            <span>02</span>

                            <strong>
                              {project.title === "ApexOne"
                                ? "Teams"
                                : "Livestock"}
                            </strong>
                          </div>

                          <div className="window-card">
                            <span>03</span>

                            <strong>
                              {project.title === "ApexOne"
                                ? "Results"
                                : "Community"}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-number">{project.number}</div>
              </div>

              {/* PROJECT INFORMATION */}

              <div className="featured-project-info">
                <div className="project-category">{project.category}</div>

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                {/* TECHNOLOGIES */}

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {/* PROJECT LINKS */}

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <Code2 size={17} />
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link primary"
                    >
                      View project
                      <ArrowUpRight size={17} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
