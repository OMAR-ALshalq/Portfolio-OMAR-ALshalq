import "./Mainprojict.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import AllProjict from "./Allprojict";
import HtmlCss from "./HtmlCssprojict";
import ReactJs from "./Reactprojict";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations";
import useAnimation from "../../hooks/useAnimation";

export default function Mainprojict() {
  const { language } = useLanguage();
  const t = translations[language];

  const [refTitle, visTitle] = useAnimation(0.1, 500);
  const [refBtn1, visBtn1] = useAnimation(0.1, 500);
  const [refBtn2, visBtn2] = useAnimation(0.1, 500);
  const [refBtn3, visBtn3] = useAnimation(0.1, 500);
  const [refProjects, visProjects] = useAnimation(0.1, 500);

  return (
    <Router>
      <div className="Box">
        <div className="continar continerMainprojict">
          <h2
            ref={refTitle}
            id="projict"
            className={`anim-fade-up ${visTitle ? "anim-visible" : ""}`}
          >
            {t.projectsTitle}
          </h2>
          <div className="boxmainprojict">
            <div className="Boxbutton">
              <HashLink smooth to="/all#AllProject">
                <button
                  ref={refBtn1}
                  className={`anim-fade-up ${visBtn1 ? "anim-visible" : ""}`}
                >
                  {t.allProjects}
                </button>
              </HashLink>
              <HashLink smooth to="/htmlcss#HtmlCssProject">
                <button
                  ref={refBtn2}
                  className={`anim-fade-up ${visBtn2 ? "anim-visible" : ""}`}
                >
                  {t.htmlCss}
                </button>
              </HashLink>
              <HashLink smooth to="/reactjs#ReactProject">
                <button
                  ref={refBtn3}
                  className={`anim-fade-up ${visBtn3 ? "anim-visible" : ""}`}
                >
                  {t.reactJs}
                </button>
              </HashLink>
            </div>
            <div
              ref={refProjects}
              className={`Boxprojict anim-fade-up ${visProjects ? "anim-visible" : ""}`}
            >
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
