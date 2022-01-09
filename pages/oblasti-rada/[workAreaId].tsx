import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import { WorkAreaGrid } from 'components/work-area-grid';
import { workAreas, WorkArea } from 'data/oblasti-rada';
import { useRouter } from 'next/router';
import styles from 'styles/Home.module.scss';

const WorkAreaPage = ({ workArea }: { workArea: WorkArea }) => {
  return (
    <div className={styles.container}>
      <SiteHead title="Oblasti rada" />
      <Header />
      <main className={styles.main}>
        <h2 className="header-underlined">Oblasti rada</h2>

        <section>
          <h3>{workArea.title}</h3>
          <p>{workArea.text}</p>
        </section>

        <WorkAreaGrid />
      </main>
      <Footer />
    </div>
  );
};

export default WorkAreaPage;

export async function getStaticPaths() {
  return {
    paths: workAreas.map(({ id }) => ({ params: { workAreaId: `${id}` } })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { workAreaId: string };
}) {
  return {
    props: {
      workArea: {
        ...workAreas.find(({ id }) => id === params.workAreaId),
        icon: null,
      },
    },
  };
}
