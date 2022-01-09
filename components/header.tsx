import { workAreas } from 'data/oblasti-rada';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { breakPointTablet } from 'styles/breakpoints';
import { gColors } from 'styles/style-constants';

const liPadding = '7px';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sublistOpen, setSublistOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const body = document.getElementsByTagName('BODY')[0];
    if (!body) return;

    body.classList[menuOpen ? 'add' : 'remove']('mobile-nav-open');
  });

  const closeMenu = () => setMenuOpen(false);

  return (
    <header ref={headerRef}>
      <style jsx>{`
        header {
          position: sticky;
          top: 0;
          background: white;
          padding: 1rem 0;

          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 3rem;
        }

        .header-main {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          width: 100%;
        }

        nav {
          // TODO: font-size media query
          font-size: 1.3rem;
          position: fixed;
          ${menuOpen ? 'padding: 1em' : ''};
          gap: 0.5em;
          top: ${headerRef.current?.clientHeight ?? 150}px;
          left: 0;
          z-index: 1;
          background: white;
          // border-right: 1px solid black;
          height: 100%;
          ${menuOpen ? '' : 'visibility:hidden'};
          // width: clamp(300px, 25%, 25%);
          width: 100%;
        }

        .submenu {
          background: white;
          padding-left: 2rem;
          ${!sublistOpen ? 'display: none' : ''}
        }

        .header-top {
          display: none;
        }

        .header-bottom {
          display: flex;
          align-items: center;
          gap: 0.7em;
          padding-top: 0.5em;
        }

        .header-bottom-right {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.7em;
        }

        .hide-mobile {
          display: none;
        }

        @media (min-width: ${breakPointTablet}px) {
          .header-main {
            align-items: stretch;
          }

          .header-top {
            display: flex;
            justify-content: space-between;
          }

          .mail-btn {
            background-color: ${gColors.red1};
            padding: 15px 25px;
            font-size: 1em;
            color: white;
            border-radius: 30px;
          }

          nav {
            position: static;
            display: flex;
            flex-direction: row;
            visibility: visible;
            height: auto;
          }

          .submenu {
            position: absolute;
            z-index: 1;
            background: white;
            padding: 10px;
            border: 1px solid black;
            box-shadow: 1px 1px;
          }

          .hide-mobile {
            display: block;
          }

          .hide-desktop {
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

      <div className="header-main">
        <div className="header-top">
          <h1>Trifunovic & Co</h1>
          <address>
            <p>Adresa: Kneza Miloša 10, 11000 Beograd, Srbija</p>
            <p>Tel/Fax:(+381 11) 334-55-66;334-52-52; 334-55-44</p>
          </address>
        </div>

        <hr className="red-horizontal-ruler hide-mobile" />

        <div className="header-bottom">
          <nav>
            <div style={{ display: 'relative' }}>
              <NavItem
                closeMenu={closeMenu}
                href="/oblasti-rada"
                toggleSubList={() => setSublistOpen(!sublistOpen)}
              >
                Oblasti rada
              </NavItem>
              <div className="submenu">
                {workAreas.map(({ title }) => (
                  <NavItem
                    className="normal-text-size"
                    key={title}
                    closeMenu={closeMenu}
                    href="#"
                  >
                    {title}
                  </NavItem>
                ))}
              </div>
            </div>

            <NavItem closeMenu={closeMenu} href="/novosti">
              Novosti
            </NavItem>
            <NavItem closeMenu={closeMenu} href="/nas-tim">
              Naš tim
            </NavItem>
            <NavItem closeMenu={closeMenu} href="/karijera">
              Karijera
            </NavItem>
            <NavItem closeMenu={closeMenu} href="/kontakt">
              Kontakt
            </NavItem>
          </nav>

          <div className="header-bottom-right">
            <ChangeLanguage />
            <div className="hide-desktop">
              <Hamburger
                toggled={menuOpen}
                onToggle={() => {
                  setMenuOpen(!menuOpen);
                }}
              >
                Menu
              </Hamburger>
            </div>
            <div className="mail-btn hide-mobile">
              <a href="mailto:office@tclaw.co.rs">office@tclaw.co.rs</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavItem({
  href,
  children,
  closeMenu,
  toggleSubList,
  className = '',
}: {
  href: string;
  children: ReactNode;
  closeMenu: () => void;
  toggleSubList?: () => void;
  className?: string;
}) {
  const router = useRouter();
  const isActivePage = router.pathname === href;
  return (
    <li className={className}>
      <style jsx>
        {`
          li {
            display: flex;
          }

          .navItem {
            padding: ${liPadding};
            display: flex;
            justify-content: space-between;
            flex-grow: 1;
            ${isActivePage ? `color: ${gColors.red1}` : ''}
          }

          .navItem:hover {
            background: rgba(50, 50, 50, 0.1);
            border-radius: 6px;
          }

          .submenu-toggle {
            color: black;
            margin-left: 7px;
            display: flex;
            align-items: center;
            height: 100%;
            padding-top: 2px;
          }

          .normal-text-size {
            font-size: 1rem;
          }

          @media (min-width: ${breakPointTablet}px) {
            .navItem {
              flex-grow: 0;
            }
          }
        `}
      </style>
      <Link href={href}>
        <a
          className="navItem"
          onClick={() => {
            if (isActivePage) {
              closeMenu();
            }
          }}
        >
          {children}
          {toggleSubList && (
            <div className="submenu-toggle">
              <BsChevronDown
                size={15}
                onClick={(ev) => {
                  ev.stopPropagation();
                  ev.preventDefault();
                  toggleSubList();
                }}
              />
            </div>
          )}
        </a>
      </Link>
    </li>
  );
}

function ChangeLanguage() {
  return (
    <div
      style={{ width: 40, paddingTop: '6px', cursor: 'pointer' }}
      onClick={() => {
        alert('Feature not yet supported - Work in progress!');
      }}
    >
      <img
        src={`${process.env.basePath}/countries/uk.svg`}
        alt="Change language"
      />
    </div>
  );
}
