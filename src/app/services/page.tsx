import { ServiceBanner, ServiceCard } from "@/components";
import { services } from "@/data/services";
import { TService } from "@/lib/types";
import { randomUUID } from "crypto";

const Services = () => {
  return (
    <main>
      <ServiceBanner />
      <section className="m-auto my-7 grid w-[90%] max-w-7xl gap-6 py-5 sm:grid-cols-2 md:grid-cols-3">
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
