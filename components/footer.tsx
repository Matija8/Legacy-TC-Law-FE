import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs';
import { breakPointTablet } from 'styles/breakpoints';
import { gColors } from 'styles/style-constants';
import { FirmAddress } from './address';
import { XImage } from './image';
import { MailIcon } from './mailIcon';

const iconSize = 28;

export function Footer() {
  return (
    <footer>
      <style jsx>{`
        footer {
          padding: 0;
          margin-bottom: 1rem;
        }

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

        .icon-flex-row {
          display: flex;
          gap: 0.5em;
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
        src={`${process.env.basePath}/banner.png`}
        alt="TC-law company banner"
        height={'50px'}
      />

      <hr className="red-horizontal-ruler" />

      <section className="footer-bottom-3">
        <section className="footer-left">
          <h4>Advokatska kancelarija</h4>

          <address>
            <FirmAddress />
          </address>

          <p>
            E-mail: <a href="mailto:office@tclaw.rs">office@tclaw.rs</a>
          </p>

          <div className="icon-flex-row">
            <a href="https://www.linkedin.com/company/tc-law">
              <BsLinkedin size={iconSize} color={gColors.red1} />
            </a>
            <a href="mailto:office@tclaw.rs">
              <MailIcon size={iconSize} />
            </a>
          </div>
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
          <p>Prijavite se na novosti</p>
        </section>
      </section>
    </footer>
  );
}
