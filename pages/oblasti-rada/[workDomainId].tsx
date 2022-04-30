import { WorkAreaGrid } from 'components/work-area-grid';
import { TcLawPage } from 'components/_page';
import { WorkDomain, workAreas } from 'data/oblasti-rada';

const WorkAreaPage = ({ domain }: { domain: WorkDomain }) => {
  return (
    <TcLawPage title="Oblasti rada">
      <h2 className="heading-underlined">Oblasti rada</h2>

      <section style={{ margin: '40px 0 70px' }}>
        <h3 className="pre-wrap">{domain.title}</h3>
        {domain.text
          .split('\n')
          .map((p) => p.trim())
          .filter(Boolean)
          .map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
      </section>

      <WorkAreaGrid />
    </TcLawPage>
  );
};

export default WorkAreaPage;

export async function getStaticPaths() {
  return {
    paths: workAreas.map(({ id }) => ({ params: { workDomainId: `${id}` } })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { workDomainId: string };
}) {
  return {
    props: {
      domain: {
        ...workAreas.find(({ id }) => id === params.workDomainId),
        icon: null, // Icon is otherwise a function, which can't be serialized
      },
    },
  };
}
