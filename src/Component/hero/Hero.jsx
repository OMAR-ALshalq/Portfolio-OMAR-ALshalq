import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations";
import useAnimation from "../../hooks/useAnimation";

import MYCV_AR from "../../../public/CV/محمد عمر الشلق.pdf";
import MYCV_EN from "../../../public/CV/Mohammed Omar  Al-Shalq.pdf";

import "./Hero.css";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const MYCV = language === "ar" ? MYCV_AR : MYCV_EN;

  const [ref1, visible1] = useAnimation(0.1, 0);
  const [ref2, visible2] = useAnimation(0.1, 500);
  const [ref3, visible3] = useAnimation(0.1, 500);
  const [ref4, visible4] = useAnimation(0.1, 500);
  const [ref5, visible5] = useAnimation(0.1, 500);
  const [ref6, visible6] = useAnimation(0.1, 500);
  const [ref7, visible7] = useAnimation(0.1, 500);

  return (
    <div className="Box">
      <div className="continar continarHero">
        <div className="MainBoxHero">
          <div className="BoxTextImage">
            <div className="Texthero">
              <h4
                ref={ref1}
                className={`anim-fade-right ${visible1 ? "anim-visible" : ""}`}
              >
                {t.heroTitle}
              </h4>
              <h2
                ref={ref2}
                className={`anim-fade-right ${visible2 ? "anim-visible" : ""}`}
              >
                {t.heroGreeting}
              </h2>
              <h2
                ref={ref3}
                className={`anim-fade-right ${visible3 ? "anim-visible" : ""}`}
              >
                {t.heroName}
              </h2>
              <h4
                ref={ref4}
                className={`anim-fade-right ${visible4 ? "anim-visible" : ""}`}
              >
                {t.heroDescription}
              </h4>
              <div className="Iconshero">
                <div className="ACV">
                  <a
                    ref={ref5}
                    className={`anim-fade-right ${visible5 ? "anim-visible" : ""}`}
                    href={MYCV}
                    download
                  >
                    {t.downloadCV}
                    <MdOutlineFileDownload className="" />
                  </a>
                </div>
                <div
                  ref={ref6}
                  className={`Asocil anim-fade-right ${visible6 ? "anim-visible" : ""}`}
                >
                  <a href="https://github.com/OMAR-Alshalq">
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.facebook.com/Omar Alshalak"
                    target="_blank"
                  >
                    <FaFacebook />
                  </a>
                  <a href="https://wa.me/+963982359538" target="_blank">
                    <IoLogoWhatsapp />
                  </a>
                  <a href="https://www.instagram.com/oalshalak" target="_blank">
                    <RiInstagramFill />
                  </a>
                </div>
              </div>
            </div>
            <div className="Imagehero">
              <img
                ref={ref7}
                className={`anim-zoom-in ${visible7 ? "anim-visible" : ""}`}
                src={"Image/IMG_20250126_115144 (1).png"}
              ></img>
            </div>
          </div>
          <div className="Number"></div>
        </div>
      </div>
    </div>
  );
}
