import useSize from '@react-hook/size';
import classNames from 'classnames';
import { lawyers } from 'data/employees';
import { useRef, useState } from 'react';
import styles from './carousel.module.scss';
import { Icons } from './icons';
import { EmployeeCard } from './employee-card';
import { CarouselHelper } from 'util/carousel-util';

const lrIconSize = 30;

export function EmployeeCarousel() {
  const carouselOuterRef = useRef<HTMLDivElement>(null);
  const [width] = useSize(carouselOuterRef);
  const [fstLawyerShownIndex, setFstLawyerShownIdx] = useState(0);
  const carouselHlpr = new CarouselHelper(lawyers, fstLawyerShownIndex, width);

  const renderLRButtons = carouselHlpr.shouldRenderLRButtons();

  return (
    <section className={styles.outer} ref={carouselOuterRef}>
      {renderLRButtons && (
        <LButton
          disabled={fstLawyerShownIndex < 1}
          onClick={() => setFstLawyerShownIdx(carouselHlpr.prevFstItemIndex())}
        />
      )}
      <div className={styles.carousel}>
        {lawyers.map((lawyer, idx) => (
          // Render all employees, even hidden, to avoid jank
          <EmployeeCard
            employee={lawyer}
            key={lawyer.key}
            hide={carouselHlpr.shouldHideItem(idx)}
          />
        ))}
      </div>
      {renderLRButtons && (
        <RButton
          disabled={!carouselHlpr.isShowNextPossible()}
          onClick={() => setFstLawyerShownIdx(carouselHlpr.nextFstItemIndex())}
        />
      )}
    </section>
  );
}

function LButton({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <div className={styles['lr-arrow-container']}>
      <button
        aria-label="Go to previous carousel image"
        aria-disabled={disabled}
        className={classNames({
          [styles['lr-arrow']]: true,
          [styles.disabled]: disabled,
        })}
        onClick={() => !disabled && onClick()}
      >
        <Icons.Left size={lrIconSize} />
      </button>
    </div>
  );
}

function RButton({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <div className={styles['lr-arrow-container']}>
      <button
        aria-label="Go to next carousel image"
        aria-disabled={disabled}
        className={classNames({
          [styles['lr-arrow']]: true,
          [styles.disabled]: disabled,
        })}
        onClick={() => !disabled && onClick()}
      >
        <Icons.Right size={lrIconSize} />
      </button>
    </div>
  );
}

// TODO
// function LRButton({
//   disabled,
//   onClick,
//   ArrowIcon,
//   ariaLabel,
// }: {
//   disabled: boolean;
//   onClick: () => void;
//   ArrowIcon: typeof Icons.Left;
//   ariaLabel: string;
// }) {
//   return (
//     <div className={styles['lr-arrow-container']}>
//       <button
//         aria-label={ariaLabel}
//         aria-disabled={disabled}
//         className={classNames({
//           [styles['lr-arrow']]: true,
//           [styles.disabled]: disabled,
//         })}
//         onClick={() => !disabled && onClick()}
//       >
//         <ArrowIcon />
//       </button>
//     </div>
//   );
// }
