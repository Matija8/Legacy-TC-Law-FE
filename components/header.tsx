import { workAreas } from 'data/oblasti-rada';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { breakPointTablet } from 'styles/breakpoints';
import { gColors } from 'styles/style-constants';
import { XImage } from './image';
import { RoundBtn } from './round-btn';

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
          padding: 2rem 0 1rem;

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
          ${!sublistOpen ? 'display: none' : ''};
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

        address {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        address > p,
        address > a {
          color: grey;
        }

        @media (min-width: ${breakPointTablet}px) {
          .header-main {
            align-items: stretch;
          }

          .header-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          nav {
            position: static;
            display: flex;
            flex-direction: row;
            visibility: visible;
            height: auto;
          }

          .header-bottom-right {
            gap: 1.7em;
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
          <XImage
            src={`${process.env.basePath}/logo.png`}
            height={'105px'}
            alt="Company logo"
          />
        </a>
      </Link>

      <div className="header-main">
        <div className="header-top">
          <Link href="/">
            <a>
              <XImage
                src={`${process.env.basePath}/banner.png`}
                height={'50px'}
                alt="Company banner"
              />
            </a>
          </Link>
          <address>
            <Link href="https://www.google.com/maps/place/Trifunovic%26Co+Law+Office/@44.8087014,20.4636747,19z/data=!4m5!3m4!1s0x475a7aa8ab86039f:0x184d5a50bfafe45d!8m2!3d44.8086604!4d20.4636218">
              <a>Kneza Miloša 10, 11000 Beograd, Srbija</a>
            </Link>
            <p>Tel/Fax: (+381 11) 334-55-66;334-52-52; 334-55-44</p>
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
                {workAreas.map(({ title, id }) => (
                  <NavItem
                    className="normal-text-size"
                    key={title}
                    closeMenu={closeMenu}
                    href={`/oblasti-rada/${id}`}
                  >
                    <span className={'pre-wrap'}>{title} </span>
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
            <div className="hide-mobile">
              <RoundBtn>
                <a href="mailto:office@tclaw.co.rs">office@tclaw.co.rs</a>
              </RoundBtn>
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
  const isActivePage = router.asPath === href;
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
            ${isActivePage ? `color: ${gColors.red1};` : ''}
            // font-weight: 300;
            // font-size: 1.4rem
            text-transform: uppercase;
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
      <XImage
        src={`${process.env.basePath}/countries/uk.svg`}
        alt="Change language"
      />
    </div>
  );
}
