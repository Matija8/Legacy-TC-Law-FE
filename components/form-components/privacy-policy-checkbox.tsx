import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from 'next/link';
import { CSSProperties } from 'react';

// https://mui.com/material-ui/react-checkbox/#formgroup
// https://mui.com/material-ui/api/checkbox/

// TODO: Checkbox required message
// https://stackoverflow.com/questions/38852823/how-to-change-checkbox-required-message

type CheckboxProps = Parameters<typeof Checkbox>[0];

interface Props {
  // You need the name field for Formik's onChange
  // https://formik.org/docs/api/formik#handlechange-e-reactchangeeventany--void
  name: string;
  value: boolean;
  onChange: CheckboxProps['onChange'];
  // You need onBlur for Formik touched
  // https://github.com/jaredpalmer/formik/issues/2091
  onBlur: CheckboxProps['onBlur'];
  // error?: string; // TODO
}

export function PrivacyPolicyCheckbox({
  name,
  value,
  onChange,
  onBlur,
}: Props) {
  // TODO: Show privacy error text if touched
  const checkbox = (
    <Checkbox
      name={name}
      value={value}
      checked={value}
      // You need `checked`, or you won't reset on form submit!
      // https://stackoverflow.com/questions/70165035/how-to-use-material-ui-checkbox-with-formik
      onChange={onChange}
      onBlur={onBlur}
      required
    />
  );
  return (
    <FormControlLabel
      control={checkbox}
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
