import React from "react";
import { Link } from "react-router-dom";
import {
  InstagramOutlined,
  MailOutlined,
  WhatsAppOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
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
          <a href="mailto:ladyfitlovers@gmail.com" style={{ color: "#ba338a" }}>
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
          <p style={{ color: "#ba338a" }}>Berazategui, Bs.As. Arg.</p>
        </div>
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
