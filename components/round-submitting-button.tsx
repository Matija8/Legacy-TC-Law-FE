import CircularProgress from '@mui/material/CircularProgress';
import { RoundBtn } from './round-btn';

export function RoundSubmittingBtn({
  submitForm,
  isSubmitting,
  text = 'Pošaljite',
}: {
  submitForm: () => void;
  isSubmitting: boolean;
  text?: string;
}) {
  return (
    <RoundBtn
      type="submit"
      onClick={() => {
        if (!isSubmitting) {
          // TODO: Disabled prop on btn
          submitForm();
        }
      }}
      style={{ height: 40 }}
    >
      {isSubmitting ? (
        <CircularProgress size={20} style={{ color: 'white' }} />
      ) : (
        text
      )}
    </RoundBtn>
  );
}
