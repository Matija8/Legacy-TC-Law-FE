import { ImMail4 } from 'react-icons/im';
import { gColors } from 'styles/style-constants';

export function MailIcon({ size, color }: { size: number; color?: string }) {
  return <ImMail4 size={size} color={color ?? gColors.red1} />;
}
