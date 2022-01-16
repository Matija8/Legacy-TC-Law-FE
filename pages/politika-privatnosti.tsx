import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import { NextPage } from 'next';
import Link from 'next/link';
import styles from 'styles/Home.module.scss';

const newsPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <style jsx>{`
        section {
          padding-bottom: 1rem;
        }

        .italic {
          font-style: italic;
        }
      `}</style>
      <SiteHead title="Politika privatnosti" />
      <Header />
      <main className={styles.main}>
        <h2 className="heading-underlined">Politika privatnosti</h2>
        <section id="Izjava-o-privatnosti">
          <h3>Izjava o privatnosti</h3>
          <p>
            Naša kancelarija posvećena je poštovanju i zaštiti privatnosti i
            osnovnim ličnim pravima i slobodama građana. U skladu sa tim,
            obraćamo posebnu pažnju obezbeđivanju adekvatnog nivoa zaštite
            podataka o ličnosti i zaštite privatnosti. U ovoj izjavi naći ćete
            informacije o tome zašto i kako prikupljamo, koristimo i delimo vaše
            podatke o ličnosti i koja prava imate u vezi sa tim.
          </p>

          <p>
            Budući da našu politiku privatnosti možemo menjati s vremena na
            vreme, molimo vas da proveravate ovu stranicu kako biste se upoznali
            sa promenama, što vam omogućava da procenite jeste li sa njima
            saglasni.
          </p>

          <p>
            Naša politika privatnosti poslednji put je ažurirana 26. avgusta
            2020.
          </p>
        </section>

        <section id="Ko-smo-mi">
          <h3>Ko smo mi</h3>

          <p>
            Mi smo advokati sa sedištem u Beogradu, u Srbiji, ul. Kneza Miloša
            br. 10. Mi, u svojstvu rukovaoca, kontrolišemo prikupljanje i
            određujemo svrhu i način obrade vaših podataka o ličnosti.
          </p>
        </section>

        <section id="Koje-podatke-prikupljamo-i-obradjujemo">
          <h3>Koje podatke o ličnosti prikupljamo i obrađujemo</h3>

          <p>
            „Podatak o ličnosti“ je svaki podatak koji se odnosi na fizičko lice
            čiji je identitet određen ili odrediv, neposredno ili posredno,
            posebno na osnovu oznake identiteta, kao što je ime i lični broj,
            podatak o lokaciji, identifikator u elektronskim komunikacionim
            mrežama ili jedan, odnosno više obeležja njegovog fizičkog,
            fiziološkog, genetskog, mentalnog, ekonomskog, kulturnog i
            društvenog identiteta. Koje vaše podatke o ličnosti prikupljamo i
            obrađujemo, zavisi od toga kako i zašto uspostavljamo odnos sa vama.
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
              odnosno boravišta, lični broj, obrazovanje, radno mesto,
              poslodavac, fotografija i video ili audio sadržaji;
            </li>
            <li>Fotokopija ličnog dokumenta;</li>
            <li>
              Marketinške i komunikacione preferencije i informacije u vezi sa
              tim kao što je feedback i odgovori u istraživanjima;
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
            rasna pripadnost, članstvo u sindikatu, podaci o zdravstvenom
            stanju, političko mišljenje, religijsko opredeljenje, i dr.
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
              Kada koristite naš veb-sajt, prikupljamo informacije o vašoj
              poseti i interakciji sa veb-sajtom;
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
              predmetu odnosno za pružanje usluga (npr. kada pružamo savet u
              vezi poslovne transakcije, primene propisa na konkretan slučaj ili
              kada zastupamo u postupcima). Kada nam dostavljate informacije o
              trećim licima, dužni ste da obezbedite usaglašenost sa svim
              zakonskim obavezama koje se primenjuju na otkrivanje tih
              informacija nama, kao i da nam omogućite, kada je potrebno, da te
              informacije prenesemo licima koja nama pružaju usluge.
            </li>
            <li>
              Kada aplicirate za posao kod nas, tražićemo vam informacije
              neophodne za prijavu na posao.
            </li>
          </ul>
        </section>

        <section id="trece-licnosti">
          <h3>Podaci o ličnost koje prikupljamo od trećih lica</h3>

          <p>
            Od vas prikupljamo većinu vaših podataka o ličnosti koje nam vi
            dobrovoljno dajete. U nekim situacijama, vaše podatke o ličnosti
            možemo prikupljati i od naših klijenata, kada podatke obrađujemo za
            njihov račun, kao i od nadležnih organa, organizacija ili kompanija
            koje nam pružaju usluge. U određenim slučajevima koristimo i javno
            dostupne izvore informacija.
          </p>
        </section>

        <section id="kolacici">
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
            uređaju kada pristupite našem veb-sajtu. Oni omogućavaju
            prikupljanje podataka o vašoj interakciji sa našim veb-sajtom, da
            prepoznamo vaš uređaj kad posetite našu stranicu, ustanovimo vaša
            interesovanja i da prikupljamo informacije o saobraćaju. Kolačići
            mogu biti: sesijski (kolačići koji se brišu kada zatvorite
            pretraživač) i stalni (kolačići koji ostaju na vašem uređaju za
            vreme koje je unapred definisano, osim ako ih vi ranije obrišete).
            Vreme trajanja navedeno je niže u listi kolačića.
          </p>

          <p>
            Kolačići analitike su kolačići koji prate informacije o tome kako se
            internet stranica koristi, u cilju poboljšanja performansi. Takođe,
            ovi kolačići se mogu koristiti za testiranje novih funkcija,
            stranica ili mogućnosti i uvida u to kako korisnici reaguju na
            novine. Kolačići analitike mogu biti “kolačići prve strane” ili
            “kolačići treće strane”.
          </p>

          <p>
            Kada pristupite našem veb-sajtu neki od kolačića mogu biti
            pohranjeni u vaš internet pretraživač, ako to omogućite. Neki
            kolačići koriste se samo ako koristite određene mogućnosti internet
            stranice, odnosno ako odaberete određena podešavanja, dok se neki
            kolačići mogu koristiti duži vremenski period.
          </p>

          <CookiesDescriptionTable />

          <p>
            Više o kolačićima koje koristimo možete saznati na ovom
            <Link href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">
              <a> Linku</a>
            </Link>
            .
          </p>

          <p>
            Ako ne želite da dopustite određene vrste kolačića, ili kolačiće
            uopšte, možete promeniti podešavanja na vašem internet pretraživaču
            kako biste izbrisali već postavljene kolačiće ili podesili da ne
            prihvata nove kolačiće. Više informacija o ovim mogućnostima
            potražite u odeljku “Pomoć” ili “Podešavanja” na svom internet
            pretraživaču. Imajte u vidu da, ako obrišete kolačiće, ili ih ne
            prihvatite, postoji mogućnost da nećete moći da koristite sve
            funkcije veb-sajta, kao i da to može pogoršati sveukupno korisničko
            iskustvo budući da neke stranice možda neće biti pravilno prikazane.
          </p>
        </section>

        <section id="Podaci-licnost-kako-zasto">
          <h3>Zašto, kako i po kom osnovu koristimo vaše podatke o ličnosti</h3>

          <p>
            Vaše podatke o ličnosti koristimo zakonito, pošteno i transparentno,
            u sledeće svrhe:
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
              kada ste vi odnosno lice na koje se podaci odnose pristali na
              obradu podataka o ličnosti u jednu ili više posebno određenih
              svrha;
            </li>
            <li>
              kada je obrada neophodna za izvršenje ugovora zaključenog sa licem
              na koje se podaci odnose ili za preduzimanja radnji pre
              zaključenje ugovora, a na zahtev lica na koje se podaci odnose;
            </li>
            <li>
              kada je obrada neophodna radi izvršenja naših obaveza (primarno
              onih koje proističu iz propisa, npr. u oblastima advokature,
              sprečavanja pranja novca i finansiranja terorizma, rada, poreza,
              doprinosa i sl.);
            </li>
            <li>
              kada je obrada neophodna radi zaštite vitalnih interesa lica na
              koje se podaci odnose ili drugog fizičkog lica;
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
            zašto komuniciramo. Posebne vrste podataka o ličnosti obrađujemo
            samo kada je takva obrada neophodna u cilju pružanja saveta i usluga
            klijentu u vezi njegovih obaveza i prava u vezi rada i socijalnog
            osiguranja, kada smo na to obavezani zakonom ili kad je to neophodno
            da bi se ustanovio, ostvario ili odbranio pravni zahtev.
          </p>

          <p>
            Svi vaši podaci o ličnosti se obrađuju samo u obimu koji je nužan za
            ispunjenje svrhe u koju se prikupljaju.
          </p>

          <p className="italic">
            Molimo kontaktirajte nas ako imate pitanja u vezi načina
            prikupljanja i korišćenja vaših podataka o ličnosti.
          </p>
        </section>
      </main>
      <Footer />
    </div>
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
