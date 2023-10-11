import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Skills from "./pages/Skills";

function App() {
  const location = useLocation();

  return (
    <div className="App h-screen w-screen">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
