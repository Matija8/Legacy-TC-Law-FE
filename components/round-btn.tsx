import { gColors } from 'styles/style-constants';

export function RoundBtn({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`${className ?? ''} mail-btn`}>
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
          }

          .mail-btn:hover {
            opacity: 0.9;
          }

          .mail-btn:active {
            box-shadow: none;
            transform: translateY(1px);
          }
        `}
      </style>
      {children}
    </div>
  );
}
