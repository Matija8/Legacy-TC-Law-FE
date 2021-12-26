import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import { ImMail4 } from 'react-icons/im';
import { breakPointTablet } from 'styles/breakpoints';
import { gColors } from 'styles/style-constants';

const ourTeamPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <style jsx>{`
        .team-photos {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          row-gap: 50px;
          place-items: center;
        }

        @media (min-width: ${breakPointTablet}px) {
          .team-photos {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
      <SiteHead title="Naš tim" />
      <Header />
      <main className={styles.main}>
        <section style={{ marginBottom: '50px' }}>
          <h2>Naš tim</h2>

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
          <TeamMember
            name="Jasna"
            surname="Trifunović"
            email="jasna.trifunovic@tclaw.rs"
            title="advokat"
            memberPhotoId="Jasna"
          />
          <TeamMember
            name="Lana"
            surname="Tamindžić"
            title="advokat"
            email="lana.tamindzic@tclaw.rs"
            memberPhotoId="Lana"
          />
          <TeamMember
            name="Katarina"
            surname="Savić"
            title="advokatski pripravnik"
            memberPhotoId="Katarina"
          />
          <TeamMember
            name="Marko"
            surname="Ilić"
            title="advokatski pripravnik"
            memberPhotoId="Marko"
          />
        </section>
      </main>
    </div>
  );
};

function TeamMember({
  name,
  surname,
  title,
  memberPhotoId,
  email,
}: {
  name: string;
  surname: string;
  title: string;
  memberPhotoId: string;
  email?: string;
}) {
  return (
    <article>
      <style jsx>
        {`
          article {
            display: flex;
            flex-direction: column;
            width: 300px;
            align-items: center;
            gap: 1em;
          }

          img {
            object-fit: contain;
          }

          .member-details1 {
            display: flex;
            align-items: center;
            gap: 0.5em;
          }

          p {
            margin: 0;
          }
        `}
      </style>
      <img
        src={`${process.env.basePath}/team/${memberPhotoId}.jpg`}
        alt={`${name} ${surname} ${title} photo`}
      />

      <div className="member-details1">
        <p style={{ fontSize: 16 }}>
          {name} {surname}
        </p>
        {email && (
          <a href={`mailto:${email}`}>
            <ImMail4 size={30} color={gColors.red1} />
          </a>
        )}
      </div>
      <p style={{ margin: -10 }}>{title}</p>
    </article>
  );
}

export default ourTeamPage;
