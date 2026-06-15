import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations";

export default function HtmlCssprojict() {
  const { language } = useLanguage();
  const t = translations[language];

  const [hoveredId, setHoveredId] = useState(null);

  const ArrayAllprojict = [
    {
      id: 1,
      img: "Image/ImageProjict/imgAllprojict/Project-Responsive-level-One.png",
      title: "Project-Responsive-level-One",
      dis:
        language === "ar"
          ? "هذا المشروع هو صفحة ويب بسيطة..."
          : "This project is a simple... ",
      disTow:
        language === "ar"
          ? "هذا المشروع هو صفحة ويب بسيطة تم تطويرها باستخدام HTML و CSS لتطبيق مبادئ التصميم المتجاوب. يركز المشروع على إنشاء واجهة نظيفة تعمل بسلاسة عبر الأجهزة المختلفة، باستخدام Flexbox و Media Queries لتحسين الاتساق وتجربة المستخدم."
          : "This project is a simple webpage developed using HTML and CSS to implement responsive design principles. The project focuses on creating a clean interface that functions smoothly across different devices, using Flexbox and Media Queries to improve consistency and user experience.",
      source: "https://github.com/OMAR-ALshalq/ProjectResponsiv",
      view: "https://project-responsive-level-one.onrender.com"
    },
    {
      id: 2,
      img: "/Image/ImageProjict/imgAllprojict/Project-Responsive-level-Tow.png",
      title: "Project-Responsive-level-Tow",
      dis:
        language === "ar"
          ? "هذا المشروع يمثل خطوة مهمة..."
          : "This project represents... ",
      disTow:
        language === "ar"
          ? "هذا المشروع يمثل خطوة مهمة إلى الأمام في تطبيق مبادئ التصميم المتجاوب باستخدام HTML و CSS. يركز على بناء صفحة ويب أكثر تطوراً من خلال تحسين تخطيط العناصر وتطوير واجهة احترافية تتكيف بسلاسة مع أحجام الشاشات المختلفة. يستخدم المشروع تقنيات مثل Flexbox و Grid لتنظيم العناصر ديناميكياً، بالإضافة إلى Media Queries لضبط التصميم للتوافق مع الأجهزة المختلفة."
          : "This project represents a significant step forward in applying responsive design principles using HTML and CSS. It focuses on building a more sophisticated, first-level webpage by optimizing element layout and developing a professional interface that seamlessly adapts to various screen sizes. The project utilizes technologies such as Flexbox and Grid to dynamically organize elements, in addition to employing Media Queries to adjust the design for compatibility with different devices.",
      source: "https://github.com/OMAR-ALshalq/Project-Responsive-Level-T",
      view: "https://project-responsive-level-tow.onrender.com"
    },
    {
      id: 3,
      img: "Image/ImageProjict/imgAllprojict/Project-Dashbord.png",
      title: "Project-DashBord",
      dis:
        language === "ar"
          ? "لوحة تحكم متجاوبة..."
          : "Project Dashboard Responsive...",
      disTow:
        language === "ar"
          ? "لوحة تحكم متجاوبة تم تطويرها باستخدام HTML و CSS، مع الاستفادة من إطار عمل Tailwind CSS لتسريع عملية التصميم وتحسين جودة الواجهة. يركز المشروع على بناء تصميم احترافي منظم يضم عناصر مختلفة مثل الأشرطة الجانبية والبطاقات والجداول والمؤشرات المرئية، مع ضمان وظائف سلسة عبر أحجام الشاشات المختلفة. يهدف المشروع إلى تطبيق مفاهيم التصميم المتجاوب المتقدمة وإنشاء تجربة مستخدم واضحة ومرتبة باستخدام أدوات Tailwind القوية."
          : "Project Dashboard Responsive is a responsive dashboard developed using HTML and CSS, leveraging the Tailwind CSS framework to accelerate the design process and enhance the interface's quality. The project focuses on building a professional, organized design incorporating various elements such as sidebars, cards, tables, and visual indicators, while ensuring seamless functionality across different screen sizes. The project aims to implement advanced responsive design concepts and create a clear and uncluttered user experience using the powerful tools of Tailwind.",
      source: "https://github.com/OMAR-ALshalq/Project-DashBord-Responsive",
      view: "https://project-dashbord-responsive.onrender.com/index.html"
    }
  ];

  return (
    <div data-aos="zoom-in-up" className="allprojict" id="HtmlCssProject">
      {ArrayAllprojict.map(({ id, img, title, dis, disTow, source, view }) => (
        <div key={id} className="projict">
          <div className="imajprojict">
            <img src={img} alt={title}></img>
          </div>
          <div className="titledis">
            <h2>{title}</h2>
            <p>
              {dis}
              <span
                className="see-more-btn"
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(id)}
              >
                {t.seeMore}
              </span>
            </p>
          </div>
          <div
            className={`details-overlay ${hoveredId === id ? "active" : ""}`}
            onMouseLeave={() => setHoveredId(null)}
          >
            <GrClose
              className="close-icon"
              onClick={() => setHoveredId(null)}
            />
            <p>{disTow}</p>
          </div>
          <div className="linkprojict">
            <a href={source} target="_blank">
              {t.github}
            </a>
            <a href={view} target="_blank">
              {t.view}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
