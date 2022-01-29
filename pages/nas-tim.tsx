import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { Lawyer } from 'components/lawyer';
import { SiteHead } from 'components/site-head';
import { lawyers } from 'data/employees';
import { NextPage } from 'next';
import styles from 'styles/Home.module.scss';

const ourTeamPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <style jsx>{`
        .team-photos {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          row-gap: 3rem;
          column-gap: 4%;
          place-items: start center;
        }
      `}</style>
      <SiteHead title="Naš tim" />
      <Header />
      <main className={styles.main}>
        <section style={{ marginBottom: '50px' }}>
          <h2 className="heading-underlined">Naš tim</h2>

          <p>
            Sa preko dve i po decenije iskustva u advokaturi i negovanjem
            individualnog pristupa svakom klijentu, danas imamo zadovoljstvo da
            svoj uspeh merimo uspešnim rezultatima naših klijenata.
          </p>

          <p>
            Posebno nam je važno da shvatimo vašu poslovnu filozofiju, ciljeve i
            interese kako bismo vam pružili personalizovanu pravnu uslugu koja
            odgovara vašim potrebama. Zato smo fokusirani na vaše ciljeve i
            potrebe kako bismo vam pružili pragmatične, pouzdane i
            visokoprofesionalne pravne usluge.
          </p>

          <p>
            Uz visoke profesionalne standarde, fleksibilnost i kreativnost cilj
            nam je da vam damo pouzdano, efektivno i pravovremeno rešenje koje
            će vam omogućiti da bezbolno prevaziđete izazove u dinamičnom i
            kompleksnom privrednom ambijentu i postignete maksimalne rezultate
            uz minimalne izdatke. Stalo nam je da sa vama izgradimo poverenje i
            dugoročnu saradnju podjednako kao i do naše reputacije.
          </p>
        </section>

        <section className="team-photos">
          {lawyers.map((employee) => (
            <Lawyer {...employee} key={employee.key} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ourTeamPage;
