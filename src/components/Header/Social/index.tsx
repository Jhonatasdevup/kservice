// components/SocialIcons.jsx
"use client";
import styles from "./styles.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function SocialIcons() {
  return (
    <ul className={styles.wrapper}>
      <li className={styles.icon}>
      <a href="https://www.instagram.com/kservice_/" target="_blank">
        <InstagramIcon className={styles.instagram} />
        </a>
      </li>
      <li className={styles.icon}>
      <a href="mailto:kservicecontato.adm@gmail.com">
        <MailOutlineIcon className={styles.email} />
      </a>
      </li>
      <li className={styles.icon}>
      <a href="https://wa.me/5511918725136" target="_blank">
        <WhatsAppIcon className={styles.whatsapp} />
      </a>
      </li>
    </ul>
  );
}
