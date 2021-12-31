import { BsGlobe2 } from 'react-icons/bs';

interface WorkArea {
  title: string;
  text: string;
  icon: (props: { size: number }) => JSX.Element;
}

export const workAreas: WorkArea[] = [
  {
    title: 'Korporativno pravo/M&A',
    text: `Savetujemo klijente u pripremnoj fazi odlučivanja o investiciji,
      sastavljamo i pripremamo potrebna`,
    icon: BsGlobe2,
  },
  {
    title: 'Privredno pravo',
    text: `Imamo sveobuhvatno poznavanje međunarodnog i domaćeg ugovornog
    prava, standarda ugovaranja i poslovnih`,
    icon: BsGlobe2,
  },
  {
    title: 'Građenje',
    text: `Pružamo podršku investitorima u razvoju greenfield investicija i
    drugih vidova ulaganja u projekte izgradnje`,
    icon: BsGlobe2,
  },
  {
    title: `Antimonopolsko pravo\nPravo konkurencije`,
    text: `Savetujemo klijente u pitanjima konkurencije u vezi sa spajanjem
    pripajanjem i zajedničkim ulaganjima`,
    icon: BsGlobe2,
  },
  {
    title: `Radno pravo\nBoravišna i radna dozvola`,
    text: `Sastavljamo pravilnike, ugovore, rešenja i druga akta iz oblasti
    radnih odnosa i pružamo pravnu podršku`,
    icon: BsGlobe2,
  },
  {
    title: `Intelektualna svojina\nIndustrija zabave/IT`,
    text: `Pružamo usluge savetovanja i zastupanja međunarodnih i domaćih
    pravnih subjekata i fizičkih lica u stvarima`,
    icon: BsGlobe2,
  },
  {
    title: `Porezi, carine i devizno poslovanje`,
    text: `Pružamo podršku investitorima u razvoju greenfield investicija i
    drugih vidova ulaganja u projekte izgradnje`,
    icon: BsGlobe2,
  },
  {
    title: `Zaštita podataka o ličnosti`,
    text: `Pomažemo klijentima da obradu podataka o ličnosti usklade sa GDPR
    i pravilima koja su na snazi u Republici Srbiji`,
    icon: BsGlobe2,
  },
  // {
  //   title: ``,
  //   text: ``,
  //   icon: BsGlobe2,
  // },
];
