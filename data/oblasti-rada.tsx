import { BsGlobe2 } from 'react-icons/bs';
import { AiOutlineRise } from 'react-icons/ai';
import { RiBuildingLine } from 'react-icons/ri';
import {
  MdAccountBalance,
  MdCallSplit,
  MdEuro,
  MdLightbulbOutline,
  MdNaturePeople,
  MdPeople,
} from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import { VscOrganization } from 'react-icons/vsc';

// TODO: Header Nav from workAreas!?

export type WorkDomainId =
  | 'Korporativno-pravo-M&A'
  | 'Privredno-pravo'
  | 'Gradjenje'
  | 'Antimonopolsko-pravo-Pravo-konkurencije'
  | 'Radno-pravo-Boravisna-i-radna-dozvola'
  | 'Intelektualna-svojina-Industrija-zabave-IT'
  | 'Porezi-carine-i-devizno-poslovanje'
  | 'Zastita-podataka-o-licnosti'
  | 'resavanje-sporova'
  | 'zastita-zivotne-sredine'
  | 'neprofitne-organizacije'
  | 'usluge-fizickim-licima';

export interface WorkDomain {
  id: WorkDomainId;
  title: string;
  text: string;
  icon: (props: { size: number }) => JSX.Element;
}

// TODO: Rename to Domain
export const workAreas: WorkDomain[] = [
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
    text: `
    Imamo sveobuhvatno poznavanje međunarodnog i domaćeg ugovornog prava, standarda ugovaranja i poslovnih uzansi u većini privrednih sektora. Pružamo savete našim klijentima, radimo analize i dajemo pravna mišljenja, pratimo ih u pregovorima, sastavljamo ugovore, opšte uslove poslovanja i drugu poslovnu dokumentaciju i brinemo o usaglašenosti poslovanja klijenata sa domaćim propisima.

    Sastavljamo ugovore o proizvodnji i kupovini, međunarodnoj prodaji robe, ugovore o zajmu, uslugama, distribuciji, zastupanju, posredovanju, franšizi, zajedničkom ulaganju, prevozu i druge.

    Pružamo savete klijentima u poslovanju u skladu sa carinskim propisima, propisima u oblastima deviznog poslovanja i platnih usluga.`,
    icon: AiOutlineRise,
  },
  {
    id: 'Gradjenje',
    title: 'Građenje',
    text: `
    Pružamo podršku investitorima u razvoju greenfield investicija i drugih vidova ulaganja u projekte izgradnje, savetovanjem u svim aspektima investiranja, uključujući prethodno ispitivanje uslova investiranja, kupovinu, zoniranje, projektno finansiranje i izgradnju objekata. Imamo bogato iskustvo u pregovorima o uslovima investiranja na velikim građevinskim projektima na lokalnom i nacionalnom nivou, kao i sa državnim službama i agencijama, bankama, građevinskim preduzećima, izvođačima, prodavcima i kupcima.

    Sastavljamo ugovore i druga dokumenta u vezi sa investicijama u oblasti građenja, zakupom, finansiranjem, zoniranjem, izgradnjom i obezbeđenjem investicija. Pružamo pomoć u postupcima pred nadležnim organima radi dobijanja neophodnih dozvola i saglasnosti, kao i svu drugu pravnu pomoć u toku izgradnje objekata.

    Imamo dugogodišnju saradnju sa vrhunskim stručnjacima iz oblasti urbanizma i prostornog planiranja.`,
    icon: RiBuildingLine, // CgOrganisation
  },
  {
    id: `Antimonopolsko-pravo-Pravo-konkurencije`,
    title: `Antimonopolsko pravo\nPravo konkurencije`,
    text: `
    Savetujemo klijente u pitanjima konkurencije u vezi sa spajanjem, pripajanjem i zajedničkim ulaganjima i pružamo im asistenciju u pripremi i podnošenju dokumentacije potrebne za dobijanje dozvole pred nadležnim regulatornim telima za zaštitu konkurencije.

    Prilikom zaključenja ugovora o kooperaciji i drugih komercijalnih poslova, pružamo savete klijentima sa aspekta važećih pravila, antimonopolskih propisa i propisa o konkurenciji.

    Zastupamo klijente u postupcima u vezi sa zloupotrebom dominantnog položaja na tržištu i antimonopolskim sporovima, i pružamo im podršku uključujući i razvoj odbrambenih strategija i ostvarivanje naknade štete.`,
    icon: MdCallSplit,
  },
  {
    id: `Radno-pravo-Boravisna-i-radna-dozvola`,
    title: `Radno pravo\nBoravišna i radna dozvola`,
    text: `
    Sastavljamo pravilnike, ugovore, rešenja i druga akta iz oblasti radnih odnosa i pružamo pravnu podršku klijentima u cilju organizovanja rada u skladu sa važećim propisima. Savetujemo klijente po svim pitanjima u vezi rada, prava i obaveza iz i van radnog odnosa, zaštite i bezbednosti na radu, obavezama poslodavca u vezi sa radom i drugo.

    Pružamo savete u vezi uspostavljanja pravila ponašanja kod poslodavca i primene mera za sprečavanje diskriminacije i drugih nepoželjnih pojava i unapređenje radnog okruženja. Organizujemo edukativne treninge na teme prevencije i zaštite od zlostavljanja na radu, bezbednosti na radu, obaveza i prava uzbunjivača u slučaju unutrašnjeg uzbunjivanja.

    Pružamo savete i podršku pri upućivanju zaposlenih na rad u inostranstvo (detašmani). Pružamo sveobuhvatnu podršku stranim državljanima i internacionalnim kompanijama u ispunjavanju uslova za pokretanje i uspešno okončanje postupaka dobijanja boravišne dozvole i obezbeđenje uslova za dobijanje radne dozvole.

    Pružamo pravnu pomoć i u vezi sa ispunjenjem uslova za ulazak, kretanje i boravak stranaca, uključujući i  zastupanje u postupcima dobijanja viza za kraći i privremeni boravak u Republici Srbiji.`,
    icon: FaClipboardList,
  },
  {
    id: `Intelektualna-svojina-Industrija-zabave-IT`,
    title: `Intelektualna svojina\nIndustrija zabave/IT`,
    text: `
    Pružamo usluge savetovanja i zastupanja međunarodnih i domaćih pravnih subjekata i fizičkih lica u stvarima vezanim za sticanje, zaštitu, korišćenje i povrede prava intelektualne svojine (žigovi, dizajn, patent, oznake geografskog porekla, topografije poluprovodničkih proizvoda i autorska prava).

    Naše usluge obuhvataju sastavljanje širokog spektra ugovora iz oblasti intelektualne svojine (prenos, licenca, franšiza, zaloga, izdavaštvo kao i druge vrste ugovora autorskog prava), prethodno ispitivanje uslova za registraciju i zaštitu, podnošenje zahteva i sprovođenje postupka registracije, druge usluge zastupanja u postupcima pred upravnim organima i sudovima. Pružamo savete i zastupamo klijente u sudskim i upravnim postupcima zaštite prava intelektualne svojine, uključujući i primenu posebnih mera (oduzimanje predmeta povrede, privremene mere, itd.) u cilju zaštite prava intelektualne svojine i ostvarenja naknade štete u najboljem interesu klijenta.

    Savetujemo klijente i u domenu audio-vizuelnih tehnologija i medijskog prava (TV, film, muzika, izdavaštvo, advertajzing, elektronski i štampani mediji, itd.) i pomažemo im u realizaciji projekata u vezi sa produkcijom, izdavaštvom, emitovanjem, distribucijom i oglašavanjem. Pružamo podršku projektima u svim fazama, uključujući korporativni aspekt, finansiranje, prava intelektualne svojine, publicitet, privatnost i oglašavanje.

    Imamo višegodišnjeg iskustva u zastupanju različitih učesnika na medijskom i telekomunikacionom tržištu, kao i sveobuhvatno znanje i bogatu praksu u oglašavanju, pripremi i organizaciji konkursa, sponzorstava, festivala, nagradnih igara, takmičenja i promotivnih događaja.`,
    icon: MdLightbulbOutline,
  },
  {
    id: `Porezi-carine-i-devizno-poslovanje`,
    title: `Porezi, carine i devizno poslovanje`,
    text: `
    Poresko savetovanje koje pružamo našim klijentima podrazumeva celokupan spektar usluga planiranja i konsaltinga. Naš tim uključuje i spoljne poreske savetnike specijalizovane za pružanje usluga u knjigovodstvenim, računovodstvenim i poreskim stvarima, koji su sarađivali sa nekim od najvećih revizorskih kuća ili su bili angažovani kao interni revizori za velike kompanije i državne institucije.

    Naš cilj je da pružimo visokoprofesionalne poreskopravne usluge različitim oblicima organizovanja, kao što su usluge u oblasti korporativnih finansija, bankarstva, finansijskih usluga i imovine od značaja za privredne subjekte, tako i usluge poreskog savetovanja organizacijama, ustanovama i udruženjima organizovanim na neprofitnoj osnovi sa ciljem ostvarivanja delatnosti od opšteg interesa.

    Pružamo savete klijentima u poslovanju u skladu sa carinskim propisima, propisima u oblastima deviznog poslovanja i platnih usluga.

    U pronalaženju pragmatičnih i prikladnih rešenja, negujemo poseban pristup svakom klijentu, u potpunosti uvažavajući specifičnosti slučaja, njegov ekonomski interes i poslovni ugled.`,
    icon: MdEuro,
  },
  {
    id: `Zastita-podataka-o-licnosti`,
    title: `Zaštita podataka o ličnosti`,
    text: `
    Pomažemo klijentima da obradu podataka o ličnosti usklade sa GDPR i pravilima koja su na snazi u Republici Srbiji. Pružamo savete u vezi prikupljanja i obrade ličnih podataka, utvrđivanja vrste, svrhe i osnova za obradu podataka kao i obezbeđivanja adekvatnog nivoa zaštite podataka i pružamo podršku klijentima u savlađivanju drugih izazova koje obrada i imperativ zaštite ličnih podataka stavljaju pred njih.

    Sastavljamo ugovor o obradi podataka, interna pravila zaštite podataka o ličnosti i druga dokumenta koja obezbeđuju zakonitu i svrsishodnu obradu ličnih podataka. Svesni smo da je odnos kompanija prema ličnim podacima i privatnosti od ključne važnosti za njihov ugled i zakonito poslovanje, pa je zaštita privatnosti važan segment svih usluga koje pružamo kompanijama, bez obzira na primarnu oblast usluge.

    Imamo dugogodišnju saradnju sa vrhunskim stručnjacima iz oblasti zaštite podataka o ličnosti i u saradnji sa njima organizujemo seminare i obuke iz ove oblasti.`,
    icon: IoShieldCheckmarkSharp,
  },
  {
    id: `resavanje-sporova`,
    title: `Rešavanje sporova i drugi postupci`,
    text: `
    Zastupamo klijente u parničnim postupcima, pri čemu uvek nastojimo da klijentima pomognemo da kroz pregovore i medijaciju postignu zadovoljavajuća rešenja i time izbegnu eventualne sporove i troškove postupaka. U slučaju da interesi klijenata zahtevaju sudsku zaštitu, zastupamo i savetujemo klijente kako u građanskim parnicama i postupcima u privredi, tako i u upravnim stvarima, stečaju i likvidaciji. Zastupamo klijente i u arbitražama.

    Pronalazimo najefikasnije načine za naplatu potraživanja naših klijenata u vansudskom postupku i primenjujemo sve instrumente obezbeđenja (zaloga, hipoteka, bankarska garancija, menice, jemstvo i dr.) u cilju zaštite i obezbeđenja potraživanja naših klijenata i njihove naplate bez pokretanja sudskih postupaka, kad god je to moguće.

    U slučajevima kada je naplata potraživanja moguća isključivo sudskim putem, pružamo kompletnu uslugu zastupanja u postupcima prinudnog izvršenja.`,
    icon: MdAccountBalance,
  },
  {
    id: `zastita-zivotne-sredine`,
    title: `Zaštita životne sredine`,
    text: `
    Kancelarija pruža savete i u vezi sa pitanjima zaštite i očuvanja životne sredine, sprečavanja i kontrole zagađivanja, odnosno usklađenosti poslovanja i dokumenata klijenata sa važećim propisima iz oblasti ekologije, kao i propisima iz oblasti energetike, planiranja i izgradnje, proizvodnje i upravljanja hemikalijama, otpadom i slično.

    Asistiramo našim klijentima prilikom definisanja strategije i zaključenja ugovora o upravljanju otpadom sa izabranim strateškim partnerom, postupanja u skladu sa propisima o bezbednosti hrane i organskoj proizvodnji, kao i ispunjenju uslova za dobijanje sertifikata.`,
    icon: MdNaturePeople,
  },
  {
    id: `neprofitne-organizacije`,
    title: `Neprofitne organizacije`,
    text: `
    Imamo dugogodišnje iskustvo u pružanju usluga savetovanja i zastupanja velikog broja domaćih i stranih nevladinih, neprofitnih organizacija. Savetujemo naše klijente iz nevladinog sektora o najpovoljnijim oblicima organizovanja, poreskom tretmanu neprofitnih organizacija, pitanjima iz oblasti rada,  zaštite podataka i drugim pitanjima u vezi sa njihovim poslovanjem.

    Sastavljamo akta za registraciju i rad fondacija, zadužbina i udruženja kao i predstavništava stranih neprofitnih organizacija i zastupamo ih u postupcima pred državnim organima. Pregovaramo i sastavljamo širok spektar ugovora specifičnih za neprofitne organizacije, pružamo savete i usluge u oblasti radnih odnosa, boravišnih i radnih dozvola i pružamo im podršku u toku realizacije njihovih projekata, kao i pri prestanku rada po ostvarenju ciljeva.

    Advokat Jasna Trifunović učestvovala je u procesu kreiranja važećih normativnih rešenja u neprofitnom sektoru.`,
    icon: VscOrganization,
  },
  {
    id: `usluge-fizickim-licima`,
    title: `Usluge fizičkim licima`,
    text: `
    Pružamo širok spektar pravnih usluga pojedincima u vezi sa ostvarivanjem i zaštitom njihovih prava.

    Sastavljamo punomoćja, izjave i druge jednostrane izjave volje i sve vrste ugovora, kao što su ugovori o prometu nepokretnosti, kupoprodaji pokretnih stvari, ugovori o zajmu, zakupu, zalozi, jemstvu, posluzi i drugi.

    Pružamo savete, sastavljamo ugovore i zastupamo autore i nosioce srodnih prava u ostvarivanju i zaštiti njihovih prava.

    Savetujemo klijente i u oblasti porodičnog prava, sastavljamo predbračne i bračne ugovore, zastupamo u postupcima razvoda, starateljstva, alimentacije i podele imovine, i pružamo druge vrste saveta i usluga u oblasti porodičnog i bračnog prava.

    Pružamo sve vidove pravnih usluga u vezi naslednopravnih pitanja, kao što su sastavljanje zaveštanja i naslednopravnih ugovora, zastupanje u postupcima raspravljanja zaostavštine i drugim postupcima u vezi sa nasleđivanjem i savetujemo klijente u vezi sa naslednopravnim pitanjima.

    Pružamo savetodavne usluge bivšim sopstvenicima, odnosno njihovim pravnim sledbenicima u postupku restitucije oduzete imovine i naknade. Pružamo pomoć klijentima i zastupamo ih u postupcima pred nadležnim organima usmerenim na ostvarivanje prava na restituciju i naknadu.

    Pružamo usluge u vezi rehabilitacije fizičkih lica koji su neosnovano lišeni političkih, svojinskih i drugih prava za vreme komunističkog režima.

    Savetujemo i zastupamo fizička lica u različitim građanskim sporovima, upravnim  i drugim postupcima u cilju ostvarivanja i zaštite njihovih prava i interesa.`,
    icon: MdPeople,
  },
];
