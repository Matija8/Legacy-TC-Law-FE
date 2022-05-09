import classNames from 'classnames';
import { ButtonHTMLAttributes, CSSProperties } from 'react';
import roundBtnStyles from './round-btn.module.scss';

export function RoundBtn({
  disabled = false,
  className = '',
  children,
  translate = true,
  hoverEffects = true,
  onClick,
  style,
  type = 'button',
}: {
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  translate?: boolean;
  hoverEffects?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}) {
  return (
    <button
      className={classNames(roundBtnStyles['round-btn'], className, {
        [roundBtnStyles['round-btn-disabled']]: disabled,
        [roundBtnStyles['animated-btn']]: !disabled && translate,
        [roundBtnStyles['hover-opacity-btn']]: !disabled && hoverEffects,
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
