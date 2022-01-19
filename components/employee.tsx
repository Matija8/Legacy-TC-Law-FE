import { XImage } from 'components/image';
import { MailIcon } from 'components/mailIcon';
import { gColors } from 'styles/style-constants';

export function TeamMember({
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
    <article>
      <style jsx>
        {`
          article {
            display: flex;
            flex-direction: column;
            width: 300px;
            align-items: center;
            gap: 1em;
          }

          .photo {
            object-fit: contain;
          }

          .member-details1 {
            display: flex;
            align-items: center;
            gap: 0.5em;
          }

          p {
            margin: 0;
          }
        `}
      </style>
      <XImage
        style={{ cursor: 'pointer' }}
        className="photo"
        src={`${process.env.basePath}/team/${memberPhotoId}.jpg`}
        alt={`${name} ${surname} ${title} photo`}
      />

      <div className="member-details1">
        <p style={{ fontSize: 16 }}>
          {name} {surname}
        </p>
        {email && (
          <a href={`mailto:${email}`}>
            <MailIcon size={30} color={gColors.red1} />
          </a>
        )}
      </div>
      <p style={{ margin: -10 }}>{title}</p>
    </article>
  );
}
