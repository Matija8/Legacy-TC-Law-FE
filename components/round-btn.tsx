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
            padding: 13px 22px;
            font-size: 0.9em;
            color: white;
            border-radius: 30px;
          }
        `}
      </style>
      {children}
    </div>
  );
}
