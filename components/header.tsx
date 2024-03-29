import classNames from 'classnames';
import { envVars, gLinks, gTextConstants } from 'data/constants';
import { workAreas } from 'data/oblasti-rada';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { breakPointTablet } from 'styles/breakpoints';
import { gColors } from 'styles/style-constants';
import { FirmAddress } from './address';
import styles from './header.module.scss';
import { XImage } from './image';
import { RoundBtn } from './round-btn';

const liPadding = '10px';

export function Header() {
  // TODO: Menu open hook
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const body = document.getElementsByTagName('BODY')[0];
    if (!body) return;

    body.classList[menuOpen ? 'add' : 'remove']('mobile-nav-open');
  });

  const headerHeight = headerRef.current?.clientHeight ?? 150;
  const closeMenu = () => setMenuOpen(false);

  return (
    <header ref={headerRef} className={styles.header}>
      <Link href="/">
        <a>
          <XImage
            // TODO: Align in mobile layout
            // className={styles['hide-narrow-desktop']}
            src={`${envVars.BASE_PATH}/logo.png`}
            style={{
              maxHeight: '95px',
              height: '10vw',
              minHeight: '60px',
              paddingRight: '3rem', // Use padding, gap stays even when display is none!
            }}
            alt="Company logo"
          />
        </a>
      </Link>

      <div className={styles['header-main']}>
        <div className={styles['header-top']}>
          <Link href="/">
            <a>
              <XImage
                src={`${envVars.BASE_PATH}/banner.png`}
                height={'50px'}
                alt="Company banner"
              />
            </a>
          </Link>
          <FirmAddress
            className={`${styles['hide-narrow-desktop']} ${styles['header-top-address']}`}
          />
        </div>

        <hr className={`red-horizontal-ruler ${styles['hide-mobile']}`} />

        <div className={styles['header-bottom']}>
          <nav
            className={classNames({
              [styles['header-nav']]: true,
              [styles['header-nav-closed']]: !menuOpen, // TODO
            })}
            style={{ top: headerHeight }}
          >
            <WorkAreasMenu closeMainMenu={closeMenu} />

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

          <div className={styles['header-bottom-right']}>
            {/* TODO: i18n */}
            {/* <ChangeLanguage /> */}
            <div className={styles['hide-desktop']}>
              <Hamburger
                label="menu"
                toggled={menuOpen}
                onToggle={() => {
                  setMenuOpen(!menuOpen);
                }}
              />
            </div>
            <div className={styles['hide-narrow-desktop']}>
              <RoundBtn>
                <a href={gLinks.email} style={{ color: 'white' }}>
                  {gTextConstants.officeEmail}
                </a>
              </RoundBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function WorkAreasMenu({ closeMainMenu }: { closeMainMenu: () => void }) {
  const [sublistOpen, setSublistOpen] = useState(false);
  return (
    <div className={styles['submenu-holding-li']}>
      <NavItem
        closeMenu={closeMainMenu}
        href="/oblasti-rada"
        toggleSubList={() => setSublistOpen(!sublistOpen)}
        className="UPPER"
      >
        Oblasti rada
      </NavItem>
      <ul
        className={classNames(styles.submenu, {
          [styles['submenu-sub-list-closed']]: !sublistOpen,
        })}
      >
        {workAreas.map(({ title, id }) => (
          <NavItem
            className="normal-text-size"
            key={title}
            closeMenu={closeMainMenu}
            href={`/oblasti-rada/${id}`}
          >
            <span className={'pre-wrap'}>{title} </span>
          </NavItem>
        ))}
      </ul>
    </div>
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
              // TODO: Hook for this?
              closeMenu();
            }
          }}
        >
          {children}
          {toggleSubList && (
            <div
              className={`${styles['submenu-toggle']} ${styles['hide-desktop']}`}
              onClick={(ev) => {
                ev.stopPropagation();
                ev.preventDefault();
                toggleSubList();
              }}
            >
              <BsChevronDown size={15} />
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
        src={`${envVars.BASE_PATH}/countries/uk.svg`}
        alt="Change language"
      />
    </div>
  );
}
