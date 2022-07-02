import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from 'next/link';
import { CSSProperties } from 'react';

// https://mui.com/material-ui/react-checkbox/#formgroup
// https://mui.com/material-ui/api/checkbox/

// TODO: Checkbox required message
// https://stackoverflow.com/questions/38852823/how-to-change-checkbox-required-message

interface Props {
  value: boolean;
  onChange: Parameters<typeof Checkbox>[0]['onChange'];
  // error?: string; // TODO
}

export function PrivacyPolicyCheckbox({ value, onChange }: Props) {
  // TODO: privacy error
  return (
    <FormControlLabel
      control={<Checkbox value={value} onChange={onChange} required />}
      name="readPrivacy"
      label={
        <p style={{ margin: 0 }}>
          Potvrđujem da sam pročitao i da sam saglasan sa{' '}
          <Link href="/politika-privatnosti">
            <a style={linkStyle}>Politikom privatnosti</a>
          </Link>
        </p>
      }
    />
  );
}

const linkStyle: CSSProperties = {
  // textAlign: 'initial', // ??
  // whiteSpace: 'nowrap', // Don't line break the link
};
