import { XImage } from 'components/image';
import { MailIcon } from 'components/mailIcon';
import { Employee } from 'data/employees';
import Link from 'next/link';
import { CSSProperties } from 'react';
import { gColors } from 'styles/style-constants';
import styles from './lawyer.module.scss';

export function Lawyer({
  name,
  surname,
  title,
  pagePath,
  memberPhotoId,
  email,
  hide,
}: Employee & {
  hide?: boolean;
}) {
  const pageHref = pagePath ? `/nas-tim/${pagePath}` : '#';
  const pagePathLinkStyle: CSSProperties = {
    ...(!pagePath && { pointerEvents: 'none' }),
  };
  return (
    <article
      className={styles['lawyer-info']}
      style={{ ...(hide && { display: 'none' }) }}
    >
      <div className={styles['photo-container']}>
        <Link href={pageHref}>
          <a style={pagePathLinkStyle}>
            <XImage
              style={{ cursor: 'pointer' }}
              className={styles.photo}
              src={`${process.env.basePath}/team/${memberPhotoId}.jpg`}
              alt={`${name} ${surname} ${title} photo`}
            />
          </a>
        </Link>
      </div>

      <div className={styles['member-details']}>
        <div className={styles['member-details-row-1']}>
          <Link href={pageHref}>
            <a style={{ ...pagePathLinkStyle, fontSize: 16 }}>
              {name} {surname}
            </a>
          </Link>
          {email && (
            <a href={`mailto:${email}`}>
              <MailIcon size={30} color={gColors.red1} />
            </a>
          )}
        </div>
        <p>{title}</p>
      </div>
    </article>
  );
}
