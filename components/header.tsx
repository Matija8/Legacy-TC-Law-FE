import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { breakPointTablet } from 'styles/breakpoints';

const liPadding = '7px';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const body = document.getElementsByTagName('BODY')[0];
    if (!body) return;

    body.classList[menuOpen ? 'add' : 'remove']('mobile-nav-open');
  });

  return (
    <header ref={headerRef}>
      <style jsx>{`
        header {
          position: sticky;
          top: 0;
          background: white;

          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5em;
        }

        nav {
          font-size: 1.5rem;
          position: fixed;
          padding-top: ${menuOpen ? 1 : 0.5}em;
          ${menuOpen ? 'padding-left: 1em' : ''};
          gap: 0.5em;
          top: ${headerRef.current?.clientHeight ?? 150}px;
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

        .burger {
          float: right;
          z-index: 2;
        }

        .header-right {
          display: flex;
          gap: 0.7em;
          align-items: center;
        }

        #change-language:hover {
          cursor: pointer;
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
            display: none;
          }
        }
      `}</style>
      <Link href="/">
        <a>
          <img
            src={`${process.env.basePath}/logo.png`}
            height={'80px'}
            alt="Company logo"
          />
        </a>
      </Link>
      <div>
        {/* <h1>Trifunovic & Co</h1>
        <address>
          Kneza Milosa 10, 11000 Beograd, Srbija <br />
          Tel/Fax
        </address> */}
      </div>

      <nav id="main-nav" className="slide-in">
        <NavItem href="/oblasti-rada">Oblasti rada</NavItem>
        <NavItem href="/novosti">Novosti</NavItem>
        <NavItem href="/nas-tim">Naš tim</NavItem>
        <NavItem href="/karijera">Karijera</NavItem>
        <NavItem href="/kontakt">Kontakt</NavItem>
      </nav>

      <div className="header-right">
        <div id="change-language" style={{ width: 40, paddingTop: '6px' }}
        onClick={() => {
          alert('Feature not yet supported - Work in progress!')
        }}>
          <img
            src={`${process.env.basePath}/countries/uk.svg`}
            alt="Change language"
          />
        </div>
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
    <li>
      <style jsx>
        {`
          .navItem {
            padding: ${liPadding};
            display: flex;
          }

          .navItem:hover {
            background: rgba(50, 50, 50, 0.1);
            border-radius: 6px;
          }
        `}
      </style>
      <Link href={href}>
        <a className="navItem">{children}</a>
      </Link>
    </li>
  );
}
