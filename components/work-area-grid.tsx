import {
  WorkAreaCard,
  workElemHeaderIconSize,
} from 'components/work-area-card';
import { workAreas } from 'data/oblasti-rada';
import styles from 'styles/Home.module.scss';

export function WorkAreaGrid() {
  return (
    <section className="work-areas-grid">
      {workAreas.map((workArea) => (
        <WorkAreaCard key={workArea.title} link="https:www.google.com">
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
