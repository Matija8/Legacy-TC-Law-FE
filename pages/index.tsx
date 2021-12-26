import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import type { NextPage } from 'next';
import { ReactNode } from 'react';
import { BsGlobe2 } from 'react-icons/bs';
import { FaChevronCircleRight } from 'react-icons/fa';
import styles from '../styles/Home.module.scss';

const workElemHeaderIconSize = 35;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SiteHead title="Home page" />
      <Header />
      <main className={styles.main}>
        <section style={{ width: '100%' }}>
          <h2 style={{ fontWeight: 700 }}>OBLASTI RADA</h2>

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

        <section className="work-areas-grid">
          <WorkAreaCard link="https:www.google.com">
            <BsGlobe2 size={workElemHeaderIconSize} />
            <h3>Korporativno pravo/M&A</h3>
            <p>
              Savetujemo klijente u pripremnoj fazi odlučivanja o investiciji,
              sastavljamo i pripremamo potrebna..
            </p>
          </WorkAreaCard>

          <WorkAreaCard link="https:www.google.com">
            <BsGlobe2 size={workElemHeaderIconSize} />
            <h3>Privredno pravo</h3>
            <p>
              Imamo sveobuhvatno poznavanje međunarodnog i domaćeg ugovornog
              prava, standarda ugovaranja i poslovnih..
            </p>
          </WorkAreaCard>

          <WorkAreaCard link="https:www.google.com">
            <BsGlobe2 size={workElemHeaderIconSize} />
            <h3>Građenje</h3>
            <p>
              Pružamo podršku investitorima u razvoju greenfield investicija i
              drugih vidova ulaganja u projekte izgradnje..
            </p>
          </WorkAreaCard>

          <WorkAreaCard link="https:www.google.com">
            <BsGlobe2 size={workElemHeaderIconSize} />
            <h3>
              Antimonopolsko pravo <br />
              Pravo konkurencije
            </h3>
            <p>
              Savetujemo klijente u pitanjima konkurencije u vezi sa spajanjem
              pripajanjem i zajedničkim ulaganjima..
            </p>
          </WorkAreaCard>

          <WorkAreaCard link="https:www.google.com">
            <BsGlobe2 size={workElemHeaderIconSize} />
            <h3>
              Radno pravo <br />
              Boravišna i radna dozvola
            </h3>
            <p>
              Sastavljamo pravilnike, ugovore, rešenja i druga akta iz oblasti
              radnih odnosa i pružamo pravnu podršku..
            </p>
          </WorkAreaCard>

          <WorkAreaCard link="https:www.google.com">
            <BsGlobe2 size={workElemHeaderIconSize} />
            <h3>
              Intelektualna svojina <br />
              Industrija zabave/IT
            </h3>
            <p>
              Pružamo usluge savetovanja i zastupanja međunarodnih i domaćih
              pravnih subjekata i fizičkih lica u stvarima..
            </p>
          </WorkAreaCard>

          <WorkAreaCard link="https:www.google.com">
            <BsGlobe2 size={workElemHeaderIconSize} />
            <h3>Porezi, carine i devizno poslovanje</h3>
            <p>
              Pružamo podršku investitorima u razvoju greenfield investicija i
              drugih vidova ulaganja u projekte izgradnje..
            </p>
          </WorkAreaCard>

          <WorkAreaCard link="https:www.google.com">
            <BsGlobe2 size={workElemHeaderIconSize} />
            <h3>Zaštita podataka o ličnosti</h3>
            <p>
              Pomažemo klijentima da obradu podataka o ličnosti usklade sa GDPR
              i pravilima koja su na snazi u Republici Srbiji..
            </p>
          </WorkAreaCard>
        </section>

        <section>
          <h2>Novosti</h2>
        </section>

        <h2>Naš Tim</h2>

        <h2>Kontakt</h2>

        <h2>Trifunovic & Co</h2>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

function WorkAreaCard({
  link,
  children,
}: {
  link: string; // TODO: Url?
  children: ReactNode;
}): JSX.Element {
  return (
    <div className="work-area-card">
      {children}
      <div className="work-area-bottom">
        <a
          className="work-area-right-arrow"
          href={link}
          style={{ float: 'right' }}
        >
          <FaChevronCircleRight size={30} />
        </a>
      </div>
    </div>
  );
}

function HorizontalRuler(): JSX.Element {
  return <hr style={{ width: '100%' }}></hr>;
}

export default Home;
