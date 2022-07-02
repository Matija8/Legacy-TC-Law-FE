import IconButton from '@mui/material/IconButton';
import MuiSnackbar from '@mui/material/Snackbar';
import { IoMdClose } from 'react-icons/io';

// https://mui.com/material-ui/react-snackbar/

type SnackbarProps = Parameters<typeof MuiSnackbar>[0];

function DefaultAction({ onClose }: { onClose?: SnackbarProps['onClose'] }) {
  return (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={onClose as any}
    >
      <IoMdClose />
    </IconButton>
  );
}

export function Snackbar(props: SnackbarProps) {
  const { onClose } = props;
  return (
    <MuiSnackbar
      autoHideDuration={5000} // TODO: Not auto-hiding??
      action={<DefaultAction onClose={onClose} />}
      {...props}
    />
  );
}
