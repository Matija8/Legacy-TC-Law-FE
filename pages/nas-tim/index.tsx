import { EmployeeCard } from 'components/employee-card';
import { TcLawPage } from 'components/_page';
import { lawyers } from 'data/employees';
import { NextPage } from 'next';
import styles from './nas-tim.module.scss';

const ourTeamPage: NextPage = () => {
  return (
    <TcLawPage title="Naš tim">
      <section style={{ marginBottom: '50px' }}>
        <h2 className="heading-underlined">Naš tim</h2>

        <p>
          Sa preko dve i po decenije iskustva u advokaturi i negovanjem
          individualnog pristupa svakom klijentu, danas imamo zadovoljstvo da
          svoj uspeh merimo uspešnim rezultatima naših klijenata.
        </p>

        <p>
          Posebno nam je važno da shvatimo vašu poslovnu filozofiju, ciljeve i
          interese kako bismo vam pružili personalizovanu pravnu uslugu koja
          odgovara vašim potrebama. Zato smo fokusirani na vaše ciljeve i
          potrebe kako bismo vam pružili pragmatične, pouzdane i
          visokoprofesionalne pravne usluge.
        </p>

        <p>
          Uz visoke profesionalne standarde, fleksibilnost i kreativnost cilj
          nam je da vam damo pouzdano, efektivno i pravovremeno rešenje koje će
          vam omogućiti da bezbolno prevaziđete izazove u dinamičnom i
          kompleksnom privrednom ambijentu i postignete maksimalne rezultate uz
          minimalne izdatke. Stalo nam je da sa vama izgradimo poverenje i
          dugoročnu saradnju podjednako kao i do naše reputacije.
        </p>
      </section>

      <section className={styles['team-photos']}>
        {lawyers.map((employee) => (
          <EmployeeCard employee={employee} key={employee.key} />
        ))}
      </section>
    </TcLawPage>
  );
};

export default ourTeamPage;
