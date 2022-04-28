import { PhoneNumberLink } from 'components/address';
import { TcLawPage } from 'components/_page';
import { gLinks, gTextConstants } from 'data/constants';
import { NextPage } from 'next';
import styles from 'styles/Home.module.scss';

const newsPage: NextPage = () => {
  return (
    <TcLawPage title="Politika privatnosti">
      <h2 className="heading-underlined">Politika privatnosti</h2>
      <section id="Izjava-o-privatnosti">
        <h3>Izjava o privatnosti</h3>
        <p>
          Naša kancelarija posvećena je poštovanju i zaštiti privatnosti i
          osnovnim ličnim pravima i slobodama građana. U skladu sa tim, obraćamo
          posebnu pažnju obezbeđivanju adekvatnog nivoa zaštite podataka o
          ličnosti i zaštite privatnosti. U ovoj izjavi naći ćete informacije o
          tome zašto i kako prikupljamo, koristimo i delimo vaše podatke o
          ličnosti i koja prava imate u vezi sa tim.
        </p>

        <p>
          Budući da našu politiku privatnosti možemo menjati s vremena na vreme,
          molimo vas da proveravate ovu stranicu kako biste se upoznali sa
          promenama, što vam omogućava da procenite jeste li sa njima saglasni.
        </p>

        <p>
          Naša politika privatnosti poslednji put je ažurirana 26. avgusta 2020.
        </p>
      </section>

      <section id="Ko-smo-mi">
        <h3>Ko smo mi</h3>

        <p>
          Mi smo advokati sa sedištem u Beogradu, u Srbiji, ul. Kneza Miloša br.
          10. Mi, u svojstvu rukovaoca, kontrolišemo prikupljanje i određujemo
          svrhu i način obrade vaših podataka o ličnosti.
        </p>
      </section>

      <section
        id="Koje-podatke-prikupljamo-i-obradjujemo"

      >
        <h3>Koje podatke o ličnosti prikupljamo i obrađujemo</h3>

        <p>
          „Podatak o ličnosti“ je svaki podatak koji se odnosi na fizičko lice
          čiji je identitet određen ili odrediv, neposredno ili posredno,
          posebno na osnovu oznake identiteta, kao što je ime i lični broj,
          podatak o lokaciji, identifikator u elektronskim komunikacionim
          mrežama ili jedan, odnosno više obeležja njegovog fizičkog,
          fiziološkog, genetskog, mentalnog, ekonomskog, kulturnog i društvenog
          identiteta. Koje vaše podatke o ličnosti prikupljamo i obrađujemo,
          zavisi od toga kako i zašto uspostavljamo odnos sa vama.
        </p>

        <p>
          Vrste podataka o ličnosti koje prikupljamo i obrađujemo mogu
          uključivati sledeće:
        </p>

        <ul id="Vrste-podataka-1">
          <li>
            Kontakt informacije kao što su ime i prezime, adresa, email i broj
            telefona;
          </li>
          <li>
            Biografski podaci kao što su dan rođenja, adresa prebivališta
            odnosno boravišta, lični broj, obrazovanje, radno mesto, poslodavac,
            fotografija i video ili audio sadržaji;
          </li>
          <li>Fotokopija ličnog dokumenta;</li>
          <li>
            Marketinške i komunikacione preferencije i informacije u vezi sa tim
            kao što je feedback i odgovori u istraživanjima;
          </li>
          <li>
            Finansijski podaci kao što su adresa za fakturu, broj bankovnog
            računa i instrukcije za plaćanje;
          </li>
          <li>
            Informacije o uslugama kao što su podaci o proizvodima i uslugama
            koje ste nam pružili;
          </li>
          <li>
            Informacije o trećim licima (deca, bračni ili vanbračni partner,
            druga lica).
          </li>
        </ul>

        {/* TODO!? */}
        <p>
          Izuzetno, kada to zahteva predmet na kojem nas angažujete, kada smo
          obavezni po zakonu ili radi izvršenja ugovora, možemo prikupljati i
          obrađivati posebne vrste podataka o ličnosti kao što su etnička i
          rasna pripadnost, članstvo u sindikatu, podaci o zdravstvenom stanju,
          političko mišljenje, religijsko opredeljenje, i dr.
        </p>

        <ul id="Vrste-podataka-2">
          <li>
            Kada se prijavite na naš bilten (newsletter), pitaćemo vas da date
            vaše kontakte i druge relevantne informacije;
          </li>
          <li>
            Kada se registrujete za učešće na događaju koji organizujemo,
            tražićemo da nam date kontakt podatke, informacije o zanimanju,
            poslodavcu i druge relevantne informacije (npr. preferencije u
            pogledu ishrane i slično);
          </li>
          <li>
            Kada koristite naš veb-sajt, prikupljamo informacije o vašoj poseti
            i interakciji sa veb-sajtom;
          </li>
          <li>Preko platformi društvenih mreža;</li>
          <li>
            U korespondenciji telefonom, e-mail porukama ili na drugi način.
          </li>
          <li>
            Ako nas kontaktirate kao klijent radi pružanja advokatskih usluga,
            tražićemo od vas informacije koje su neophodne za pružanje tih
            usluga; ove informacije uključuju kontakt podatke, informacije za
            naplatu usluge, informacije neophodne radi provere eventualnog
            postojanja konflikta interesa, i informacije od važnosti za usluge
            koje pružamo. Pored toga, možemo tražiti i informacije o adresi,
            datumu i mestu rođenja, lični broj, fotokopiju ličnog dokumenta, i
            dr. kada nas zakon obavezuje na njihovo prikupljanje. Takođe,
            informacije koje nam dostavljate mogu uključivati i podatke o
            ličnosti drugih lica koji su neophodni za zastupanje u konkretnom
            predmetu odnosno za pružanje usluga (npr. kada pružamo savet u vezi
            poslovne transakcije, primene propisa na konkretan slučaj ili kada
            zastupamo u postupcima). Kada nam dostavljate informacije o trećim
            licima, dužni ste da obezbedite usaglašenost sa svim zakonskim
            obavezama koje se primenjuju na otkrivanje tih informacija nama, kao
            i da nam omogućite, kada je potrebno, da te informacije prenesemo
            licima koja nama pružaju usluge.
          </li>
          <li>
            Kada aplicirate za posao kod nas, tražićemo vam informacije
            neophodne za prijavu na posao.
          </li>
        </ul>
      </section>

      <section id="Trece-licnosti">
        <h3>Podaci o ličnosti koje prikupljamo od trećih lica</h3>

        <p>
          Od vas prikupljamo većinu vaših podataka o ličnosti koje nam vi
          dobrovoljno dajete. U nekim situacijama, vaše podatke o ličnosti
          možemo prikupljati i od naših klijenata, kada podatke obrađujemo za
          njihov račun, kao i od nadležnih organa, organizacija ili kompanija
          koje nam pružaju usluge. U određenim slučajevima koristimo i javno
          dostupne izvore informacija.
        </p>
      </section>

      <section id="Kolacici">
        <h3>Informacija o korišćenju kolačića</h3>
        <p>
          Kao i mnogi drugi veb-sajtovi, i naš veb-sajt koristi kolačiće.
          Podatke o vama dobijamo i sa Google Analytics servisa kompanije
          Google, Inc. (“Google”) čiji su serveri u SAD. Google Analytics
          koristi kolačiće kako bi nam pomogao da analiziramo na koji način
          posetioci koriste naš veb-sajt.
        </p>

        <p>
          Kolačići su male tekstualne datoteke koje se pohranjuju na vašem
          uređaju kada pristupite našem veb-sajtu. Oni omogućavaju prikupljanje
          podataka o vašoj interakciji sa našim veb-sajtom, da prepoznamo vaš
          uređaj kad posetite našu stranicu, ustanovimo vaša interesovanja i da
          prikupljamo informacije o saobraćaju. Kolačići mogu biti: sesijski
          (kolačići koji se brišu kada zatvorite pretraživač) i stalni (kolačići
          koji ostaju na vašem uređaju za vreme koje je unapred definisano, osim
          ako ih vi ranije obrišete). Vreme trajanja navedeno je niže u listi
          kolačića.
        </p>

        <p>
          Kolačići analitike su kolačići koji prate informacije o tome kako se
          internet stranica koristi, u cilju poboljšanja performansi. Takođe,
          ovi kolačići se mogu koristiti za testiranje novih funkcija, stranica
          ili mogućnosti i uvida u to kako korisnici reaguju na novine. Kolačići
          analitike mogu biti “kolačići prve strane” ili “kolačići treće
          strane”.
        </p>

        <p>
          Kada pristupite našem veb-sajtu neki od kolačića mogu biti pohranjeni
          u vaš internet pretraživač, ako to omogućite. Neki kolačići koriste se
          samo ako koristite određene mogućnosti internet stranice, odnosno ako
          odaberete određena podešavanja, dok se neki kolačići mogu koristiti
          duži vremenski period.
        </p>

        <CookiesDescriptionTable />

        <p>
          Više o kolačićima koje koristimo možete saznati na ovom
          <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">
            {' '}
            Linku
          </a>
          .
        </p>

        <p>
          Ako ne želite da dopustite određene vrste kolačića, ili kolačiće
          uopšte, možete promeniti podešavanja na vašem internet pretraživaču
          kako biste izbrisali već postavljene kolačiće ili podesili da ne
          prihvata nove kolačiće. Više informacija o ovim mogućnostima potražite
          u odeljku “Pomoć” ili “Podešavanja” na svom internet pretraživaču.
          Imajte u vidu da, ako obrišete kolačiće, ili ih ne prihvatite, postoji
          mogućnost da nećete moći da koristite sve funkcije veb-sajta, kao i da
          to može pogoršati sveukupno korisničko iskustvo budući da neke
          stranice možda neće biti pravilno prikazane.
        </p>
      </section>

      <section id="Podaci-licnosti-kako-i-zasto">
        <h3>Zašto, kako i po kom osnovu koristimo vaše podatke o ličnosti</h3>

        <p>
          Vaše podatke o ličnosti koristimo zakonito, pošteno i transparentno, u
          sledeće svrhe:
        </p>

        <ul>
          <li>
            u svrhu komunikacije i razmene informacija sa posetiocima našeg
            veb-sajta;
          </li>
          <li>
            u svrhu održavanja i upravljanja odnosima sa postojećim i
            potencijalnim klijentima, naročito u pogledu odgovora na njihove
            zahteve ili redovnim slanjem novosti iz pravnih oblasti kojima se
            bavimo, a koje bi vas mogle zanimati;
          </li>
          <li>
            u svaku drugu određenu svrhu koju vam saopštavamo pri prikupljanju
            informacija.
          </li>
        </ul>

        <p>Vaše podatke o ličnosti možemo obrađivati i koristiti posebno:</p>

        <ul>
          <li>
            kada ste vi odnosno lice na koje se podaci odnose pristali na obradu
            podataka o ličnosti u jednu ili više posebno određenih svrha;
          </li>
          <li>
            kada je obrada neophodna za izvršenje ugovora zaključenog sa licem
            na koje se podaci odnose ili za preduzimanja radnji pre zaključenje
            ugovora, a na zahtev lica na koje se podaci odnose;
          </li>
          <li>
            kada je obrada neophodna radi izvršenja naših obaveza (primarno onih
            koje proističu iz propisa, npr. u oblastima advokature, sprečavanja
            pranja novca i finansiranja terorizma, rada, poreza, doprinosa i
            sl.);
          </li>
          <li>
            kada je obrada neophodna radi zaštite vitalnih interesa lica na koje
            se podaci odnose ili drugog fizičkog lica;
          </li>
          <li>
            kada je obrada neophodna u cilju ostvarenja naših legitimnih
            interesa ili interesa trećeg lica, osim kada nad tim interesima
            preovlađuju interesi ili osnovna prava i slobode lica na koja se
            podaci odnose.
          </li>
        </ul>

        <p>
          Naša obrada vaših podataka o ličnosti zavisi od toga kako, kada i
          zašto komuniciramo. Posebne vrste podataka o ličnosti obrađujemo samo
          kada je takva obrada neophodna u cilju pružanja saveta i usluga
          klijentu u vezi njegovih obaveza i prava u vezi rada i socijalnog
          osiguranja, kada smo na to obavezani zakonom ili kad je to neophodno
          da bi se ustanovio, ostvario ili odbranio pravni zahtev.
        </p>

        <p>
          Svi vaši podaci o ličnosti se obrađuju samo u obimu koji je nužan za
          ispunjenje svrhe u koju se prikupljaju.
        </p>

        <p className={styles.italic}>
          Molimo kontaktirajte nas ako imate pitanja u vezi načina prikupljanja
          i korišćenja vaših podataka o ličnosti.
        </p>
      </section>

      <section
        id="Otkrivanje-i-prenos-vasih-podataka"

      >
        <h3>Otkrivanje i prenos vaših podataka o ličnosti</h3>
        <p>
          Mi poštujemo vaše podatke o ličnosti i ne otkrivamo ih drugim licima
          osim kako je niže opisano.
        </p>

        <p>Vaše podatke o ličnosti možemo otkriti:</p>

        <ul>
          <li>
            licu koje nam pruža računovodstvene usluge u svrhu administracije i
            naplate;
          </li>
          <li>
            u svrhu pružanja advokatskih saveta i usluga. Kada otkrivamo vaše
            podatke o ličnosti van Srbije, koristimo standardne ugovorne
            klauzule. Kada je neophodno da se podaci prenesu van Srbije, prenos
            se vrši u skladu sa propisanim uslovima u Republici Srbiji;
          </li>
          <li>
            podatke o ličnosti klijenata, njihovih zaposlenih i zastupnika
            možemo otkrivati drugim stručnjacima uključujući advokate,
            medijatore, arbitre, konsultante, eksperte koje angažujemo na
            predmetu i advokatske pripravnike. Takođe, podaci o ličnosti mogu
            biti otkriveni i drugoj advokatskoj kancelariji ako je potrebno
            dobijanje stranog pravnog mišljenja;
          </li>
          <li>
            našim dobavljačima odnosno pružaocima usluga (npr. organizatoru
            događaja, partnerima i slično);
          </li>
          <li>nadležnim organima kad je to obavezno ili potrebno;</li>
          <li>kada nam za njihovo otkrivanje vi date pristanak.</li>
        </ul>

        <p>
          Prenosićemo vaše podatke o ličnosti izvan Republike Srbije samo ako:
        </p>

        <ul>
          <li>
            se prenos podataka vrši u zemlju za koju je utvrđeno da ima
            primereni nivo zaštite podataka o ličnosti u skladu sa zakonom,
          </li>
          <li>
            se prenos vrši uz primenu standardnih ugovornih klauzula kao
            odgovarajućih mera zaštite;
          </li>
          <li>ste nam dali izričit pristanak ili</li>
          <li>
            je takav prenos u skladu sa Zakonom o zaštiti podataka o ličnosti u
            Republici Srbiji (dalje: Zakon) ili odredbama GDPR.
          </li>
        </ul>

        <p>
          U svakom slučaju preduzimaćemo sve odgovarajuće mere kako bismo
          osigurali da vaša privatnost ostane zaštićena.
        </p>
        <p className={styles.italic}>
          Kontaktirajte nas ako imate bilo kakva pitanja u vezi način otkrivanja
          ili prenosa vaših podataka o ličnosti.
        </p>
      </section>

      <section id="Kako-stitimo-vase-podatke">
        <h3>Kako štitimo vaše podatke o ličnosti</h3>

        <p>
          Naš cilj je da vaše podatke čuvamo sigurnim i bezbednim u najvećoj
          mogućoj meri. U cilju bezbednosti vaših podataka o ličnosti sprovodimo
          odgovarajuće tehničke, organizacione i kadrovske mere radi sprečavanja
          neovlašćenog otkrivanja ili pristupa podacima o ličnosti koji su
          preneseni, pohranjeni ili obrađivani na drugi način, kao i slučajnog
          ili nezakonitog gubitka, uništenja ili izmene.
        </p>

        <p className={styles.italic}>
          Kontaktirajte nas ako imate pitanja u vezi načina zaštite vaših
          podataka o ličnosti.
        </p>
      </section>

      <section id="Koliko-dugo-cuvamo-vase-podatke">
        <h3>Koliko dugo čuvamo vaše podatke o ličnosti</h3>

        <p>
          Vaše podatke o ličnosti ne čuvamo duže nego što je to neophodno za
          svrhu za koju su podaci prikupljeni, ili u trajanju na koje smo
          obavezani zakonom, ili radi ostvarivanja odnosno odbrane pravnog
          zahteva.
        </p>
      </section>

      <section id="Vasa-prava">
        <h3>Vaša prava u vezi obrade i čuvanja vaših podataka o ličnosti</h3>

        <b>Imate prava:</b>
        <ul>
          <li>
            da budete informisani o obradi vaših podataka o ličnosti,
            uključujući osnov i svrhu obrade, vrste podataka, da li se i kome
            otkrivaju, i druge informacije u skladu sa Zakonom („
            <b>pravo na informisanje</b>“). U pojedinim situacijama, ovo pravo
            može biti ograničeno;
          </li>
          <li>
            da nam{' '}
            <b>
              date odnosno da odbijete davanje pristanka kao i pravo da
              opozovete dati pristanak
            </b>{' '}
            na obradu vaših podataka o ličnosti, kada se radi o obradi koja se
            vrši na osnovu pristanka;
          </li>
          <li>
            da istaknete prigovor na obradu podataka o ličnosti („
            <b>pravo na prigovor</b>“) iz Zakonom propisanih razloga (ovo pravo
            je neograničeno ako se radi o obradi podataka koja se vrši
            isključivo za potrebe direktnog oglašavanja (marketinga));
          </li>
          <li>
            da budete obavešteni odn. da dobijete informaciju koji podaci o
            ličnosti se o vama obrađuju i čuvaju („<b>pravo na pristup</b>“),
            kao i pravo na uvid u podatke i kopiju podataka u skladu sa Zakonom;
          </li>
          <li>
            da zahtevate da se izvrši ispravka ili dopuna podataka koje čuvamo o
            vama, ako su ti podaci netačni ili neažurni ili nepotpuni („
            <b>pravo na ispravku i dopunu</b>“)
          </li>
          <li>
            da zahtevate brisanje podataka koje čuvamo: 1) kada vaši podaci o
            ličnosti više nisu neophodni za obradu u svrhe u koje su prikupljeni
            ili na drugi način obrađivani; 2) kada povučete pristanak na kojem
            je obrada zasnovana a nema drugog osnova za obradu, ili 3) kada
            uložite prigovor na obradu podataka o ličnosti u skladu sa članom
            37. stav 1 Zakona a nema drugog pravnog osnova za obradu koji
            preteže nad vašim legitimnim interesom, pravom ili slobodom ili je
            osnov u vezi sa podnošenjem, ostvarivanjem i odbranom pravnog
            zahteva („<b>pravo na brisanje/zaborav</b>“).
          </li>
        </ul>

        <p>
          Ovo pravo nije apsolutno: u zavisnosti od obima zahteva, možemo
          obrisati sve ili deo podataka koje čuvamo, a u nekim situacijama takav
          zahtev može biti i pravno neosnovan (ako su npr. podaci neophodni za
          izvršenje ugovora i ispunjenje zakonskih obaveza ili zbog podnošenja,
          ostvarivanja ili odbrane pravnog zahteva, u meri u kojoj je obrada
          neophodna);
        </p>

        <ul>
          <li>
            da obezbedite ograničenje obrade vaših podataka o ličnosti: 1) ako
            osporavate njihovu tačnost (za vreme koje nam omogućava proveru
            tačnosti podataka o ličnosti); 2) ako je obrada nezakonita a vi se
            protivite brisanju vaših podataka o ličnosti i umesto toga tražite
            ograničavanje njihove upotrebe; 3) ako nama više nisu potrebni
            podaci o ličnosti za potrebe obrade ali ih vi tražite radi
            podnošenja, ostvarivanja ili odbrane pravnih zahteva i 4) ako
            uložite prigovor na obradu a još nije utvrđeno da li naši legitimni
            interesi za obradu preovlađuju nad vašim interesima („
            <b>pravo na ograničenje obrade</b>“). Ako je obrada ograničena,
            takve podatke o ličnosti smemo obrađivati ili uz vaš pristanak ili u
            cilju podnošenja, ostvarivanja ili odbrane pravnih zahteva ili zbog
            zaštite prava drugog fizičkog ili pravnog lica ili zbog ostvarivanja
            značajnih javnih interesa. U slučaju ograničene obrade obavestićemo
            vas o prestanku ograničenja pre njegovog prestanka.
          </li>
          <li>
            pod određenim uslovima propisanim Zakonom, imate pravo da zahtevate
            da podatke o ličnosti koje ste nam dostavili prenesemo vama ili
            drugom rukovaocu („
            <b>pravo da zahtevate prenos podataka</b>“).
          </li>
          <li>
            da podnesete <b>pritužbu</b> Povereniku za informacije od javnog
            značaja i zaštitu podataka o ličnosti (Poverenik) i pravo na sudsku
            zaštitu. Ako smatrate da se obrada vaših podataka o ličnosti
            sprovodi suprotno odredbama Zakona ili drugih važećih propisa,
            možete podneti pritužbu Povereniku. Ako ne budete zadovoljni
            njegovom odlukom, možete pokrenuti <b>upravni spor</b> u roku
            propisanom Zakonom. Lice na koje se podaci odnose ima pravo na
            sudsku zaštitu ako smatra da mu je, radnjom obrade njegovih podataka
            o ličnosti, povređeno neko pravo predviđeno Zakonom od strane
            rukovaoca ili obrađivača.
          </li>
        </ul>
      </section>

      <section id="Kontaktirajte-nas">
        <h3>Kontaktirajte nas</h3>
        <p>
          Molimo vas da sva pitanja u vezi ove Izjave o privatnosti, načina na
          koji obrađujemo vaše podatke o ličnosti i druge zahteve u vezi zaštite
          ličnih podataka uputite na e-mail{' '}
          <a href={gLinks.email}>{gTextConstants.officeEmail}</a>; kontakt
          telefon: <PhoneNumberLink />
        </p>
      </section>
    </TcLawPage>
  );
};

