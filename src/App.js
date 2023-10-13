import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Skills from "./pages/Skills";
import { useState } from "react";
import AudioFile from "./assets/audiofile.mp3";

function App() {
  const [audio, setAudio] = useState(new Audio(AudioFile));

  const [isPlay, setIsPlay] = useState(false);

  const location = useLocation();

  return (
    <div className="App h-screen w-screen">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            index
            element={
              <Home audio={audio} isPlay={isPlay} setIsPlay={setIsPlay} />
            }
          />
          <Route path="/about" element={<About audio={audio} isPlay={isPlay} setIsPlay={setIsPlay}/>} />
          <Route path="/skills" element={<Skills audio={audio} isPlay={isPlay} setIsPlay={setIsPlay}/>} />
          <Route path="/projects" element={<Projects audio={audio} isPlay={isPlay} setIsPlay={setIsPlay}/>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
