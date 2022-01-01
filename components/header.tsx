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

          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5em;
        }

        nav {
          font-size: 1.5rem;
          position: fixed;
          padding-top: ${menuOpen ? 1 : 0.5}em;
          ${menuOpen ? 'padding: 1em' : ''};
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

        .submenu {
          background: white;
          padding-left: 2rem;
          ${!sublistOpen ? 'display: none' : ''}
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

          .submenu {
            position: absolute;
            z-index: 1;
            background: white;
            padding: 10px;
            border: 1px solid black;
            box-shadow: 1px 1px;
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
        <div style={{ display: 'relative' }}>
          <NavItem
            closeMenu={closeMenu}
            href="/oblasti-rada"
            toggleSubList={() => {
              setSublistOpen(!sublistOpen);
            }}
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

      <div className="header-right">
        <div
          id="change-language"
          style={{ width: 40, paddingTop: '6px' }}
          onClick={() => {
            alert('Feature not yet supported - Work in progress!');
          }}
        >
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
            margin-left: 10px;
            display: flex;
            align-items: center;
            height: 100%;
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
