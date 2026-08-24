import { Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import './App.css'
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} /> { " | "}
        <Route path="/Home" element={<Home />} />{ " | "}
        <Route path="/About" element={<About />} />{ " | "}
        <Route path="/Contact" element={<Contact />} />{ " | "}
      </Routes>
    </>
  );
}

export default App;