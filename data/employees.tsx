export interface Employee {
  name: string;
  surname: string;
  email?: string;
  title: string;
  longTitle?: string;
  pagePath?: string;
  memberPhotoId: string;
  key: string;
  workAreas?: string[];
  education?: string[];
  languages: string;
  test?: boolean;
}

export const lawyers: Employee[] = [
  {
    name: 'Jasna',
    surname: 'Trifunović',
    email: 'jasna.trifunovic@tclaw.rs',
    title: 'advokat',
    longTitle: 'Advokat i ovlašćeni zastupnik za pravo intelektualne svojine',
    pagePath: 'jasna-trifunovic',
    memberPhotoId: 'Jasna',
    workAreas: [
      'Korporativno pravo & korporativno upravljanje, M&A, strane investicije i podsticajna sredstva, privredno pravo, građenje, pravo intelektualne svojine i medijsko pravo, radno pravo, neprofitne organizacije',
      'Učestvovala je u radnim grupama na izradi zakona koji regulišu osnivanje i rad nevladinih organizacija i njihov poreski tretman, kao i u telima za izmene propisa u oblastima državne uprave i ljudskih prava.',
    ],
    education: [
      'Pravni fakultet Univerziteta u Beogradu.',
      'Državni ispit za ovlašćenog zastupnika za prava intelektualne svojine.',
      'Advokat je od 1998.',
      'Ovlašćeni zastupnik za prava intelektualne svojine pri Zavodu za intelektualnu svojinu od 2004.',
    ],
  },
  {
    name: 'Lana',
    surname: 'Tamindžić',
    title: 'advokat',
    email: 'lana.tamindzic@tclaw.rs',
    pagePath: 'lana-tamindzic',
    memberPhotoId: 'Lana',
    workAreas: [
      'Kompanijsko, privredno, antimonopolsko i pravo konkurencije, usaglašenost sa propisima, zaštita životne sredine, radno i upravno pravo, neprofitne organizacije',
    ],
    education: [
      'Pravni fakultet Univerziteta u Beogradu.',
      'Advokat je od 2014.',
    ],
  },
  {
    name: 'Katarina',
    surname: 'Savić',
    title: 'advokatski pripravnik',
    pagePath: 'katarina-savic',
    memberPhotoId: 'Katarina',
    education: ['Pravni fakultet Univerziteta u Beogradu.'],
  },
  {
    name: 'Marko',
    surname: 'Ilić',
    title: 'advokatski pripravnik',
    // pagePath: 'marko-ilic', // Test case for no path
    memberPhotoId: 'Marko',
    education: ['Pravni fakultet Univerziteta u Beogradu.'],
  },
  {
    name: 'Matija',
    surname: 'Test',
    title: 'programer',
    pagePath: 'matija-test',
    memberPhotoId: 'debug',
    test: true,
  },
]
  .map((x) => ({
    ...x,
    key: x.pagePath || `${x.name}-${x.surname}`,
    languages: (x as any).languages || 'engleski i srpski',
  }))
  .filter((x) => !x.test);
