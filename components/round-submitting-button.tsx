import CircularProgress from '@mui/material/CircularProgress';
import { RoundBtn } from './round-btn';

export function RoundSubmittingBtn({
  submitForm,
  isSubmitting,
  disabled = false,
  text = 'Pošaljite',
}: {
  submitForm: () => void;
  isSubmitting: boolean;
  disabled?: boolean;
  text?: string;
}) {
  return (
    <RoundBtn
      type="submit"
      disabled={disabled}
      animationDisabled={isSubmitting}
      onClick={() => {
        if (!isSubmitting && !disabled) {
          // TODO: Disabled prop on btn
          submitForm();
        }
      }}
      style={{ height: 40 }}
    >
      {isSubmitting ? (
        <CircularProgress size={20} style={{ color: 'white' }} />
      ) : (
        text // Call to Action
      )}
    </RoundBtn>
  );
}
