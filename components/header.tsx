import { workAreas } from 'data/oblasti-rada';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { breakPointTablet } from 'styles/breakpoints';
import { gColors } from 'styles/style-constants';
import { FirmAddress } from './address';
import { XImage } from './image';
import { RoundBtn } from './round-btn';

const liPadding = '10px';

const breakpoint1 = breakPointTablet; // TODO

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sublistOpen, setSublistOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const body = document.getElementsByTagName('BODY')[0];
    if (!body) return;

    body.classList[menuOpen ? 'add' : 'remove']('mobile-nav-open');
  });

  const headerHeight = headerRef.current?.clientHeight ?? 150;
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
          top: ${headerHeight}px;
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

        @media (min-width: ${breakPointTablet}px) {
          .header-main {
            align-items: stretch;
          }

          .header-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .submenu-holding-li:hover > .submenu {
            display: block;
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
            overflow-y: auto;
            z-index: 1;
            background: white;
            padding: 10px;
            border: 1px solid black;
            box-shadow: 1px 1px;
            font-size: 0.5em;
            text-transform: none;
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
            style={{ maxHeight: '95px', height: '10vw', minHeight: '60px' }}
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
            <FirmAddress />
          </address>
        </div>

        <hr className="red-horizontal-ruler hide-mobile" />

        <div className="header-bottom">
          <nav>
            <div className="submenu-holding-li">
              <NavItem
                closeMenu={closeMenu}
                href="/oblasti-rada"
                toggleSubList={() => setSublistOpen(!sublistOpen)}
                className="UPPER"
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

            <NavItem closeMenu={closeMenu} href="/novosti" className="UPPER">
              Novosti
            </NavItem>
            <NavItem closeMenu={closeMenu} href="/nas-tim" className="UPPER">
              Naš tim
            </NavItem>
            <NavItem closeMenu={closeMenu} href="/karijera" className="UPPER">
              Karijera
            </NavItem>
            <NavItem closeMenu={closeMenu} href="/kontakt" className="UPPER">
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
                <a href="mailto:office@tclaw.co.rs" style={{ color: 'white' }}>
                  office@tclaw.co.rs
                </a>
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
            margin: 0;
          }

          li > a {
            width: max-content;
          }

          .navItem {
            color: rgb(50, 50, 50);
            padding: ${liPadding};
            display: flex;
            justify-content: space-between;
            flex-grow: 1;
            ${isActivePage ? `color: ${gColors.red1}` : ''};
            // font-weight: 300;
            // font-size: 1.4rem;
          }

          .UPPER {
            text-transform: uppercase;
          }

          .navItem:hover {
            color: black;
            background: rgba(50, 50, 50, 0.04);
            border-radius: 16px;
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
              flex-grow: 1;
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
