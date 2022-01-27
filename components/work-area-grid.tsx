import {
  WorkAreaCard,
  workElemHeaderIconSize,
} from 'components/work-area-card';
import { workAreas } from 'data/oblasti-rada';
import styles from './work-area-grid.module.scss';

export function WorkAreaGrid({ slice }: { slice?: number }) {
  const slicedWorkAreas = slice ? workAreas.slice(0, slice) : workAreas;
  return (
    <section className={styles['work-areas-grid']}>
      {slicedWorkAreas.map((workArea) => (
        <WorkAreaCard
          key={workArea.title}
          href={`/oblasti-rada/${workArea.id}`}
        >
          {workArea.icon({ size: workElemHeaderIconSize })}
          <h3 className="pre-wrap">{workArea.title}</h3>
          <p>{substringToWord(workArea.text)}..</p>
        </WorkAreaCard>
      ))}
    </section>
  );
}

function substringToWord(text: string, count = 120) {
  const initial = text.substring(0, count);
  const words = (initial ?? '').split(' ');
  words.pop();
  const removedLastWord = words.join(' ');
  return removedLastWord;
}
