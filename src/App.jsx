import { useState, useEffect } from "react";
// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
// Pages
import Home from "./pages/Home";
// Style
import GlobalStyles from "./style/GlobalStyles";
import { AnimatePresence, motion } from "framer-motion";
import { introAnimation } from "./style/animation";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const introTimeout = setTimeout(() => {
      setShowIntro(false);
    }, 3500);

    return () => clearTimeout(introTimeout);
  }, []);

  return (
    <>
      <GlobalStyles />
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={introAnimation}
          >
            <Intro />
          </motion.div>
        ) : (
          <>
            <Nav />
            <Home />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
