import { EmployeePhoto } from 'components/employee-photo';
import { TcLawPage } from 'components/_page';
import { Employee, lawyers } from 'data/employees';
import { EmployeeFns } from 'util/employee-util';
import styles from './employee-page.module.scss';

const employeePage = ({ employee }: { employee: Employee }) => {
  return (
    <TcLawPage title={EmployeeFns.getNameSurname(employee)}>
      <div className={styles['employee-row']}>
        <div style={{ minWidth: '200px' /* TODO */ }}>
          <EmployeePhoto employee={employee} />
        </div>
        <section id="opis">
          <h2>{EmployeeFns.getNameSurname(employee)}</h2>
          <p>{EmployeeFns.getLongTitle(employee)}</p>
          {/* TODO email */}
          {/* TODO phone */}
          <section>
            <h3>Stručne oblasti</h3>
            {(employee.workAreas ?? []).map((areaText, idx) => (
              <p key={idx}>{areaText}</p>
            ))}
          </section>
          <section>
            <h3>Obrazovanje</h3>
            {(employee.education ?? []).map((educationText, idx) => (
              <p key={idx}>{educationText}</p>
            ))}
          </section>
          <p>
            <b>Jezici:</b> {employee.languages}
          </p>
        </section>
      </div>
    </TcLawPage>
  );
};

export default employeePage;

export async function getStaticPaths() {
  const paths = lawyers
    .map((l) => ({
      params: {
        employeePagePath: l.pagePath,
      },
    }))
    .filter((l) => l.params.employeePagePath);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { employeePagePath: string };
}) {
  const { employeePagePath } = params;
  const lawyer = lawyers.find((l) => l.pagePath === employeePagePath);
  return {
    props: {
      employee: lawyer,
    },
  };
}
