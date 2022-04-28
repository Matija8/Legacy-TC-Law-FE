import CircularProgress from '@mui/material/CircularProgress';
import { RoundBtn } from './round-btn';

export function RoundSubmittingBtn({
  isSubmitting,
  disabled = false,
  text = 'Pošaljite',
}: {
  isSubmitting: boolean;
  disabled?: boolean;
  text?: string;
}) {
  return (
    <RoundBtn
      type="submit"
      disabled={disabled || isSubmitting}
      animationDisabled={isSubmitting}
      // https://stackoverflow.com/questions/61557815/react-formik-onsubmit-async-called-twice
      // onClick={() => {
      //   if (!isSubmitting && !disabled) {
      //     submitForm();
      //   }
      // }}
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
