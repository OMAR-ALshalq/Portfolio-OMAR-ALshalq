import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations";

import MYCV_AR from "../../../public/CV/محمد عمر الشلق.pdf";
import MYCV_EN from "../../../public/CV/Mohammed Omar  Al-Shalq.pdf";

import "./Hero.css";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  // اختيار ملف CV حسب اللغة
  const MYCV = language === "ar" ? MYCV_AR : MYCV_EN;

  return (
    <div className="Box">
      <div className="continar continarHero">
        <div className="MainBoxHero">
          <div className="BoxTextImage">
            <div className="Texthero">
              <h4 data-aos="fade-right">{t.heroTitle}</h4>
              <h2 data-aos="fade-right" data-aos-delay="500">
                {t.heroGreeting}
              </h2>
              <h2 data-aos="fade-right" data-aos-delay="1000">
                {t.heroName}
              </h2>
              <h4 data-aos="fade-right" data-aos-delay="1500">
                {t.heroDescription}
              </h4>
              <div className="Iconshero">
                <div className="ACV">
                  <a
                    data-aos="fade-right"
                    data-aos-delay="0"
                    href={MYCV}
                    download
                  >
                    {t.downloadCV}
                    <MdOutlineFileDownload className="" />
                  </a>
                </div>
                <div className="Asocil">
                  <a
                    href="https://github.com/OMAR-Alshalq"
                    data-aos="fade-right"
                    data-aos-delay="0"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.facebook.com/Omar Alshalak"
                    target="_blank"
                    data-aos="fade-right"
                    data-aos-delay="2600"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://wa.me/+963982359538"
                    target="_blank"
                    data-aos="fade-right"
                    data-aos-delay="2550"
                  >
                    <IoLogoWhatsapp />
                  </a>
                  <a
                    href="https://www.instagram.com/oalshalak"
                    target="_blank"
                    data-aos="fade-right"
                    data-aos-delay="2500"
                  >
                    <RiInstagramFill />
                  </a>
                </div>
              </div>
            </div>
            <div className="Imagehero">
              <img
                src={"Image/IMG_20250126_115144 (1).png"}
                data-aos="zoom-in"
                data-aos-delay="500"
              ></img>
            </div>
          </div>
          <div className="Number"></div>
        </div>
      </div>
    </div>
  );
}
