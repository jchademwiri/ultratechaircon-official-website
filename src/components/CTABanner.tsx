import { appMessage } from "@/data/links";
import { ButtonSolid } from ".";

const CTABanner = () => {
  return (
    <section className="position: relative flex max-h-[400px] flex-col justify-center gap-5 bg-[url('/hero.jpg')] bg-cover bg-fixed bg-center py-10 text-white">
      <div className="z-index: 1 absolute bottom-0 left-0 right-0 top-0 bg-blue-950 opacity-80"></div>
      <div className=" position: z-index: 2 relative m-auto w-[90%] max-w-3xl text-center">
        <h3 className="text-3xl font-bold">
          In Need of Commercial, Industrial Installation Services in Cape Town?
        </h3>
        <p className="my-4 text-center text-lg">
          We offer free site inspection for industrial and commercial projects
          (terms apply). Get In Touch For Free Assistance.
        </p>
        <div className="my-10">
          <ButtonSolid url={appMessage} label="Request Quote" />
        </div>
      </div>
    </section>
  );
};
export default CTABanner;
