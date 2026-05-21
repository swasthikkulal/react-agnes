import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import State from "./pages/State";
import Input from "./pages/Input";
import Toggle from "./pages/Toggle";
import Effect from "./pages/Effect";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/state" element={<State />} />
          <Route path="/input" element={<Input />} />
          <Route path="/toggle" element={<Toggle />} />
          <Route path="/effect" element={<Effect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
