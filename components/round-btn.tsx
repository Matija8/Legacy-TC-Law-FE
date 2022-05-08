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
      })}
      disabled={disabled}
      onClick={() => !disabled && onClick?.()}
      style={style}
      type={type}
    >
      <style jsx>
        {`
          .mail-btn:hover {
            ${options.hoverEffects && !disabled ? 'opacity: 0.9' : ''};
          }

          .animated-btn:active {
            box-shadow: none;
            ${options.translate ? 'transform: translateY(1px)' : ''};
          }
        `}
      </style>
      {children}
    </button>
  );
}
