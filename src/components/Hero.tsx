import { whatsapp } from '@/data/links';
import { ButtonSolid } from '.';

const Hero = () => {
  return (
    <section className="flex flex-col gap-5 justify-center py-20 h-[500px] text-white bg-blue-800 bg-[url('/hero.jpg')] bg-cover bg-fixed bg-center position: relative">
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-blue-950 opacity-70 z-index: 1'></div>
      <div className=' max-w-7xl m-auto w-[90%] text-center position: relative z-index: 2'>
        <h1 className='text-6xl font-bold'>Air conditioner Instalation</h1>
        <p className='my-4 text-lg grid text-center'>
          <span className=''>
            We are specialists in all commercial & industrial{' '}
          </span>
          <span className=''>All repairs come with services guarantee </span>
        </p>
        <div className='my-5'>
          <ButtonSolid href={whatsapp} label='Request Quote' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
