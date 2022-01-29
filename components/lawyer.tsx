import { XImage } from 'components/image';
import { MailIcon } from 'components/mailIcon';
import { gColors } from 'styles/style-constants';
import styles from './lawyer.module.scss';

export function Lawyer({
  name,
  surname,
  title,
  memberPhotoId,
  email,
}: {
  name: string;
  surname: string;
  title: string;
  memberPhotoId: string;
  email?: string;
}) {
  return (
    <article className={styles['lawyer-info']}>
      <div className={styles['photo-container']}>
        <XImage
          style={{ cursor: 'pointer' }}
          className={styles.photo}
          src={`${process.env.basePath}/team/${memberPhotoId}.jpg`}
          alt={`${name} ${surname} ${title} photo`}
        />
      </div>

      <div className={styles['member-details']}>
        <div className={styles['member-details-row-1']}>
          <p style={{ fontSize: 16 }}>
            {name} {surname}
          </p>
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
