import Link from 'next/link';

const NotFound = () => {
  return (
    <main className='m-auto my-10 grid w-[90%] max-w-7xl content-center justify-center text-center '>
      <h1 className='text-[200px] font-bold text-gray-500'>404</h1>
      <p className=' my-2'>Page Not Found</p>
      <Link href='/' className='my-2 text-2xl text-primary'>
        Go Home
      </Link>
    </main>
  );
};
export default NotFound;
