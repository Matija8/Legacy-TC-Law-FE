export interface Employee {
  name: string;
  surname: string;
  email?: string;
  title: string;
  memberPhotoId: string;
  key: string;
}

export const lawyers: Employee[] = [
  {
    name: 'Jasna',
    surname: 'Trifunović',
    email: 'jasna.trifunovic@tclaw.rs',
    title: 'advokat',
    memberPhotoId: 'Jasna',
  },
  {
    name: 'Lana',
    surname: 'Tamindžić',
    title: 'advokat',
    email: 'lana.tamindzic@tclaw.rs',
    memberPhotoId: 'Lana',
  },
  {
    name: 'Katarina',
    surname: 'Savić',
    title: 'advokatski pripravnik',
    memberPhotoId: 'Katarina',
  },
  {
    name: 'Marko',
    surname: 'Ilić',
    title: 'advokatski pripravnik',
    memberPhotoId: 'Marko',
  },
  {
    name: 'Matija',
    surname: 'Test',
    title: 'programer',
    memberPhotoId: 'debug',
    test: true,
  },
]
  .map((x) => ({ ...x, key: `${x.name}-${x.surname}` }))
  .filter((x) => !x.test);
