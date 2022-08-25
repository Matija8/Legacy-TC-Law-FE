import homeStyles from 'styles/Home.module.scss';
import { NextPage } from 'next';

const DeploymentVersionDebugPage: NextPage = () => {
  const version = 1;
  return (
    <div className={homeStyles['root-container']}>
      <div
        style={{
          margin: '100px 100px 5px',
          outline: '3px solid red',
          width: 'fit-content',
          padding: 10,
        }}
      >
        <h3>Version {version}</h3>
      </div>
    </div>
  );
};

export default DeploymentVersionDebugPage;
