import "./Resume.css";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GrHtml5 } from "react-icons/gr";
import { TbBrandCss3 } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations";

export default function Resume() {
  const { language } = useLanguage();
  const t = translations[language];

  const EDUCATION = [
    {
      id: 1,
      text: t.educationText,
      date: t.educationDate
    }
  ];

  const WORKEXPERIENCEOne = [
    {
      id: 1,
      text: t.workExp1Text1
    },
    {
      id: 2,
      text: t.workExp1Text2
    }
  ];

  const WORKEXPERIENCETow = [
    {
      id: 1,
      text: t.workExp2Text1
    },
    {
      id: 2,
      text: t.workExp2Text2
    }
  ];

  const SKILLS = [
    {
      id: 1,
      text: <GrHtml5 />,
      dis: "HTML5"
    },
    {
      id: 2,
      text: <TbBrandCss3 />,
      dis: "CSS3"
    },
    {
      id: 3,
      text: <RiJavascriptLine />,
      dis: "JavaScript"
    },
    {
      id: 4,
      text: <RiTailwindCssLine />,
      dis: "Tailwind CSS"
    },
    {
      id: 5,
      text: <FaGithubSquare />,
      dis: "Git & GitHub"
    },
    {
      id: 6,
      text: <DiJavascript1 />,
      dis: "ES6+"
    },
    {
      id: 7,
      text: <RiReactjsFill />,
      dis: "React.js"
    },
    {
      id: 8,
      text: <SiNodedotjs />,
      dis: "Node.js"
    },
    {
      id: 9,
      text: <SiExpress />,
      dis: "Express.js"
    },
    {
      id: 10,
      text: <SiMongodb />,
      dis: "MongoDB"
    },
    {
      id: 11,
      text: <SiMui />,
      dis: "Material UI"
    }
  ];

  return (
    <div className="Box">
      <div className="continar continarresume" id="resume">
        <div className="TitelResume">
          <h2 data-aos="fade-up">{t.resumeTitle}</h2>
        </div>
        <div className="education">
          <div data-aos="fade-up" className="MainEdIcon">
            <FaGraduationCap className="EdIcon" />
            <h3>{t.education}</h3>
          </div>
          {EDUCATION.map(({ id, text, date }) => (
            <div data-aos="fade-left" className="continerEducation" key={id}>
              <div className="discEducation">
                <p>{text}</p>
                <h2>{date}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="workexperience">
          <div data-aos="fade-up" className="MainCeIcon">
            <MdWork className="CeIcon" />
            <h3>{t.workExperience}</h3>
          </div>
          <div className="BoxMab">
            <div data-aos="fade-right" className="MabOne">
              {/* {WORKEXPERIENCEOne.map(({ id, text }) => ( */}
              <div className="continerCeucation">
                <div className="discCeucation">
                  <p>{t.workExp1Text1}</p>
                </div>
              </div>
              {/* ))} */}
            </div>
            <div data-aos="fade-left" className="MabTow">
              {/* {WORKEXPERIENCETow.map(({ id, text }) => ( */}
              <div className="continerCeucation">
                <div className="discCeucation">
                  <p>{t.workExp1Text2}</p>
                </div>
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>

        <div className="workexperience">
          <div className="BoxMab">
            <div data-aos="fade-right" className="MabOne">
              {/* {WORKEXPERIENCEOne.map(({ id, text }) => ( */}
              <div className="continerCeucation">
                <div className="discCeucation">
                  <p>{t.workExp2Text2}</p>
                </div>
              </div>
              {/* ))} */}
            </div>
            <div data-aos="fade-left" className="MabTow">
              {/* {WORKEXPERIENCETow.map(({ id, text }) => ( */}
              <div className="continerCeucation">
                <div className="discCeucation">
                  <p>{t.workExp2Text3}</p>
                </div>
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>
        <div className="workexperience">
          <div className="BoxMab">
            <div data-aos="fade-right" className="MabOne">
              {/* {WORKEXPERIENCEOne.map(({ id, text }) => ( */}
              <div className="continerCeucation">
                <div className="discCeucation">
                  <p>{t.workExp1Text3}</p>
                </div>
              </div>
              {/* ))} */}
            </div>
            <div data-aos="fade-left" className="MabTow">
              {/* {WORKEXPERIENCETow.map(({ id, text }) => ( */}
              <div className="continerCeucation">
                <div className="discCeucation">
                  <p>{t.workExp2Text1}</p>
                </div>
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>

        <div className="Skills">
          <div data-aos="fade-up" className="MainSKIcon">
            <GiSkills className="SKIcon" />
            <h3>{t.skills}</h3>
          </div>
          <div className="BoxSkills">
            {SKILLS.map(({ id, text, dis }, index) => (
              <div
                className="continerSKucation"
                key={id}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="discSKucation">
                  <p>{text}</p>
                  <h4>{dis}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
