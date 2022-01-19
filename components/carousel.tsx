import styles from './carousel.module.scss';
import { useState } from 'react';
import { employees as employeesDep } from 'data/employees';
import { TeamMember } from './employee';
import { Icons } from './icons';

export function EmployeeCarousel() {
  const [idx, setIdx] = useState(0);
  const take = 3;
  const lrIconSize = 30;
  // const employees = [...employeesx, ...employeesx];
  const employees = employeesDep;

  return (
    <div className={styles.outer}>
      <button
        className={`${styles['lr-arrow']} ${idx < 1 ? 'disabled' : ''}`}
        onClick={() => {
          setIdx(Math.max(0, idx - 1));
        }}
      >
        <Icons.Left size={lrIconSize} />
      </button>
      <div className={styles.carousel}>
        {employees.slice(idx, idx + take).map((emp) => (
          <TeamMember {...emp} key={emp.key} />
        ))}
      </div>
      <button
        className={`${styles['lr-arrow']} ${
          idx >= employees.length - take ? 'disabled' : ''
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
