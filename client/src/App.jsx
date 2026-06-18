import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects/>
    </>
  );
};

export default App;