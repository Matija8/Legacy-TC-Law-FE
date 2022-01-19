import { CSSProperties } from 'react';

export const XImage = (props: {
  src: string;
  alt: string;
  style?: CSSProperties;
  className?: string;
  height?: number | string;
  width?: number | string;
}) => <img {...props} alt={props.alt} />;
