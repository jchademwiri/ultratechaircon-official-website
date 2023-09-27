import { airconImage } from "@/data/images";
import Image from "next/image";
import { ButtonOutline } from ".";

const ServicesCTA = () => {
  return (
    <section className="my-24">
      <div className="m-auto grid w-[90%] max-w-7xl  gap-5 bg-gray-800  text-white md:grid-cols-2">
        <div className="grid content-center p-10">
          <h3 className="my-2 text-2xl font-semibold">Ultratech Aircon</h3>
          <span className="my-4 h-[1px] w-14 rounded-full bg-primary"></span>
          <p className="my-4">
            Our goal is to provide our clients with the highest quality
            installation services, on schedule, and on budget along with
            outstanding customer service. We understand that time and cost need
            a balancing skills in order to deliver service that surpasses
            customer expectations.
          </p>
          <ButtonOutline href="/services" label="View Services" />
        </div>
        <div>
          <Image
            src={airconImage}
            alt="Samsung Aircon"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default ServicesCTA;
