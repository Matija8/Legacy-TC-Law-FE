import { XImage } from 'components/image';
import { Employee } from 'data/employees';
import Link from 'next/link';
import { CSSProperties } from 'react';
import { EmployeeFns } from 'util/employee-util';
import styles from './employee.module.scss';

export function EmployeePhoto({ employee }: { employee: Employee }) {
  const { name, surname, title, pagePath, memberPhotoId } = employee;
  const pageHref = EmployeeFns.getPageHref(employee);
  const pagePathLinkStyle: CSSProperties = {
    ...(!pagePath && { pointerEvents: 'none' }),
  };
  return (
    <div className={styles['photo-container']}>
      <Link href={pageHref}>
        <a style={pagePathLinkStyle}>
          <XImage
            style={{ cursor: 'pointer' }}
            className={styles.photo}
            src={`${process.env.basePath}/team/${memberPhotoId}.jpg`}
            alt={`${name} ${surname} ${title} photo`}
          />
        </a>
      </Link>
    </div>
  );
}
