"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import CircularProgress from '@mui/material/CircularProgress';

export default function ContactForm() {
  const [loading, setLoading ] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    endereco: "",
    problema: "",
    termos: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { name, value } = target;
  
    const newValue =
      target.type === "checkbox"
        ? (target as HTMLInputElement).checked
        : value;
  
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault();
    if (!formData.termos) {
      alert("Você precisa aceitar os termos da LGPD.");
      return;
    }
  
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
  
      if (response.ok) {
        alert("Formulário enviado com sucesso!");
        setLoading(false)
        setFormData({
          nome: "",
          whatsapp: "",
          email: "",
          endereco: "",
          problema: "",
          termos: false,
        });
        
      } else {
        
        alert("Erro ao enviar solicitação.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro inesperado ao enviar solicitação.");
    }
  };
  
  return (
    <section className={styles.section} > 
    <form className={styles.form} onSubmit={handleSubmit}>
      <img src="/kservice.png" alt="kservice" style={{width: 150, height: 150, alignSelf: 'center'}}/>
      <h2 className={styles.title} >Solicite seu atendimento</h2>

      <label className={styles.label}>Nome</label>
      <input
        type="text"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        required
        className={styles.input}
        
      />

      <label className={styles.label}>WhatsApp</label>
      <input
        type="tel"
        name="whatsapp"
        value={formData.whatsapp}
        onChange={handleChange}
        required
        className={styles.input}
        
      />

      <label className={styles.label}>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className={styles.input}
       
      />

      <label className={styles.label}>Endereço</label>
      <input
        type="text"
        name="endereco"
        value={formData.endereco}
        onChange={handleChange}
        required
        className={styles.input}
        
      />

      <label className={styles.label}>
        Descreva o problema apresentado com o máximo de detalhes
      </label>
      <textarea
        name="problema"
        value={formData.problema}
        onChange={handleChange}
        rows={5}
        required
        className={styles.textarea}
        
      />

      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          name="termos"
          checked={formData.termos}
          onChange={handleChange}
          className={styles.checkbox}
          required
        />
        <p>

        Aceito os termos e condições conforme a Lei Geral de Proteção de Dados (LGPD) e nossa <a href="/PoliticadePrivacidade">Política de Privacidade</a>
        </p>
      </label>
    {loading? 
        <div style={{width:"100%", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <CircularProgress color="success" />
        </div>
        :
        <button type="submit" className={styles.button}>
        Enviar Solicitação
      </button>
  }



    </form>
    </section>
  );
}
