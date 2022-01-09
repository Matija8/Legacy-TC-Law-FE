import Link from 'next/link';
import { ReactNode } from 'react';
import { FaChevronCircleRight } from 'react-icons/fa';

export const workElemHeaderIconSize = 35;

export function WorkAreaCard({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <div className="work-area-card">
      {children}
      <div className="work-area-bottom">
        <Link href={href}>
          <a style={{ float: 'right' }} className="work-area-right-arrow">
            <FaChevronCircleRight size={30} />
          </a>
        </Link>
      </div>
    </div>
  );
}
