import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { LanguageProvider } from "./LanguageContext";

import "./App.css";
import NavBar from "./Component/navbar/NavBar";
import Hero from "./Component/hero/Hero";
import Resume from "./Component/resum/Resume";
import Mainprojict from "./Component/projict/Mainprojict";
import Contact from "./Component/conact/Contact";
import Footer from "./Component/footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <LanguageProvider>
      <NavBar />
      <Hero />
      <Resume />
      <Mainprojict />
      <Contact />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
