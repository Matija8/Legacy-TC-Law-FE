import CircularProgress from '@mui/material/CircularProgress';
import { RoundBtn } from './round-btn';

export function RoundSubmittingBtn({
  submitForm,
  isSubmitting,
}: {
  submitForm: () => void;
  isSubmitting: boolean;
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
        'Pošaljite'
      )}
    </RoundBtn>
  );
}
