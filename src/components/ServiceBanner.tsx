import { whatsapp } from "@/data/links";
import { ButtonSolid } from ".";

const ServiceBanner = () => {
  return (
    <section className="position: relative flex h-[500px] flex-col justify-center gap-5 bg-[url('/aircon-repairs.jpg')] bg-cover bg-center py-20 text-white">
      <div className="z-index: 1 absolute bottom-0 left-0 right-0 top-0 bg-blue-950 opacity-80"></div>
      <div className=" position: z-index: 2 relative m-auto w-[90%] max-w-3xl text-center">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="my-4 text-center text-lg">
          Specialists in Installation & Repairs on all types of air-conditioning
          units including inverters, ducted and cassette in Cape Town.
        </p>
        <div className="my-10">
          <ButtonSolid href={whatsapp} label="Request Quote" />
        </div>
      </div>
    </section>
  );
};
export default ServiceBanner;
