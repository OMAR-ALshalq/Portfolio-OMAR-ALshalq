import { LanguageProvider } from "./LanguageContext";
import ParticlesBackground from "./Component/ParticlesBackground";

import "./App.css";
import "./animations.css";
import NavBar from "./Component/navbar/NavBar";
import Hero from "./Component/hero/Hero";
import Resume from "./Component/resum/Resume";
import Mainprojict from "./Component/projict/Mainprojict";
import Contact from "./Component/conact/Contact";
import Footer from "./Component/footer/Footer";

function App() {
  return (
    <LanguageProvider>
      <ParticlesBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavBar />
        <Hero />
        <Resume />
        <Mainprojict />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
