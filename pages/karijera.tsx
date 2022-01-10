import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import { NextPage } from 'next';
import styles from 'styles/Home.module.scss';

const careerPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <SiteHead title="Karijera" />
      <Header />
      <main className={styles.main}>
        <h2 className="heading-underlined">Karijera</h2>

        <p>
          Tražimo saradnike iz različitih pravnih disciplina i sa različitim
          iskustvima. Profesionalni i etički standardi se podrazumevaju, a s
          obzirom na naše polje rada, zahtevamo i odlično poznavanje govornog i
          pisanog engleskog jezika. Negujemo timski rad i podržavamo razvoj
          veština komunikacije i sposobnosti za postizanje izvrsnih rezultata
          pod pritiskom.
        </p>

        <p>
          Novi saradnici su dobrodošli u naš tim, bilo da imaju iskustva ili tek
          počinju karijeru, a pod uslovom da imaju želju za poslom ispunjenim
          izazovima, da dobro poznaju pravo, poznaju i ponašaju se u skladu sa
          kodeksom profesionalne etike advokata, kao i da imaju sposobnost da
          rade u različitim pravnim oblastima.
        </p>

        <p>
          Ako sebe vidite u takvoj sredini, budite slobodni da nam pošaljete Vaš
          CV i kratko motivaciono pismo.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default careerPage;
