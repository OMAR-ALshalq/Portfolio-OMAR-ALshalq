import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useLanguage } from "../../LanguageContext";
import translations from "../../translations";

const ContactData = (t) => [
  {
    id: 1,
    icon: <FaLocationDot />,
    title: t.address,
    info: t.addressInfo,
    link: "https://maps.app.goo.gl/ccPxhAmMZGZ7x9"
  },
  {
    id: 2,
    icon: <FaSquareWhatsapp />,
    title: t.whatsapp,
    info: "+963982359538",
    link: "https://wa.me/+963982359538"
  },
  {
    id: 3,
    icon: <FaFacebookMessenger />,
    title: t.messenger,
    info: "Omar Alshalq",
    link: "https://m.me/Omar Alshalak"
  }
];

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const contactData = ContactData(t);

  const form = useRef();
  const [showMassage, setShowMassage] = useState(false);
  const [textMassage, setTextMassage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ivcdjf7",
      "template_nv6yqig",
      form.current,
      "q1NS15pvkXyOQjQPb"
    );

    e.target.reset();
    setName("");
    setEmail("");
    setMessage("");

    setTextMassage(t.sending);
    setShowMassage(true);

    setTimeout(() => {
      setTextMassage(t.messageSent);
    }, 3000);

    setTimeout(() => {
      setShowMassage(false);
    }, 5500);
  };

  const isFormValid =
    name.trim() !== "" && email.trim() !== "" && message.trim() !== "";

  return (
    <div className="Box">
      <div className="continar continarContact">
        <div className="BoxConatct">
          <h2 data-aos="fade-up">{t.contactTitle}</h2>
          <div id="contact" className="BoxMainConatct">
            <div className="BoxData">
              {contactData.map(({ id, icon, title, info, link }) => (
                <div key={id} className="cardData" data-aos="fade-right">
                  <div className="icon">{icon}</div>
                  <div className="titleAndinfo">
                    <p>{title}</p>
                    <a href={link}>{info}</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="BoxForm">
              <form ref={form} onSubmit={sendEmail} data-aos="fade-left">
                <input
                  type="text"
                  placeholder={t.fullName}
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  data-aos="fade-left"
                  data-aos-delay="300"
                />
                <input
                  type="email"
                  placeholder={t.yourEmail}
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-aos="fade-left"
                  data-aos-delay="500"
                />
                <textarea
                  rows={7}
                  name="message"
                  id="message"
                  placeholder={t.yourMessage}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  data-aos="fade-left"
                  data-aos-delay="700"
                ></textarea>

                {showMassage && (
                  <div className="Massage">
                    <DotLottieReact
                      src="https://lottie.host/16c4c764-d49f-4da1-bafe-b8e036807f2e/8NA2NfTYAi.lottie"
                      autoplay
                      loop={false}
                      style={{ width: "100px", height: "50px" }}
                    />
                    <p className="textMassage">{textMassage}</p>
                  </div>
                )}

                {isFormValid && (
                  <button className="btn btn-primary">{t.sendMessage}</button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
