import Hamburger from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import styles from './header.module.scss';

const liPadding = '0.5em';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerHeight = 150;
  const breakPointTablet = 768;

  useEffect(() => {
    const body = document.getElementsByTagName('BODY')[0];
    if (!body) return;

    body.classList[menuOpen ? 'add' : 'remove']('mobile-nav-open');
  });

  return (
    <header>
      <style jsx>{`
        header {
          height: ${headerHeight}px;
          position: sticky;
          top: 0;
          background: white;

          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        nav {
          font-size: 1.5rem;
          position: fixed;
          top: ${headerHeight}px;
          // top: 0;
          left: 0;
          z-index: 1;
          background: white;
          // border-right: 1px solid black;
          height: 100%;
          ${menuOpen ? '' : 'visibility:hidden'};
          // width: clamp(300px, 25%, 25%);
          width: 100%;
        }

        nav > li {
          padding: ${liPadding};
          display: flex;
        }

        .burger {
          float: right;
          z-index: 2;
        }

        @media (min-width: ${breakPointTablet}px) {
          nav {
            position: static;
            display: flex;
            flex-direction: row;
            visibility: visible;
            height: auto;
          }

          .burger {
            // visibility: hidden;
            display: none;
          }
        }
      `}</style>
      <img src={'/TC-law/logo.png'} alt="Company logo" />
      <div>
        {/* <h1>Trifunovic & Co</h1>
        <address>
          Kneza Milosa 10, 11000 Beograd, Srbija <br />
          Tel/Fax
        </address> */}
      </div>

      <nav id="main-nav" className="slide-in">
        <NavItem href="oblasti-rada">Oblasti rada</NavItem>
        <NavItem href="novosti">Novosti</NavItem>
        <NavItem href="nas-tim">Nas tim</NavItem>
        <NavItem href="karijera">Karijera</NavItem>
        <NavItem href="kontakt">Kontakt</NavItem>
      </nav>

      <div className="right">
        <span>Change language (TODO)</span>
        <div className="burger">
          <Hamburger
            toggled={menuOpen}
            onToggle={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            Menu
          </Hamburger>
        </div>
        {/* <a href="mailto:office@tclaw.co.rs">office@tclaw.co.rs</a> */}
      </div>
    </header>
  );
}

function NavItem({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li
      style={{
        padding: liPadding,
      }}
    >
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
}
