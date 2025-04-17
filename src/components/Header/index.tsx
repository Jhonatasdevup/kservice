"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Social from "./Social";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>

        <Image alt="kservice" src="/kservice.png" width={80} height={80} />
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        <ul>
        <li><a href="#inicio">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#clientes">Clientes</a></li>
        <li><a href="#contato">Contato</a></li>

        </ul>
      </nav>

      <div className={styles.social}>
        <Social />
      </div>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
    </header>
  );
}
