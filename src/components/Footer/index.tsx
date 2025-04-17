import React from "react";
import styles from "./styles.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Menu */}
        <div className={styles.column}>
          <h4>Menu</h4>
          <ul>
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#clientes">Clientes</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div className={styles.column}>
          <h4>Contato</h4>
          <ul>
            <li>
              <PhoneIcon fontSize="small" /> (11) 9 7432-0188
            </li>
            <li>
              <WhatsAppIcon fontSize="small" />
              <a href="https://wa.me/551118725136" target="_blank">
                (11) 9 1872-5136
              </a>{" "}
              Atendimento 24h
            </li>
            <li>
              <MailOutlineIcon fontSize="small" />
              kservicecontato.adm@gmail.com
            </li>
            <li>
              <LocationOnIcon fontSize="small" /> São Paulo - SP
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div className={styles.column}>
          <h4>Siga-nos</h4>
          <div className={styles.socials}>
            <div className={styles.divSocial}>
              <InstagramIcon fontSize="small" />
              <a href="https://www.instagram.com/kservice_/" target="_blank">
                @kservice_
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} KSERVICE Assistência Técnica. Todos os
          direitos reservados. Nossa <a href="/PoliticadePrivacidade">Política de Privacidade</a>{" "}
        </p>
        <p>
          {" "}
          Website created by{" "}
          <a href="https://www.instagram.com/jhonatas.dev/" target="_blank">@jhonatas.dev</a>
        </p>
      </div>
    </footer>
  );
}
