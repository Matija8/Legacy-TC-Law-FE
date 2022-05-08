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
  return <LRButton disabled={disabled} onClick={onClick} isRight={false} />;
}

function RButton({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: () => void;
}) {
  return <LRButton disabled={disabled} onClick={onClick} isRight={true} />;
}

function LRButton({
  disabled,
  onClick,
  isRight,
}: {
  disabled: boolean;
  onClick: () => void;
  isRight: boolean;
}) {
  return (
    <div className={styles['lr-arrow-container']}>
      <button
        aria-label={
          isRight
            ? 'Go to next carousel image'
            : 'Go to previous carousel image'
        }
        aria-disabled={disabled}
        className={classNames(styles['lr-arrow'], {
          [styles.disabled]: disabled,
        })}
        disabled={disabled}
        onClick={onClick}
      >
        {isRight ? (
          <Icons.Right size={lrIconSize} />
        ) : (
          <Icons.Left size={lrIconSize} />
        )}
      </button>
    </div>
  );
}
