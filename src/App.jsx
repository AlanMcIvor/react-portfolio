import "./App.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Work } from "./components/Work/Work";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
    </>
  );
}

export default App;
