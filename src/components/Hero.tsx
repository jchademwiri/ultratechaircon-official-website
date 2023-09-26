import { whatsapp } from "@/data/links";
import { ButtonSolid } from ".";

const Hero = () => {
  return (
    <section className="position: relative flex h-[500px] flex-col justify-center gap-5 bg-blue-800 bg-[url('/hero.jpg')] bg-cover bg-fixed bg-center py-20 text-white">
      <div className="z-index: 1 absolute bottom-0 left-0 right-0 top-0 bg-blue-950 opacity-70"></div>
      <div className=" position: z-index: 2 relative m-auto w-[90%] max-w-7xl text-center">
        <h1 className="text-6xl font-bold">Air conditioner Instalation</h1>
        <p className="my-4 grid text-center text-lg">
          <span className="">
            We are specialists in all commercial & industrial{" "}
          </span>
          <span className="">All repairs come with services guarantee </span>
        </p>
        <div className="my-10">
          <ButtonSolid href={whatsapp} label="Request Quote" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
