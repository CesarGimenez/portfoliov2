import styles from "./App.module.scss";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
// import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
