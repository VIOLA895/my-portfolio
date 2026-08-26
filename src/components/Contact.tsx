import { motion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-grid" />

      <div className="contact-container">
        {/* Section heading */}
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-number">03</span>
          <span className="section-label">CONTACT</span>
        </motion.div>

        {/* Main content */}
        <div className="contact-content">
          {/* Main message */}
          <motion.div
            className="contact-main"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="contact-eyebrow">HAVE A PROJECT IN MIND?</p>

            <h2>
              Let&apos;s build
              <span> something.</span>
            </h2>

            <p className="contact-description">
              Whether you have an idea, a project, or simply want to talk about
              technology and development, I&apos;d love to hear from you.
            </p>

            <motion.a
              href="mailto:kambuniviola@gmail.com"
              className="contact-email-button"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={18} strokeWidth={1.8} />

              <span>Get in touch</span>

              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
                className="contact-arrow"
              />
            </motion.a>
          </motion.div>

          {/* Side information */}
          <motion.div
            className="contact-side"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Availability */}
            <div className="contact-status">
              <span className="status-dot" />
              <span>Open to opportunities</span>
            </div>

            {/* Social links */}
            <div className="contact-links">
              <a
                href="https://github.com/VIOLA895"
                target="_blank"
                rel="noreferrer"
                className="contact-social"
              >
                <span className="contact-social-icon">GH</span>

                <span className="contact-social-text">
                  <small>GITHUB</small>
                  <strong>VIOLA895</strong>
                </span>

                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/viola-kambuni-4bb48631b/"
                target="_blank"
                rel="noreferrer"
                className="contact-social"
              >
                <span className="contact-social-icon">IN</span>

                <span className="contact-social-text">
                  <small>LINKEDIN</small>
                  <strong>LET&apos;S CONNECT</strong>
                </span>

                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom divider */}
        <motion.div
          className="contact-bottom"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />

        {/* Footer note */}
        <motion.div
          className="contact-footer-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
        >
          <span>BASED IN NAIROBI</span>
          
          <span>AVAILABLE FOR SELECT PROJECTS</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
