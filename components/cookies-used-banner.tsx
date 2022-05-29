import Link from 'next/link';
import { useEffect, useState } from 'react';
// TODO: Storybook typescript global import paths don't work
// Change ../styles to styles to see that global imports fail.
import { breakPointTablet } from '../styles/breakpoints';
import { gColors } from '../styles/style-constants';
import { RoundBtn } from './round-btn';

const cookiesAcceptedStorageKey = 'cookie_notice_accepted';
const areCookiesAccepted = () =>
  Boolean(localStorage.getItem(cookiesAcceptedStorageKey));

export function CookiesAreUsedBanner() {
  const [cookiesAccepted, setCookiesAccepted] = useState(true);
  useEffect(() => {
    setCookiesAccepted(areCookiesAccepted());
  }, []);

  // TODO: Animations?
  if (cookiesAccepted) {
    return <></>;
  }

  return (
    <footer>
      <style jsx>{`
        footer {
          position: fixed;
          inset: auto 0 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0.95;
          background-color: grey;
          padding: 0.5rem 2rem 0.5rem;
          gap: 0.5rem;
        }

        p {
          color: white;
          text-align: center;
          margin: 0;
        }

        button {
          color: white;
          background-color: ${gColors.red1};
          border: none;
        }

        @media (min-width: ${breakPointTablet}px) {
          footer {
            padding: 0.5rem 5rem 0.5rem;
          }
        }
      `}</style>
      <p>
        Ovaj veb-sajt koristi kolačiće kako bi vam pružio bolje iskustvo
        pretraživanja, obezbedio funkcionalnost društvenih medija i radi analize
        saobraćaja. Više o tome kako koristimo kolačiće, i kako možete
        ograničiti njihovo korišćenje i promeniti podešavanja pročitajte{' '}
        <Link href="/politika-privatnosti">
          <a>ovde</a>
        </Link>
      </p>
      <RoundBtn
        hoverEffects={false}
        translate={false}
        onClick={() => {
          localStorage.setItem(cookiesAcceptedStorageKey, 'true');
          setCookiesAccepted(true);
        }}
      >
        OK
      </RoundBtn>
    </footer>
  );
}
