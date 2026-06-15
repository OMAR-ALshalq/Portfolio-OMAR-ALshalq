import "./Mainprojict.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import AllProjict from "./Allprojict";
import HtmlCss from "./HtmlCssprojict";
import ReactJs from "./Reactprojict";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations";

export default function Mainprojict() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Router>
      <div className="Box">
        <div className="continar continerMainprojict">
          <h2 id="projict" data-aos="fade-up">
            {t.projectsTitle}
          </h2>
          <div className="boxmainprojict">
            <div className="Boxbutton">
              <HashLink smooth to="/all#AllProject">
                <button data-aos="fade-up" data-aos-delay="300">
                  {t.allProjects}
                </button>
              </HashLink>
              <HashLink smooth to="/htmlcss#HtmlCssProject">
                <button data-aos="fade-up" data-aos-delay="400">
                  {t.htmlCss}
                </button>
              </HashLink>
              <HashLink smooth to="/reactjs#ReactProject">
                <button data-aos="fade-up" data-aos-delay="600">
                  {t.reactJs}
                </button>
              </HashLink>
            </div>
            <div className="Boxprojict">
              <Routes>
                <Route path="/" element={<AllProjict />}></Route>
                <Route path="/all" element={<AllProjict />} />
                <Route path="/htmlcss" element={<HtmlCss />} />
                <Route path="/reactjs" element={<ReactJs />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
