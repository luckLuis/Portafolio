import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./pages/Home";
//import About from "./pages/About";
import Skills from "./pages/Skills";
//import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

// Componente principal de la aplicación
function App() {
  return (
    <Router>
      <div className="App">
        {/* Encabezado de la aplicación */}
        <Header />

        {/* Contenido principal de la aplicación */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/sobre-mi" element={<About />} /> */}
            <Route path="/habilidades" element={<Skills />} />
            {/* <Route path="/proyectos" element={<Projects />} /> */}
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>

        {/* Pie de página de la aplicación */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
