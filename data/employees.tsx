export interface Employee {
  name: string;
  surname: string;
  email?: string;
  title: string;
  pagePath?: string;
  memberPhotoId: string;
  key: string;
}

export const lawyers: Employee[] = [
  {
    name: 'Jasna',
    surname: 'Trifunović',
    email: 'jasna.trifunovic@tclaw.rs',
    title: 'advokat',
    pagePath: 'jasna-trifunovic',
    memberPhotoId: 'Jasna',
  },
  {
    name: 'Lana',
    surname: 'Tamindžić',
    title: 'advokat',
    email: 'lana.tamindzic@tclaw.rs',
    pagePath: 'lana-tamindzic',
    memberPhotoId: 'Lana',
  },
  {
    name: 'Katarina',
    surname: 'Savić',
    title: 'advokatski pripravnik',
    pagePath: 'katarina-savic',
    memberPhotoId: 'Katarina',
  },
  {
    name: 'Marko',
    surname: 'Ilić',
    title: 'advokatski pripravnik',
    // pagePath: 'marko-ilic', // Test case for no path
    memberPhotoId: 'Marko',
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
  .map((x) => ({ ...x, key: x.pagePath || `${x.name}-${x.surname}` }))
  .filter((x) => !x.test);
