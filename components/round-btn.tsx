import { CSSProperties } from 'react';
import { gColors } from 'styles/style-constants';

export function RoundBtn({
  className = '',
  children,
  options = { hoverEffects: true, translate: true },
  onClick,
  style,
}: {
  className?: string;
  children?: React.ReactNode;
  options?: { hoverEffects: boolean; translate: boolean };
  onClick?: () => void;
  style?: CSSProperties;
}) {
  return (
    <button className={`${className} mail-btn`} onClick={onClick} style={style}>
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

            transition: all 0.1s linear;
            outline: none;
            // box-shadow: 0 3px 0 black;
            border: 0;
          }

          .mail-btn:hover {
            ${options.hoverEffects ? 'opacity: 0.9' : ''};
          }

          .mail-btn:active {
            box-shadow: none;
            ${options.translate ? 'transform: translateY(1px)' : ''};
          }
        `}
      </style>
      {children}
    </button>
  );
}
