import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { nome, whatsapp, email, endereco, problema } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Site KService" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Novo atendimento solicitado por ${nome}`,
      html: `
        <h2>Solicitação de Atendimento</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>Problema:</strong><br/> ${problema}</p>
      `,
    });

    return res.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch (error: any) {
    console.error('Erro ao enviar email:', error.message, error.response || '');
    return res.status(500).json({ message: 'Erro ao enviar email' });
  }
}

  