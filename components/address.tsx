import { CSSProperties } from 'react';

// TODO: Styles!

export function PhoneNumberLink({
  style = { color: 'grey' },
}: {
  style?: CSSProperties;
}) {
  return (
    <a style={style} href="tel:+381113345544">
      (+381 11) 334-55-44
    </a>
  );
}

export function TelFax({
  pStyle = { color: 'grey' },
}: {
  pStyle?: CSSProperties;
}) {
  return (
    <p style={pStyle}>
      Tel/Fax: <PhoneNumberLink />; 334-52-52; 334-55-44
    </p>
  );
}

const gMapsLink =
  'https://www.google.com/maps/place/Trifunovic%26Co+Law+Office/@44.8098279,20.4600349,15z/data=!4m5!3m4!1s0x475a7aa8ab86039f:0x184d5a50bfafe45d!8m2!3d44.8086604!4d20.4636218';

export function FirmAddress({
  aStyle = { color: 'grey' },
}: {
  aStyle?: CSSProperties;
}) {
  return (
    <>
      <a style={aStyle} href={gMapsLink}>
        Kneza Miloša 10, 11000 Beograd, Srbija
      </a>
      <TelFax />
    </>
  );
}
