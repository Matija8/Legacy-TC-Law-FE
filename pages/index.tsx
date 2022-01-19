import { EmployeeCarousel } from 'components/carousel';
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import { WorkAreaGrid } from 'components/work-area-grid';
import type { NextPage } from 'next';
import styles from 'styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SiteHead title="Home page" />
      <Header />
      <main className={styles.main}>
        <section
          id="oblasti-rada"
          style={{ width: '100%', marginBottom: '3rem' }}
        >
          <h2 className="heading-underlined">Oblasti Rada</h2>

          <p>
            Od 1998. pružamo podršku internacionalnim i domaćim klijentima iz
            različitih privrednih oblasti u osnivanju, izgradnji i razvoju
            njihovih investicija u Srbiji. Negovanjem individualnog pristupa, s
            klijentom gradimo odnos uzajamnog poverenja i saradnje usmerene na
            rezultate. Važno nam je da razumemo poslovnu filozofiju, ciljeve i
            interese klijenta kako bismo mu pružili personalizovanu pravnu
            uslugu koja odgovara njegovim potrebama. Znamo da su stručnost,
            fleksibilnost i kreativnost nužni za prevazilaženje izazova u
            dinamičnom poslovnom okruženju.
          </p>

          <p>
            Zbog toga nam je stalo da klijentu pružimo profesionalne,
            fokusirane, pragmatične i pouzdane pravne usluge i savete koji će mu
            pomoći da se spremno i odlučno nosi sa poslovnim izazovima u
            kompleksnom privrednom ambijentu.
          </p>

          <p>
            Reputaciju pouzdanog, stručnog i uspešnog pravnog savetnika stekli
            smo znanjem, iskustvom, savesnošću i visokim standardima. Verujemo
            da se naš uspeh ogleda u rezultatima naših klijenata.
          </p>
        </section>

        <WorkAreaGrid />

        <section id="novosti">
          <h2 className="heading-underlined">Novosti</h2>
        </section>

        <section id="nas-tim">
          <h2 className="heading-underlined">Naš Tim</h2>
          <EmployeeCarousel />
        </section>

        <section id="kontakt">
          <h2 className="heading-underlined">Kontakt</h2>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
