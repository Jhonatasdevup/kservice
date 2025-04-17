import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'KSERVICE Assistência Técnica | Conserto de Eletrodomésticos SP',
  description:
    'Especialistas em conserto de geladeiras, máquinas de lavar, lava e seca e outros eletrodomésticos. Atendimento com garantia e nota fiscal em toda São Paulo e Grande SP.',
  keywords: [
    'assistência técnica SP',
    'conserto de geladeira',
    'KSERVICE',
    'reparo de eletrodomésticos',
    'manutenção preventiva',
    'linha branca',
    'técnico geladeira',
    'máquina de lavar',
    'lava e seca',
    'serviços com nota fiscal',
    'garantia de conserto'
  ],
  authors: [{ name: 'KSERVICE', url: 'https://kserviceassistencia.com.br' }],
  creator: 'KSERVICE Assistência Técnica',
  openGraph: {
    title: 'KSERVICE Assistência Técnica | SP e Grande SP',
    description:
      'Desde 2021 oferecendo serviços com qualidade, transparência e garantia. Conserto, manutenção, higienização e troca de peças de eletrodomésticos.',
    url: 'https://kserviceassistencia.com.br',
    siteName: 'KSERVICE Assistência Técnica',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'KSERVICE Assistência Técnica',
    description:
      'Especialistas no conserto de eletrodomésticos da linha branca. Atendimento rápido em SP e Grande SP. Ligue ou chame no WhatsApp: (11) 9 1872-5136.',
  },
  metadataBase: new URL('https://kserviceassistencia.com.br'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
