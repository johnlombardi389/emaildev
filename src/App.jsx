import { useState, useEffect } from "react";
// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
// Pages
import Home from "./pages/home";
// Style
import GlobalStyles from "./style/GlobalStyles";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const introTimeout = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(introTimeout);
  }, []);

  return (
    <>
      <GlobalStyles />
      {showIntro ? (
        <Intro />
      ) : (
        <>
          <Nav />
          <Home />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
