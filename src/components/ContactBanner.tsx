import { whatsapp } from '@/data/links';
import { ButtonSolid } from '.';

const ContactBanner = () => {
  return (
    <section className="flex flex-col gap-5 justify-center py-28 max-h-[400px] text-white bg-[url('/aircon-repairs.jpg')] bg-cover bg-center position: relative">
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-blue-950 opacity-80 z-index: 1'></div>
      <div className=' max-w-3xl m-auto w-[90%] text-center position: relative z-index: 2'>
        <h2 className='text-3xl font-bold'>Ready to get started?</h2>
        <p className='my-4 text-lg text-center'>
          Talk to an expert now to get the help you need for your needs.
        </p>
        <div className='my-10'>
          <ButtonSolid href={whatsapp} label='Chat on WhatsApp' />
        </div>
      </div>
    </section>
  );
};
export default ContactBanner;
