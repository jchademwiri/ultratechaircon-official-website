import { whatsapp } from "@/data/links";
import { ButtonSolid } from ".";

const ContactBanner = () => {
  return (
    <section className="position: relative flex max-h-[400px] flex-col justify-center gap-5 bg-[url('/aircon-repairs.jpg')] bg-cover bg-center py-28 text-white">
      <div className="z-index: 1 absolute bottom-0 left-0 right-0 top-0 bg-blue-950 opacity-80"></div>
      <div className=" position: z-index: 2 relative m-auto w-[90%] max-w-3xl text-center">
        <h2 className="text-3xl font-bold">Ready to get started?</h2>
        <p className="my-6 text-center text-lg">
          Talk to an expert now to get the help you need for your needs.
        </p>
        <ButtonSolid href={whatsapp} label="Chat on WhatsApp" />
      </div>
    </section>
  );
};
export default ContactBanner;
