import { XImage } from 'components/image';
import { MailIcon } from 'components/mailIcon';
import { Employee } from 'data/employees';
import Link from 'next/link';
import { CSSProperties } from 'react';
import { gColors } from 'styles/style-constants';
import { getPageHrefForEmployee } from 'util/employee-util';
import { EmployeePhoto } from './employee-photo';
import styles from './employee.module.scss';

export function EmployeeCard({
  hide,
  employee,
}: {
  employee: Employee;
  hide?: boolean;
}) {
  const { name, surname, title, pagePath, memberPhotoId, email } = employee;
  const pageHref = getPageHrefForEmployee(employee);
  const pagePathLinkStyle: CSSProperties = {
    ...(!pagePath && { pointerEvents: 'none' }),
  };
  return (
    <article
      className={styles['lawyer-info']}
      style={{ ...(hide && { display: 'none' }) }}
    >
      <EmployeePhoto employee={employee} />

      <div className={styles['member-details']}>
        <div className={styles['member-details-row-1']}>
          <Link href={pageHref}>
            <a style={{ ...pagePathLinkStyle, fontSize: 16 }}>
              {name} {surname}
            </a>
          </Link>
          {email && (
            <a href={`mailto:${email}`}>
              <MailIcon size={30} color={gColors.red1} />
            </a>
          )}
        </div>
        <p>{title}</p>
      </div>
    </article>
  );
}
