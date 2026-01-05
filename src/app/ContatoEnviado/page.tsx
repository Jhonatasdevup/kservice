import styles from './styles.module.css';
import Link from 'next/link';

export default function Success() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Mensagem enviada com sucesso!</h1>
        <p className={styles.text}>Obrigado por entrar em contato com a KSERVICE. Em breve responderemos sua mensagem.</p>
        <Link href="/" passHref>
          <button className={styles.button}>Click Aqui Para Voltar para a página inicial</button>
        </Link>
      </div>
    </div>
  );
}
