"use client";

import React from "react";

import styles from "./styles.module.css";

//img



//carrossel
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import { Rating } from "@mui/material";

import useWindowSize from "@/func/useWindowSize";



export default function CustomerReview() {

  const windowsSize = useWindowSize()
  const width = windowsSize.width ?? 0

  const isCell = width <= 767

const dataCustomerReview = [
  {
    id:1,
    name:'Amanda A Donadio',
    text:'Gostaria de agradecer pelo excelente serviço no conserto da minha máquina de lavar. O trabalho foi rápido, eficiente e muito bem feito. A máquina está funcionando perfeitamente, e fiquei muito satisfeita com a atenção aos detalhes e o profissionalismo. Com certeza, recomendarei os seus serviços para outras pessoas!'
  },
  {
    id:2,
    name:'Carlos Silva',
    text:'Atendimento rápido profissional e limpo Muito organizado e honesto, explica tudo que foi feito na manutenção da máquina. Obrigado Kevin  pelo trabalho 👍 …'
  },
  {
    id:3,
    name:'Josimar Nunes santos',
    text:'Adquirir uma lava e seca com o kevin, produto com manutenção rigorosamente em dia e esta funcionando perfeitamente bem e com qualidade! Ótimo profissional super indico.'
  },
  {
    id:4,
    name:'Marli Silva',
    text:'Super recomendo. Serviço de qualidade,  super educados e ótimos profissionais . Parabéns pelo atendimento 👏 …'
  },
  {
    id:5,
    name:'Ana Coelho',
    text:'Serviço excelente e profissionais educados! Amei todo o trabalho feito, dicas e sinceridade sobre as coisas que não tinham solução.'
  },
]

  return (
    <aside className={styles.divMain} >
      <h2 className={styles.title}>
        O que nossos clientes dizem sobre nós?
      </h2>
      <Swiper
        rewind={true}
        navigation={!isCell}
        modules={[Autoplay, Navigation]}
        className={styles.swiper}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {dataCustomerReview.map((item, i) => (
          <SwiperSlide className={styles.swiperSlide} key={i}>
            <img
              src={"/google.png"}
              alt="Cliente Review"
              style={{width: 140, height:40, marginTop: 30}}
            />

            <h4 className={styles.nameClient}>{item.name}</h4>

            <p className={styles.review}>{item.text}</p>

            <Rating
              name="half-rating-read"
              defaultValue={5}
              precision={0.1}
              readOnly
              sx={{ marginTop: 2 }}
              id="contato"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </aside>
  );
}