function CookiesDescriptionTable() {
  return (
    <table>
      <style jsx>{`
        td,
        th {
          padding: 10px;
        }
      `}</style>
      <colgroup>
        <col style={{ width: '50px' }} />
        <col style={{ width: '375px' }} />
        <col style={{ width: '50px' }} />
        <col style={{ width: '50px' }} />
      </colgroup>
      <thead>
        <tr>
          <th>Kolačić</th>
          <th>Opis</th>
          <th>Trajanje</th>
          <th>Tip</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>_ga</td>
          <td>
            Ovaj kolačić je povezan sa Google Tag Manager, registruje
            jedinstveni ID korisnika i generiše statističke podatke o načinu na
            koji korisnik koristi internet stranicu.
          </td>
          <td>2 godine</td>
          <td>Analitički</td>
        </tr>
        <tr>
          <td>_gid</td>
          <td>
            Ovaj kolačić je povezan sa Google Universal Analitics i koristi se
            za identifikaciju korisnika u statističke svrhe. Čuva i ažurira
            podatke za svaku stranicu u okviru internet stranice koju korisnik
            poseti.
          </td>
          <td>24 časa</td>
          <td>Analitički</td>
        </tr>
        <tr>
          <td>gat</td>
          <td>
            Ovaj kolačić je povezan sa Google Universal Analitics, prema
            dokumentaciji koja se koristi za regulisanje brzine zahteva -
            ograničavanje prikupljanja podataka na sajtovima sa visokim
            prometom.
          </td>
          <td>1 minut</td>
          <td>Analitički</td>
        </tr>
        <tr></tr>
        <tr></tr>
      </tbody>
    </table>
  );
}

export default newsPage;
