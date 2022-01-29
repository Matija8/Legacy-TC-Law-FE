import useSize from '@react-hook/size';
import classNames from 'classnames';
import { lawyers } from 'data/employees';
import { useRef, useState } from 'react';
import { clamp } from 'util/helpers';
import styles from './carousel.module.scss';
import { Icons } from './icons';
import { Lawyer } from './lawyer';

const lrIconSize = 30;

export function EmployeeCarousel() {
  const carouselOuterRef = useRef<HTMLDivElement>(null);
  const [width] = useSize(carouselOuterRef);

  const [idx, setIdx] = useState(0);
  const take = clamp(1, Math.floor((width - 20) / 250), 3);

  return (
    <section className={styles.outer} ref={carouselOuterRef}>
      <LButton
        disabled={idx < 1}
        onClick={() => setIdx(Math.max(0, idx - 1))}
      />
      <div className={styles.carousel}>
        {lawyers.slice(idx, idx + take).map((person) => (
          <Lawyer {...person} key={person.key} />
        ))}
      </div>
      <RButton
        disabled={idx >= lawyers.length - take}
        onClick={() => setIdx(Math.min(lawyers.length - take, idx + 1))}
      />
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
        className={classNames({
          [styles['lr-arrow']]: true,
          [styles.disabled]: disabled,
        })}
        onClick={onClick}
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
        className={classNames({
          [styles['lr-arrow']]: true,
          [styles.disabled]: disabled,
        })}
        onClick={onClick}
      >
        <Icons.Right size={lrIconSize} />
      </button>
    </div>
  );
}
