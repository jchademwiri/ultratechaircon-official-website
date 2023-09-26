import { TButton } from '@/lib/types';
import Link from 'next/link';

const ButtonSolid = ({ href, label }: TButton) => {
  return (
    <Link
      href={href}
      className='px-5 py-3 bg-primary hover:bg-transparent border border-primary hover:border-white  max-w-fit rounded-sm font-medium tracking-wide text-white'
    >
      {label}
    </Link>
  );
};

const ButtonOutline = ({ href, label }: TButton) => {
  return (
    <Link
      href={href}
      className='px-5 py-3 hover:bg-primary tracking-wide  border hover:border-primary bg-transparent text-white rounded-sm font-medium'
    >
      {label}
    </Link>
  );
};
export { ButtonOutline, ButtonSolid };
