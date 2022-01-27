import styles from './carousel.module.scss';
import { useState } from 'react';
import { employees as employeesDep } from 'data/employees';
import { TeamMember } from './employee';
import { Icons } from './icons';
import { useWindowDimensions } from 'hooks/use-window-dimensions-hook';
import { breakPointTablet } from 'styles/breakpoints';

export function EmployeeCarousel() {
  const { width } = useWindowDimensions();
  // alert(width);

  const [idx, setIdx] = useState(0);
  const take = width > breakPointTablet ? 3 : 1;
  const lrIconSize = 30;
  // const employees = [...employeesx, ...employeesx];
  const employees = employeesDep;

  return (
    <div className={styles.outer}>
      <button
        className={`${styles['lr-arrow']} ${idx < 1 ? styles.disabled : ''}`}
        onClick={() => {
          setIdx(Math.max(0, idx - 1));
        }}
      >
        <Icons.Left size={lrIconSize} />
      </button>
      <div className={styles.carousel}>
        {employees.slice(idx, idx + take).map((emp) => (
          <article style={{ height: 380 }} key={emp.key}>
            <TeamMember {...emp} />
          </article>
        ))}
      </div>
      <button
        className={`${styles['lr-arrow']} ${
          idx >= employees.length - take ? styles.disabled : ''
        }`}
        onClick={() => {
          setIdx(Math.min(employees.length - take, idx + 1));
        }}
      >
        <Icons.Right size={lrIconSize} />
      </button>
    </div>
  );
}
