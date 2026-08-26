import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Analytics } from "@vercel/analytics/react";

import IntroLoader from "./components/IntroLoader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <IntroLoader
            onComplete={() => {
              setLoading(false);
            }}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="portfolio"
        initial={{ opacity: 0 }}
        animate={{
          opacity: loading ? 0 : 1,
        }}
        transition={{
          duration: 0.8,
          delay: loading ? 0 : 0.15,
        }}
      >
        <Navbar />

        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </motion.div>
      <Analytics />
    </>
  );
}

export default App;
