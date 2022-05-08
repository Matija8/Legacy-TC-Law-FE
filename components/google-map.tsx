import { gLinks } from 'data/constants';

export function GoogleMap() {
  return (
    <div style={{ minHeight: '25rem' }}>
      <iframe
        style={{ border: 0 }}
        height={'100%'}
        width={'100%'}
        src={gLinks.maps}
      ></iframe>
    </div>
  );
}
