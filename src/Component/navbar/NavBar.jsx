import "./NavBar.css";
import { GrClose } from "react-icons/gr";
import { IoReorderThreeSharp } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations";

export default function NavBar() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const arrayLi = [
    { id: 1, name: t.home, link: "#home" },
    { id: 3, name: t.resume, link: "#resume" },
    { id: 4, name: t.projects, link: "#projict" },
    { id: 5, name: t.contact, link: "#contact" }
  ];

  const [activ, setactiv] = useState(1);
  const handleclick = (id) => {
    setactiv(id);
  };

  const [showtags, setshowtags] = useState(false);
  const [animation, setAnimation] = useState("");

  function handeltags() {
    setshowtags(true);
    setAnimation("show");
  }

  function closeTags() {
    setAnimation("hide");
  }

  return (
    <>
      <div className="navbar-fixed">
        <div className="continarNavBar">
          <div className="BoxNavBar">
            <div className="Logo">
              <h2>OmarAlshalq</h2>
              <div className="point"></div>
            </div>
            <div className="LinkList">
              <ul>
                {arrayLi.map(({ id, name, link }) => (
                  <li key={id}>
                    <a
                      className={activ === id ? "activ" : ""}
                      onClick={(e) => handleclick(id, e)}
                      href={link}
                    >
                      {name}
                    </a>
                  </li>
                ))}
                <li>
                  <button className="lang-btn" onClick={toggleLanguage}>
                    <MdLanguage />
                    <span>{t.language}</span>
                  </button>
                </li>
              </ul>
              <IoReorderThreeSharp
                className="BergerIcon"
                onClick={handeltags}
                style={{ display: showtags ? "none" : "block" }}
              />
            </div>
          </div>
        </div>
      </div>

      {showtags &&
        createPortal(
          <div
            className={`${language === "ar" ? "lang-ar" : "lang-en"}`}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 99999,
              pointerEvents: "none"
            }}
          >
            <div
              className={`tagsTow ${
                animation === "show" ? "animateShow" : "animateHide"
              }`}
              onAnimationEnd={() => {
                if (animation === "hide") {
                  setshowtags(false);
                }
              }}
              style={{ pointerEvents: "auto" }}
            >
              <div className="divClosTags">
                <GrClose className="Closeicon" onClick={closeTags} />
              </div>
              <ul>
                {arrayLi.map(({ id, name, link }) => (
                  <li key={id}>
                    <a
                      className={activ === id ? "activ" : ""}
                      onClick={() => {
                        setactiv(id);
                        closeTags();
                      }}
                      href={link}
                    >
                      {name}
                    </a>
                  </li>
                ))}
                <li>
                  <button className="lang-btn" onClick={toggleLanguage}>
                    <MdLanguage />
                    <span>{t.language}</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
