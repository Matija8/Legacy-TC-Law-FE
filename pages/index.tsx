import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import {
  WorkAreaCard,
  workElemHeaderIconSize,
} from 'components/work-area-card';
import { workAreas } from 'data/oblasti-rada';
import type { NextPage } from 'next';
import styles from 'styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SiteHead title="Home page" />
      <Header />
      <main className={styles.main}>
        <section style={{ width: '100%', marginBottom: '3rem' }}>
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
          {workAreas.map((workArea) => (
            <WorkAreaCard key={workArea.title} link="https:www.google.com">
              {workArea.icon({ size: workElemHeaderIconSize })}
              <h3>
                {workArea.title.split('\n').map((titleLine) => (
                  <>
                    {titleLine}
                    <br />
                  </>
                ))}
              </h3>
              <p>{workArea.text}..</p>
            </WorkAreaCard>
          ))}
        </section>

        <section>
          <h2>Novosti</h2>
        </section>

        <h2>Naš Tim</h2>

        <h2>Kontakt</h2>

        <h2>Trifunovic & Co</h2>
      </main>
      <Footer />
    </div>
  );
};

function HorizontalRuler(): JSX.Element {
  return <hr style={{ width: '100%' }}></hr>;
}

export default Home;
