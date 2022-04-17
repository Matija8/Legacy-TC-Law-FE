import { gTextConstants, gLinks } from 'data/constants';
import { BsLinkedin } from 'react-icons/bs';
import { gColors } from 'styles/style-constants';
import { FirmAddress } from './address';
import { MailIcon } from './mailIcon';

const iconSize = 28;

export function ContactGroup() {
  return (
    <>
      <style jsx>{`
        .icon-flex-row {
          display: flex;
          gap: 0.5em;
        }
      `}</style>
      <h4>Advokatska kancelarija</h4>

      <FirmAddress />

      <p>
        E-mail: <a href={gLinks.email}>{gTextConstants.officeEmail}</a>
      </p>

      <div className="icon-flex-row">
        <a href={gLinks.linkedin} aria-label="linkedin">
          <BsLinkedin size={iconSize} color={gColors.red1} />
        </a>
        <a href={gLinks.email} aria-label="email">
          <MailIcon size={iconSize} />
        </a>
      </div>
    </>
  );
}
