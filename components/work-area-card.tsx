import Link from 'next/link';
import { ReactNode } from 'react';
import { FaChevronCircleRight } from 'react-icons/fa';
import styles from './work-area-card.module.scss';

export const workElemHeaderIconSize = 35;

export function WorkAreaCard({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <div className={styles['work-area-card']}>
      {children}
      <div className={styles['work-area-bottom']}>
        <Link href={href}>
          <a className={styles['work-area-right-arrow']}>
            <FaChevronCircleRight size={30} />
          </a>
        </Link>
      </div>
    </div>
  );
}
