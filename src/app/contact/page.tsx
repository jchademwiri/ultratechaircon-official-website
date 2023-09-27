import { ButtonOutline, ContactBanner } from "@/components";
import { Mail, Navigation, Phone } from "lucide-react";

const Contact = () => {
  return (
    <main>
      <ContactBanner />
      <section className="m-auto my-7 grid w-[90%] max-w-7xl gap-4 py-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="grid min-h-[250px] place-items-center content-center rounded-sm bg-primary/10 p-6 ">
          <p>
            {" "}
            <Phone size={50} />
          </p>
          <p className="my-7">083 396 1172</p>
          <ButtonOutline href="tel:+27737671328" label="Call Us Now" />
        </div>
        <div className="grid min-h-[250px] place-items-center content-center rounded-sm bg-primary/10 p-6">
          <p>
            {" "}
            <Mail size={50} />
          </p>
          <p className="my-7">support@ultratechaircon.co.za</p>
          <ButtonOutline
            href="mailto:support@ultratechaircon.co.za"
            label="Email Us Now"
          />
        </div>
        <div className="grid min-h-[250px] place-items-center content-center rounded-sm bg-primary/10 p-6">
          <p>
            <Navigation size={50} />
          </p>
          <p className="my-7"> Glen Austin. Johannesburg. 1685</p>

          <ButtonOutline
            href="https://maps.app.goo.gl/NRzi6qjm9dWDpii68"
            label="Get Directions"
          />
        </div>
      </section>
    </main>
  );
};
export default Contact;
