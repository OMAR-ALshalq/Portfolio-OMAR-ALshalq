import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations";

import "./Footer.css";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="Box">
      <div className="continar continarFooter">
        <div className="BoxFooterMain">
          <div className="BoxFooterOne">
            <div className="InformationMy">
              <h2>{t.footerTitle}</h2>
              <p>{t.footerDescription}</p>
              <div className="Asocil">
                <a href="https://github.com/OMAR-Alshalq" target="_blank">
                  <FaGithub />
                </a>
                <a href="https://ww.facebook.com/Omar Alshalak" target="_blank">
                  <FaFacebook />
                </a>
                <a href="https://wa.me/+963982359538" target="_blank">
                  <IoLogoWhatsapp />
                </a>
                <a
                  href="https://www.instagram.com/Omar ALshalak"
                  target="_blank"
                >
                  <RiInstagramFill />
                </a>
              </div>
            </div>
            <div className="QuikLinks">
              <h2>{t.quickLinks}</h2>
              <div className="links">
                <a href="#home">{t.home}</a>
                <a href="#services">{t.services}</a>
                <a href="#resume">{t.resume}</a>
                <a href="#projict">{t.projects}</a>
                <a href="#contact">{t.contact}</a>
              </div>
            </div>
            <div className="Services">
              <h2>{t.services}</h2>
              <p>{t.service1}</p>
              {/* <p>{t.service2}</p> */}
              {/* <p>{t.service3}</p> */}
            </div>
            <div className="ServicesFooter"></div>
          </div>
          <hr className="HR"></hr>
          <div className="BoxFooterTow">
            <div className="textOne">
              <p>{t.rights}</p>
            </div>
            <div className="textTow">
              <a href="#">{t.privacyPolicy}</a>
              <a href="#">{t.termsOfService}</a>
              <a href="#">{t.cookiesPolicy}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
