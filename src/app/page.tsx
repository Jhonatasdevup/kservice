
import Header from "@/components/Header";
import styles from "./page.module.css";
import DevicesServiced from "@/components/DevicesServiced";
import Service from "@/components/Service";
import CustomerReview from "@/components/CustomerReview";
import ContactForm from "@/components/ContactForm";
import OurService from "@/components/OurService";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButtom";
import CookieConsent from "@/components/CookieConsent";
import About from "@/components/About";

export default function Home() {
  return (
    <div className={styles.page} id="inicio">
      <Header/>
      <picture>
        <source media="(min-width: 1024px)" srcSet="/bannerHome.png" />
        <source media="(min-width: 650px)" srcSet="/bannerHome.png"  />
        <img src="/kserviceCell.png" alt="kservice" className={styles.bannerIMG}/>
      </picture>
      <div id='sobre'></div>
      <About/>
      <Service/>
      <DevicesServiced/>
      <OurService/>
      <CustomerReview/>
      <ContactForm/>
      <Footer/>
      <WhatsAppButton/>
      <CookieConsent/>
    </div>
  );
}
