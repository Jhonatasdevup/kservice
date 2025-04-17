'use client';

import styles from './styles.module.css';
import { Container } from '@mui/material';

export default function About() {
  return (
    <section className={styles.aboutSection} >
      <Container maxWidth="md">
        <h2 className={styles.title}>Nossa história</h2>

        <p className={styles.subtitle}>
          Especialistas no conserto de eletrodomésticos da linha branca: geladeiras, máquinas de lavar, lava e seca e muito mais.
        </p>

        <p className={styles.text}>
          Desde 2021, atendendo com qualidade em São Paulo e Grande SP.
        </p>

        <p className={styles.text}>
          Contamos com técnicos altamente qualificados, com cursos atualizados em todas as marcas do mercado.
        </p>

        <p className={styles.text} id='servicos'>
          Trabalhamos com honestidade, garantia e emissão de nota fiscal, oferecendo transparência total em cada atendimento.
        </p>

        <p className={styles.finalCall}>
          Entre em contato e conte com a gente para cuidar do seu eletrodoméstico!
        </p>
      </Container>
    </section>
  );
}
