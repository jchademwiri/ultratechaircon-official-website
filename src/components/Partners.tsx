import { randomUUID } from 'crypto';
import { TLogo } from '@/lib/types';
import PartnerLogo from './PartnerLogo';
import { plogos } from '@/data/images';

const Partners = () => {
  return (
    <section className="my-24 bg-blue-950">
      <div className="m-auto w-[90%] max-w-7xl py-5">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 ">
          {plogos.map(({ logo, alt }: TLogo) => (
            <PartnerLogo key={randomUUID()} logo={logo} alt={alt} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Partners;
