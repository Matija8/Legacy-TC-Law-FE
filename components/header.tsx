import Hamburger from 'hamburger-react';
import Image from 'next/image';
import logo from 'public/logo.png';
import { useEffect, useState } from 'react';
import styles from './header.module.scss';

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
          padding: 0.5em;
          display: flex;
        }

        .burger {
          float: right;
          z-index: 2;
        }
      `}</style>
      <Image src={logo} alt="Company logo" />
      <div>
        {/* <h1>Trifunovic & Co</h1>
        <address>
          Kneza Milosa 10, 11000 Beograd, Srbija <br />
          Tel/Fax
        </address> */}
      </div>

      <nav id="main-nav" className="slide-in">
        <li>What we do</li>
        <li>News</li>
        <li>Our Team</li>
        <li>Career</li>
        <li>Contact</li>
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
