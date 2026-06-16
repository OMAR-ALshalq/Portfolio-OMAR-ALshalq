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
import useAnimation from "../../hooks/useAnimation";

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

  const [refTitle, visTitle] = useAnimation(0.1, 500);
  const [refEduIcon, visEduIcon] = useAnimation(0.1, 500);
  const [refEdu, visEdu] = useAnimation(0.1, 500);
  const [refWorkIcon, visWorkIcon] = useAnimation(0.1, 500);
  const [refRow1Left, visRow1Left] = useAnimation(0.1, 500);
  const [refRow1Right, visRow1Right] = useAnimation(0.1, 500);
  const [refRow2Left, visRow2Left] = useAnimation(0.1, 500);
  const [refRow2Right, visRow2Right] = useAnimation(0.1, 500);
  const [refRow3Left, visRow3Left] = useAnimation(0.1, 500);
  const [refRow3Right, visRow3Right] = useAnimation(0.1, 500);
  const [refSkillIcon, visSkillIcon] = useAnimation(0.1, 500);
  const [refSkills, visSkills] = useAnimation(0.1, 500);

  return (
    <div className="Box">
      <div className="continar continarresume" id="resume">
        <div className="TitelResume">
          <h2
            ref={refTitle}
            className={`anim-fade-up ${visTitle ? "anim-visible" : ""}`}
          >
            {t.resumeTitle}
          </h2>
        </div>
        <div className="education">
          <div
            ref={refEduIcon}
            className={`MainEdIcon anim-fade-up ${visEduIcon ? "anim-visible" : ""}`}
          >
            <FaGraduationCap className="EdIcon" />
            <h3>{t.education}</h3>
          </div>
          {EDUCATION.map(({ id, text, date }) => (
            <div
              ref={refEdu}
              key={id}
              className={`continerEducation anim-fade-left ${visEdu ? "anim-visible" : ""}`}
            >
              <div className="discEducation">
                <p>{text}</p>
                <h2>{date}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="workexperience">
          <div
            ref={refWorkIcon}
            className={`MainCeIcon anim-fade-up ${visWorkIcon ? "anim-visible" : ""}`}
          >
            <MdWork className="CeIcon" />
            <h3>{t.workExperience}</h3>
          </div>
          <div className="BoxMab">
            <div
              ref={refRow1Left}
              className={`MabOne anim-fade-right ${visRow1Left ? "anim-visible" : ""}`}
            >
              <div className="continerCeucation">
                <div className="discCeucation">
                  <p>{t.workExp1Text1}</p>
                </div>
              </div>
            </div>
            <div
              ref={refRow1Right}
              className={`MabTow anim-fade-left ${visRow1Right ? "anim-visible" : ""}`}
            >
              <div className="continerCeucation">
                <div className="discCeucation">
                  <p>{t.workExp1Text2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="workexperience">
          <div className="BoxMab">
            <div
              ref={refRow2Left}
              className={`MabOne anim-fade-right ${visRow2Left ? "anim-visible" : ""}`}
            >
              <div className="continerCeucation">
                <div className="discCeucation">
                  <p>{t.workExp2Text2}</p>
                </div>
              </div>
            </div>
            <div
              ref={refRow2Right}
              className={`MabTow anim-fade-left ${visRow2Right ? "anim-visible" : ""}`}
            >
              <div className="continerCeucation">
                <div className="discCeucation">
                  <p>{t.workExp2Text3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="workexperience">
          <div className="BoxMab">
            <div
              ref={refRow3Left}
              className={`MabOne anim-fade-right ${visRow3Left ? "anim-visible" : ""}`}
            >
              <div className="continerCeucation">
                <div className="discCeucation">
                  <p>{t.workExp1Text3}</p>
                </div>
              </div>
            </div>
            <div
              ref={refRow3Right}
              className={`MabTow anim-fade-left ${visRow3Right ? "anim-visible" : ""}`}
            >
              <div className="continerCeucation">
                <div className="discCeucation">
                  <p>{t.workExp2Text1}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Skills">
          <div
            ref={refSkillIcon}
            className={`MainSKIcon anim-fade-up ${visSkillIcon ? "anim-visible" : ""}`}
          >
            <GiSkills className="SKIcon" />
            <h3>{t.skills}</h3>
          </div>
          <div
            ref={refSkills}
            className={`BoxSkills anim-zoom-in ${visSkills ? "anim-visible" : ""}`}
          >
            {SKILLS.map(({ id, text, dis }) => (
              <div className="continerSKucation" key={id}>
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
