import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import {
  WorkAreaCard,
  workElemHeaderIconSize,
} from 'components/work-area-card';
import { workAreas } from 'data/oblasti-rada';
import { NextPage } from 'next';
import styles from 'styles/Home.module.scss';

const contact: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <style jsx>{``}</style> */}
      <SiteHead title="Oblasti rada" />
      <Header />
      <main className={styles.main}>
        <h2 className="header-underlined">Oblasti rada</h2>
        <section className="work-areas-grid">
          {workAreas.map((workArea) => (
            <WorkAreaCard key={workArea.title} link="https:www.google.com">
              {workArea.icon({ size: workElemHeaderIconSize })}
              <h3>
                {workArea.title.split('\n').map((titleLine) => (
                  <>
                    {titleLine}
                    <br />
                  </>
                ))}
              </h3>
              <p>{workArea.text}..</p>
            </WorkAreaCard>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default contact;
