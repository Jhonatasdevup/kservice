"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png", "/7.png"];

export default function OurService() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Nossos serviços</h2>

      <div className={styles.divIMG}>
        {images.map((src, index) => (
            <img
            key={index}
            src={src}
            alt={`Serviço ${index + 1}`}
            className={styles.image}
            onClick={() => openImage(src)}
          />
        ))}
      </div>
      <div id="clientes"></div>

      {selectedImage && (
        <div className={styles.modal} onClick={closeImage}>
          <img src={selectedImage} className={styles.modalImage} />
        </div>
      )}
    </section>
  );
}
