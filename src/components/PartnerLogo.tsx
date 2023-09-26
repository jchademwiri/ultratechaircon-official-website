import { TLogo } from '@/lib/types';
import Image from 'next/image';

const PartnerLogo = ({ logo, alt }: TLogo) => {
  return (
    <Image src={logo} alt={alt} className="h-28 w-full object-contain p-2" />
  );
};
export default PartnerLogo;
