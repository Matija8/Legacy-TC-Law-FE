import { WorkAreaGrid } from 'components/work-area-grid';
import { TcLawPage } from 'components/_page';
import { WorkArea, workAreas } from 'data/oblasti-rada';

const WorkAreaPage = ({ workArea }: { workArea: WorkArea }) => {
  return (
    <TcLawPage title="Oblasti rada">
      <h2 className="heading-underlined">Oblasti rada</h2>

      <section style={{ margin: '40px 0 70px' }}>
        <h3 className="pre-wrap">{workArea.title}</h3>
        {workArea.text
          .split('\n')
          .map((p) => p.trim())
          .filter(Boolean)
          .map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
      </section>

      <WorkAreaGrid slice={8} />
    </TcLawPage>
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
