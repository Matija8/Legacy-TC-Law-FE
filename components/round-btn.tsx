import classNames from 'classnames';
import { ButtonHTMLAttributes, CSSProperties } from 'react';
import { gColors } from 'styles/style-constants';

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
      className={classNames({
        'mail-btn': true,
        [className]: true,
        'mail-btn-disabled': disabled,
        'animated-btn': !disabled && !animationDisabled,
      })}
      onClick={() => !disabled && onClick?.()}
      style={style}
      type={type}
    >
      <style jsx>
        {`
          .mail-btn {
            background-color: ${gColors.red1};
            padding: 12px 32px;
            font-size: 0.9em;
            color: white;
            border-radius: 30px;
            min-width: 180px;
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 1px;
            cursor: pointer;

            outline: none;
            border: 0;
          }

          .animated-btn {
            transition: all 0.1s linear;
          }

          .mail-btn-disabled {
            color: #838383;
            background-color: #cccccc;
          }

          .mail-btn:hover {
            ${(options.hoverEffects && !disabled) ? 'opacity: 0.9' : ''};
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
