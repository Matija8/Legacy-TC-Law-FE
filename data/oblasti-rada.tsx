import { BsGlobe2 } from 'react-icons/bs';

interface WorkArea {
  id: string;
  title: string;
  text: string;
  icon: (props: { size: number }) => JSX.Element;
}

export const workAreas: WorkArea[] = [
  {
    id: 'Korporativno-pravo-M&A',
    title: 'Korporativno pravo/M&A',
    text: `
    Savetujemo klijente u pripremnoj fazi odlučivanja o investiciji, sastavljamo i pripremamo potrebna dokumenta za osnivanje privrednih društava i ogranaka stranih privrednih društava, i pružamo usluge zastupanja u postupku njihove registracije i započinjanja poslovanja. Posebnu važnost pridajemo uspostavljanju mehanizama upravljanja koji najbolje odgovaraju ekonomskom i poslovnom kontekstu u kojem posluju, i efikasnog odgovora na probleme izazvane organizacijskom strukturom poslovanja i promenom regulatornog okvira.

    Pružamo podršku klijentima u transakcijama vezanim za statusne promene privrednih društava, pravno dubinsko ispitivanje, pratimo ih u pregovorima i zaključenju ugovora, obezbeđenju njihovih investicija i drugim poslovima u vezi sa njihovim poslovanjem. Pomažemo u istraživanju alternativnih načina za odgovor na različite poslovne izazove i probleme i izboru onog koji najbolje odgovara njihovom poslovanju.

    Posebnu pažnju posvećujemo vrednosti poslovnih informacija, podataka i tehnologija naših klijenata, pružamo im savete i sastavljamo dokumenta za zaštitu podataka i poslovnih tajni naših klijenata od nelojalne konkurencije.`,
    icon: BsGlobe2,
  },
  {
    id: 'Privredno-pravo',
    title: 'Privredno pravo',
    text: `Imamo sveobuhvatno poznavanje međunarodnog i domaćeg ugovornog
    prava, standarda ugovaranja i poslovnih`,
    icon: BsGlobe2,
  },
  {
    id: 'Gradjenje',
    title: 'Građenje',
    text: `Pružamo podršku investitorima u razvoju greenfield investicija i
    drugih vidova ulaganja u projekte izgradnje`,
    icon: BsGlobe2,
  },
  {
    id: `Antimonopolsko-pravo-Pravo-konkurencije`,
    title: `Antimonopolsko pravo\nPravo konkurencije`,
    text: `Savetujemo klijente u pitanjima konkurencije u vezi sa spajanjem
    pripajanjem i zajedničkim ulaganjima`,
    icon: BsGlobe2,
  },
  {
    id: `Radno pravo-Boravisna-i-radna dozvola`,
    title: `Radno pravo\nBoravišna i radna dozvola`,
    text: `Sastavljamo pravilnike, ugovore, rešenja i druga akta iz oblasti
    radnih odnosa i pružamo pravnu podršku`,
    icon: BsGlobe2,
  },
  {
    id: `Intelektualna-svojina-Industrija-zabave-IT`,
    title: `Intelektualna svojina\nIndustrija zabave/IT`,
    text: `Pružamo usluge savetovanja i zastupanja međunarodnih i domaćih
    pravnih subjekata i fizičkih lica u stvarima`,
    icon: BsGlobe2,
  },
  {
    id: `Porezi-carine-i-devizno-poslovanje`,
    title: `Porezi, carine i devizno poslovanje`,
    text: `Poresko savetovanje koje pružamo našim klijentima podrazumeva celokupan spektar usluga planiranja i konsaltinga`,
    icon: BsGlobe2,
  },
  {
    id: `Zastita-podataka-o-licnosti`,
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
