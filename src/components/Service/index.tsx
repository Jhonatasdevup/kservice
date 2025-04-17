import styles from './styles.module.css';
import BuildIcon from '@mui/icons-material/Build';
import VerifiedIcon from '@mui/icons-material/Verified';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GppGoodIcon from '@mui/icons-material/GppGood';

export default function Servicos() {
  const data = [
    { icon: <BuildIcon fontSize='large'/>, text: 'Conserto de Eletrodomésticos' },
    { icon: <EngineeringIcon fontSize='large'/>, text: 'Reparo Especializado' },
    { icon: <GppGoodIcon fontSize='large'/>, text: 'Manutenção Preventiva' },
    { icon: <CleaningServicesIcon fontSize='large'/>, text: 'Higienização' },
    { icon: <VerifiedIcon fontSize='large'/>, text: 'Troca de Motor com', strongText: '1 ano de garantia' },
    { icon: <ReceiptIcon fontSize='large'/>, text: 'Emissão de', strongText: 'Nota Fiscal' },
    { icon: <AssignmentIcon fontSize='large' />, text: 'Emissão de', strongText: 'Laudo para ENEL' }
  ];

  return (
    <section className={styles.container} >
      <h2 className={styles.title}>Serviços da KSERVICE</h2>
      <div className={styles.grid}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <p >{item.text} {item.strongText && <strong>{item.strongText}</strong>}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
