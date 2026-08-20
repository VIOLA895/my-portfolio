import { motion } from "motion/react";
import { ArrowUpRight, ArrowUp } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top section */}
        <motion.div
          className="footer-top"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Viola<span>.</span>
            </a>

            <p>
              Software developer focused on building thoughtful,
              useful digital experiences.
            </p>
          </div>

          <nav className="footer-nav">
            <span className="footer-nav-label">NAVIGATION</span>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-social">
            <span className="footer-nav-label">CONNECT</span>

            <a
              href="https://github.com/VIOLA895"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ArrowUpRight size={14} />
            </a>

            <a
              href="https://www.linkedin.com/in/viola-kambuni-4bb48631b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="footer-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />

        {/* Bottom section */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >
          <span>
            © {currentYear} Viola Kambuni
          </span>

          <span className="footer-built">
            BUILT WITH
            <strong> TYPESCRIPT</strong>
            <span>+</span>
            <strong> REACT</strong>
          </span>

          <button
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={15} />
          </button>
        </motion.div>

      </div>
    </footer>
  );
}

export default Footer;