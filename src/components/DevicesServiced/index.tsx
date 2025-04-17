import React from 'react';
import styles from './styles.module.css';

export default function Service() {
  const data = [
    {
      img: '/Secadora.png',
      title: 'Secadora',
    },
    {
      img: '/forno-de-micro-ondas.png',
      title: 'Micro-Ondas',
    },
    {
      img: '/maquina-de-lavar.png',
      title: 'Lava e Seca',
    },
    {
      img: '/geladeira.png',
      title: 'Geladeira',
    },
    {
      img: '/seguro-para-freezer.png',
      title: 'Freezer',
    },
    {
      img: '/cerveja.png',
      title: 'Cervejeira',
    },
    {
      img: '/maquinalavar.png',
      title: 'Máquina de lavar',
    },
    {
      img: '/eletrodomesticos.png',
      title: 'E outros produtos',
    },
  ];

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        Consertamos seus eletrodomésticos com{' '}
        <span className={styles.highlight}>rapidez</span>,{' '}
        <span className={styles.highlight}>garantia</span> e total{' '}
        <span className={styles.highlight}>confiança</span>!
      </h1>
      <div className={styles.divServiceMain}>
        {data.map((val, i) => (
          <div key={i} className={styles.divService}>
            <img src={val.img} alt={val.title} className={styles.img} />
            <h3 className={styles.titleService}>{val.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}