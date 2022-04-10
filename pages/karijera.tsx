import { CareerForm } from 'components/career-form';
import { TcLawPage } from 'components/_page';
import { NextPage } from 'next';

const careerPage: NextPage = () => {
  return (
    <TcLawPage title="Karijera">
      <h2 className="heading-underlined">Karijera</h2>

      <p>
        Tražimo saradnike iz različitih pravnih disciplina i sa različitim
        iskustvima. Profesionalni i etički standardi se podrazumevaju, a s
        obzirom na naše polje rada, zahtevamo i odlično poznavanje govornog i
        pisanog engleskog jezika. Negujemo timski rad i podržavamo razvoj
        veština komunikacije i sposobnosti za postizanje izvrsnih rezultata pod
        pritiskom.
      </p>

      <p>
        Novi saradnici su dobrodošli u naš tim, bilo da imaju iskustva ili tek
        počinju karijeru, a pod uslovom da imaju želju za poslom ispunjenim
        izazovima, da dobro poznaju pravo, poznaju i ponašaju se u skladu sa
        kodeksom profesionalne etike advokata, kao i da imaju sposobnost da rade
        u različitim pravnim oblastima.
      </p>

      <p>
        Ako sebe vidite u takvoj sredini, slobodno nam pošaljite Vaš CV i kratko
        motivaciono pismo.
      </p>

      <CareerForm />
    </TcLawPage>
  );
};

export default careerPage;
