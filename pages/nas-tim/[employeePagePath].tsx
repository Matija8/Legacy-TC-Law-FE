import { EmployeePhoto } from 'components/employee-photo';
import { TcLawPage } from 'components/_page';
import { Employee, lawyers } from 'data/employees';

const employeePage = ({ employee }: { employee: Employee }) => {
  return (
    <TcLawPage title={`${employee.name} ${employee.surname}`}>
      <div style={{ display: 'flex' }}>
        <EmployeePhoto employee={employee} />
        <p>{JSON.stringify(employee)}</p>
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
