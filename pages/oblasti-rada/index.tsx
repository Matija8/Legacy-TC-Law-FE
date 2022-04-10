import { WorkAreaGrid } from 'components/work-area-grid';
import { TcLawPage } from 'components/_page';
import { NextPage } from 'next';

const contact: NextPage = () => {
  return (
    <TcLawPage title="Oblasti rada">
      <h2 className="heading-underlined">Oblasti Rada</h2>
      <WorkAreaGrid />
    </TcLawPage>
  );
};

export default contact;
