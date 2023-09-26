import { ServiceBanner, ServiceCard } from '@/components';
import { services } from '@/data/services';
import { TService } from '@/lib/types';
import { randomUUID } from 'crypto';

const Services = () => {
  return (
    <main>
      <ServiceBanner />
      <section className='py-5 gap-6 grid md:grid-cols-3 sm:grid-cols-2 max-w-7xl m-auto my-7 w-[90%]'>
        {services.map(({ picture, title, desc, link }: TService) => (
          <ServiceCard
            key={randomUUID()}
            picture={picture}
            title={title}
            desc={desc}
            link={link}
          />
        ))}
      </section>
    </main>
  );
};
export default Services;
