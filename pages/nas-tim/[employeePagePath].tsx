import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import { Employee, lawyers } from 'data/employees';
import styles from 'styles/Home.module.scss';

const employeePage = ({ employee }: { employee: Employee }) => {
  return (
    <div className={styles.container}>
      <SiteHead title="" />
      <Header />
      <main className={styles.main}>
        <p>{JSON.stringify(employee)}</p>
      </main>
      <Footer />
    </div>
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
