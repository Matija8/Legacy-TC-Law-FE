import { ReactNode } from 'react';
import { FaChevronCircleRight } from 'react-icons/fa';

export const workElemHeaderIconSize = 35;

export function WorkAreaCard({
  link,
  children,
}: {
  link: string; // TODO: Url?
  children: ReactNode;
}): JSX.Element {
  return (
    <div className="work-area-card">
      {children}
      <div className="work-area-bottom">
        <a
          className="work-area-right-arrow"
          href={link}
          style={{ float: 'right' }}
        >
          <FaChevronCircleRight size={30} />
        </a>
      </div>
    </div>
  );
}
