import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations";

export default function Reactprojict() {
  const { language } = useLanguage();
  const t = translations[language];

  const [hoveredId, setHoveredId] = useState(null);

  const ArrayAllprojict = [
    {
      id: 4,
      img: "Image/ImageProjict/imgAllprojict/freshfruits.png",
      title: "Fresh Fruits",
      dis:
        language === "ar"
          ? "هو تطبيق ويب تفاعلي..."
          : "is an interactive web application ... ",
      disTow:
        language === "ar"
          ? "مشروع Fresh Fruits هو تطبيق ويب تفاعلي مبني باستخدام React.js، يركز بشكل أساسي على تقديم تجربة مستخدم بصرية مذهلة من خلال الرسوم المتحركة المتقدمة وتصميم CSS العصري. يتميز الموقع بانتقالات سلسة وحركات عناصر ديناميكية، مما يعرض مهاراتي في تحويل التصاميم الثابتة إلى واجهات رقمية نابضة بالحياة وتفاعلية."
          : "The Fresh Fruits project is an interactive web application built using React.js, primarily focused on delivering a stunning visual user experience through advanced animation and modern CSS styling. The site features smooth transitions and dynamic element movements, showcasing my skills in transforming static designs into vibrant and interactive digital interfaces.",
      source: "https://github.com/OMAR-ALshalq/Project-FreshFruits-usingReact",
      view: "https://project-freshfruits-usingreact.onrender.com/"
    },
    {
      id: 5,
      img: "Image/ImageProjict/imgAllprojict/GimwebSite.png",
      title: "GimWebSite",
      dis:
        language === "ar"
          ? "المشروع هو تطبيق رياضي كامل..."
          : "project is a complete sports... ",
      disTow:
        language === "ar"
          ? "مشروع GimWebSite هو تطبيق ويب رياضي كامل يجمع بين التصميم المتجاوب وميزات البرمجة المبتكرة في React.js. يتميز المشروع بنظام تراكب تفاعلي لعرض المعلومات مع رسوم متحركة سلسة، بالإضافة إلى دعم كامل للوضع المظلم، مما يعكس قدرتي على إدارة الحالات المعقدة وتحسين واجهة المستخدم لتكون تفاعلية وعصرية ومريحة بصرياً."
          : "The GimWebSite project is a complete sports web application that combines responsive design with innovative programming features in React.js. The project features an interactive overlay system for displaying information with smooth animations, as well as full support for Dark Mode, reflecting my ability to manage complex states and optimize the user interface to be interactive, modern, and visually comfortable.",
      source: "https://github.com/OMAR-ALshalq/GimWebSite",
      view: "https://gimwebsite.onrender.com/"
    },
    {
      id: 6,
      img: "Image/ImageProjict/imgAllprojict/EstatApp.png",
      title: "EstateApp",
      dis:
        language === "ar"
          ? "المشروع هو علامة فارقة في مسيرتي..."
          : "project is a significant... ",
      disTow:
        language === "ar"
          ? "مشروع EstateApp هو علامة فارقة في مسيرتي المهنية، حيث قمت ببناء منصة عقارية شاملة تتيح للمستخدمين تصفح وشراء واستئجار أنواع مختلفة من الوحدات السكنية. من خلال هذا المشروع، تعمقت في مفاهيم البرمجة المتقدمة باستخدام React Router لضمان تنقل سلس وسريع بين الصفحات، مع إضافة ميزة التواصل المباشر مع الوسطاء لتعزيز التفاعلية. هذا يوضح قدرتي على بناء تطبيقات ويب كبيرة ومنظمة برمجياً."
          : "The EstateApp project is a significant milestone in my career, as I built a comprehensive real estate platform that allows users to browse, buy, and rent various types of residential units. Through this project, I delved into advanced programming concepts using React Router to ensure smooth and fast navigation between pages, while also adding a feature for direct communication with brokers to enhance interactivity. This demonstrates my ability to build large, programmatically structured web applications.",
      source: "https://github.com/OMAR-ALshalq/EstateApp",
      view: "https://estateapp-fb5c.onrender.com"
    },
    {
      id: 7,
      img: "Image/ImageProjict/imgAllprojict/CarShowRoom.png",
      title: "CarShowRoom",
      dis:
        language === "ar"
          ? "هذا الموقع موجه لمعارض... "
          : "This project is aimed at car... ",
      disTow:
        language === "ar"
          ? "هذا المشروع موجه لمعارض السيارات بحيث يتيح للمعرض من عرض السيارات التي لديه على شبكة الانترت مما يسهل على المستخدم الوصول الى انواع السيارات الموجودة ضمن المعرض كما يتيح هذا الموقع  للمستخدم امكانية المقارنة بين انواع السيارات المختلفة ويعطي تجربة تصفح و بحث سلسة جدا كما اني خصصت لهذا الموقع لوحة تحكم ليتمكن صاحب المعرض من ادخال السيارات الجديدة او الحذف او التعديل على السيارات القديمة"
          : "This project is designed for car dealerships, enabling them to showcase their inventory online. It makes it easy for users to browse available vehicle models and compare different types of cars, offering a seamless browsing and search experience. Additionally, the site includes a dedicated dashboard that allows the dealership owner to add new vehicles, as well as delete or modify existing listings.",
      source: "https://github.com/OMAR-ALshalq/Car-Showroom",
      view: "https://car-showroom-36rh.onrender.com"
    }
  ];

  return (
    <div data-aos="zoom-in-right" className="allprojict" id="ReactProject">
      {ArrayAllprojict.reverse().map(({ id, img, title, dis, disTow, source, view }) => (
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
