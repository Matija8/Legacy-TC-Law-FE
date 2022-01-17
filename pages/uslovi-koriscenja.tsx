import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import { NextPage } from 'next';
import Link from 'next/link';
import styles from 'styles/Home.module.scss';

const newsPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <SiteHead title="Uslovi koriščenja" />
      <Header />
      <main className={styles.main}>
        <h2 className="heading-underlined">Uslovi koriščenja</h2>

        <section className={styles.section}>
          <h3>Prihvatanje uslova korišćenja</h3>
          <p>
            Pristupanjem, pregledanjem ili korišćenjem veb-sajta naše
            kancelarije (TCLaw) prihvatate da se na Vas primenjuju ovi Uslovi
            korišćenja i važeći propisi. Ako se ne slažete sa bilo kojim delom
            ovih Uslova korišćenja, nemojte koristiti ili skidati materijale sa
            ovog veb-sajta.
          </p>
          <p>
            Kada nas kontaktirate preko veb-sajta ili direktno na i mejl ili
            drugu adresu, dajete saglasnost za obradu ličnih podataka koje nam
            dostavljate. O svim pitanjima u vezi sa obradom dostavljenih
            podataka saznajte više na našoj{' '}
            <Link href="/politika-privatnosti">
              <a className={styles.italic}>Politici privatnosti</a>
            </Link>
            .
          </p>
        </section>

        <section className={styles.section}>
          <h3>Intelektualna svojina</h3>
          <p>
            Sva prava intelektualne svojine na sadržajima koji se nalaze na ovom
            veb-sajtu i svim elementima koji su kreirani za veb-sajt pripadaju
            nama i/ili autorima koji su nam dozvolili njihovu objavu i/ili
            upotrebu. Posetioci sajta imaju mogućnost da pregledaju stranice
            veb-sajta u informativne svrhe, bez prava na reprodukciju
            fotografija, tekstualnih, audio-vizuelnih i bilo kojih drugih
            sadržaja. Zabranjeno je neovlašćeno stavljanje u promet i kopiranje,
            kao i bilo koji drugi oblik korišćenja sadržaja veb-sajta koji je u
            suprotnosti sa ovde utvrđenim uslovima i/ili svrhom i/ili kojim se
            narušavaju prava autora ili nosioca drugog prava intelektualne
            svojine.
          </p>
        </section>

        <section className={styles.section}>
          <h3>Odricanje od odgovornosti</h3>
          <p>
            Ovaj veb-sajt sadrži opšte informacije o oblastima rada i članovima
            TCLaw tima, kao i generalne prikaze i mišljenja o značajnim
            novostima u pojedinim oblastima prava Republike Srbije i događajima
            u vezi sa oblastima kojima se bavimo. Iako ulažemo najveće napore
            kako bismo obezbedili tačnost i pouzdanost svih podataka objavljenih
            na veb-sajtu. Međutim, informacije sadržane na našem veb-sajtu
            objavljene su isključivo u informativne svrhe i nisu namenjene da
            služe kao pravni savet ili kao bilo koja druga vrsta saveta, u bilo
            koje svrhe.
          </p>
          <p>
            TCLaw i članovi tima nisu odgovorni i odriču se svake odgovornosti u
            vezi sa bilo kojim oblikom postupanja na osnovu informacija
            objavljenih na veb-sajtu, kao i za eventualne greške ili propuste u
            sadržajima ili tehničke probleme na veb-sajtu ili internet
            stranicama kojima se može pristupiti sa veb-sajta putem linka.
            Naročito, nismo i ne možemo biti odgovorni za tumačenje informacija
            objavljenih na veb-sajtu ili posledice upotrebe objavljenih
            informacija.
          </p>
          <p>
            Pregledanjem veb-sajta ili bilo kojim vidom komunikacije putem
            veb-sajta ne uspostavlja se i ne može se uspostaviti odnos klijenta
            i advokata, niti se može smatrati da je preduzimanjem takvih radnji
            postignut sporazum o pružanju pravnih ili bilo kojih drugih usluga.
          </p>
          <p>
            Ukoliko su Vam potrebne pravne usluge ili pravni savet, možete nas
            kontaktirati direktno sa konkretnim zahtevom.
          </p>
          <p>
            TCLaw veb-sajt može sadržati veze ka internet stranicama drugih
            lica, uspostavljene u cilju pružanja potpunijih informacija. Ne
            preuzimamo nikakvu odgovornost za bilo koju informaciju ili
            mišljenje objavljeno na internet stranicama drugih lica, niti za
            pravila i uslove njihovog korišćenja. Molimo Vas da imate u vidu da
            te internet stranice mogu koristi kolačiće za praćenje korisnika,
            kao i da, ako preko našeg veb-sajta pristupate nekoj od internet
            stranica drugih lica, to radite na sopstveni rizik. Sa uslovima
            korišćenja i politikom privatnosti, uključujući i korišćenje
            kolačića od strane internet stranica drugih lica, upoznajte se na
            njihovim stranicama.
          </p>
          <p>
            TCLaw i članovi tima ne odgovaraju za bilo koju štetu, direktnu ili
            indirektnu, bez obzira na uzrok, poreklo, prirodu ili posledicu,
            koja je posledica pristupa odn. pregledanja veb-sajta ili
            nemogućnosti pristupa veb-sajtu ili korišćenja veb-sajta ili
            razumevanja bilo koje informacije koja direktno ili indirektno
            potiče sa njega.
          </p>
        </section>

        <section className={styles.section}>
          <h3>Izmene sadržaja i uslova korišćenja; ukidanje veb-sajta</h3>
          <p>
            Možemo, u svako doba i bez obaveštenja, da povučemo ili izmenimo
            bilo koji sadržaj objavljen na veb-sajtu, u celosti ili delimično,
            kao i da ga izmenimo, dopunimo ili da uklonimo ove uslove korišćenja
            iz bilo kog razloga.
          </p>
          <p>
            Takođe, možemo, u svako doba i bez obaveštenja, prekinuti mogućnost
            posete veb-sajta.
          </p>
        </section>

        <section className={styles.section}>
          <h3>Ostale odredbe</h3>
          <p>
            Na sve sadržaje na ovom veb-sajtu primenjuje se pravo Republike
            Srbije.
          </p>
          <p>
            Referiranje na kancelarija, mi, TCLaw, tim itd. na ovom veb-sajtu
            označava advokatsku praksu advokata Jasne Trifunović registrovanu u
            imeniku advokata Beograda, Srbija (matični broj: 54034407, PIB:
            100039606) i advokata koji sa njom sarađuju.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default newsPage;
