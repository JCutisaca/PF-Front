import React from "react";
import { Link } from "react-router-dom";
import {
  InstagramOutlined,
  MailOutlined,
  WhatsAppOutlined,
  InfoCircleOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerInfo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="wave"
        >
          <path
            fill="#e0b3d3"
            fillOpacity="1"
            d="M0,256L80,224C160,192,320,128,480,122.7C640,117,800,171,960,197.3C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>

        {/* RESTO DEL FOOTER------------------- */}
        <div className="footerTop">
          <div className="footerTopLeftWrapper">
            <h3 className="h3footer">Información</h3>

            <Link to="/contacto">Contacto</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/preguntas-frecuentes">Preguntas frecuentes</Link>
            <Link to="/products">Productos</Link>
            <Link to="/">Inicio</Link>
          </div>
          <div>
            <h3 className="h3footer">Redes Sociales</h3>
            <a
              href="https://www.instagram.com/ladyfitlovers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramOutlined /> Instagram
            </a>

            <h3 className="h3footer">Contactanos</h3>
            <a
              href="mailto:ladyfitlovers@gmail.com"
              style={{ color: "#ba338a" }}
            >
              <Link>
                <MailOutlined></MailOutlined> LadyFitLovers@gmail.com
              </Link>
            </a>
            <br></br>
            <Link to="https://chat.whatsapp.com/LijG0wDr4ytLMZvYiU1dra">
              <WhatsAppOutlined /> Whatsapp
            </Link>
          </div>

          <div>
            <h3 className="h3footer">Ciudad</h3>
            <p style={{ color: "#ba338a" }}>
              <EnvironmentOutlined /> Berazategui, Bs.As. Arg.
            </p>
          </div>
        </div>
        {/* RESTO DEL FOOTER------------------- */}
      </div>
      <div className="footerBottom">
        ©2023 Todos los derechos reservados -
        <Link to="/nosotros">
          - Grupo de desarrollo Web{" "}
          <InfoCircleOutlined style={{ color: "rgb(252, 192, 182)" }} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
