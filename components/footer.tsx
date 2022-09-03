import footerStyles from './footer.module.scss';

import Link from 'next/link';
import { breakPointTablet } from 'styles/breakpoints';
import { gColors } from 'styles/style-constants';
import { ContactGroup } from './contact-group';
import { XImage } from './image';
import { SnackWrappedNewsletterForm } from './forms/newsletter-form';
import { envVars } from 'data/constants';

export function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <style jsx>{`
        p {
          // font-size: 1.1rem;
          color: rgb(51, 51, 51);
        }

        .banner-img {
          height: 2.5rem;
        }

        .footer-bottom-3 {
          display: grid;
          place-items: start;
          grid-template-columns: repeat(1, 1fr);
        }

        .footer-mid {
          display: flex;
          flex-direction: column;
          gap: 1em;
          margin-top: 1em;
        }

        a {
          color: ${gColors.red1};
        }

        .footer-left {
          width: 100%; // For alignment
        }

        @media (min-width: ${breakPointTablet}px) {
          .footer-bottom-3 {
            grid-template-columns: repeat(3, 1fr);
            place-items: start center;
          }
        }
      `}</style>
      <XImage
        className="banner-img"
        src={`${envVars.BASE_PATH}/banner.png`}
        alt="TC-law company banner"
        height={'50px'}
      />

      <hr className="red-horizontal-ruler" />

      <section className="footer-bottom-3" style={{ marginBottom: '1rem' }}>
        <section className="footer-left">
          <ContactGroup />
        </section>

        <section className="footer-mid">
          <Link href="/oblasti-rada">
            <a>Oblasti rada</a>
          </Link>
          <Link href="/novosti">
            <a>Novosti</a>
          </Link>
          <Link href="/nas-tim">
            <a>Naš tim</a>
          </Link>
          <Link href="/karijera">
            <a>Karijera</a>
          </Link>
          <Link href="/kontakt">
            <a>Kontakt</a>
          </Link>
        </section>

        <section className="footer-right">
          <h4 style={{ margin: '1rem 0 0.3rem' }}>Prijavite se na novosti</h4>
          <SnackWrappedNewsletterForm />
        </section>
      </section>

      <section className="footer-bottom-3" style={{ alignItems: 'baseline' }}>
        <div style={{ display: 'flex', gap: '3px' }}>
          <Link href="/politika-privatnosti">
            <a>Politika privatnosti</a>
          </Link>
          <span>|</span>
          <Link href="/uslovi-koriscenja">
            <a>Uslovi korišćenja</a>
          </Link>
        </div>
        <p>@Trifunovic&Co</p>
      </section>
    </footer>
  );
}
