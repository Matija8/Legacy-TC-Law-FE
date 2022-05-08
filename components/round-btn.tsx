import classNames from 'classnames';
import { ButtonHTMLAttributes, CSSProperties } from 'react';
import roundBtnStyles from './round-btn.module.scss';

export function RoundBtn({
  disabled = false,
  className = '',
  children,
  options = { hoverEffects: true, translate: true },
  onClick,
  style,
  animationDisabled,
  type = 'button',
}: {
  disabled?: boolean;
  animationDisabled?: boolean;
  className?: string;
  children: React.ReactNode;
  options?: { hoverEffects: boolean; translate: boolean };
  onClick?: () => void;
  style?: CSSProperties;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}) {
  return (
    <button
      className={classNames(roundBtnStyles['round-btn'], className, {
        [roundBtnStyles['round-btn-disabled']]: disabled,
        [roundBtnStyles['animated-btn']]: !disabled && !animationDisabled,
        [roundBtnStyles['hover-opacity-btn']]:
          !disabled && options.hoverEffects,
        [roundBtnStyles['animated-btn']]: !disabled && options.translate,
      })}
      disabled={disabled}
      onClick={() => !disabled && onClick?.()}
      style={style}
      type={type}
    >
      {children}
    </button>
  );
}
