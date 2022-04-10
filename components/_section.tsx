import { ReactNode } from 'react';
import homeStyles from 'styles/Home.module.scss';

// Section to place in main area
// TODO: Find and replace <section className={homeStyles.section}...>
export function TcLawSection({ children }: { children: ReactNode }) {
  return <section className={homeStyles.section}>{children}</section>;
}
