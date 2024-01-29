// Components
import Nav from "./components/nav";
import Footer from "./components/footer";
// Pages
import Home from "./pages/home";
// Style
import GlobalStyles from "./style/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Home />
      <Footer />
    </>
  );
}

export default App;
