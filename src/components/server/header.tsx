import Image from 'next/image';

export default function Header() {
  return (
    <div className='fixed top-0 left-0 z-10 flex w-full items-center xl:right-0 xl:left-auto xl:h-screen xl:w-[calc((100vw-500px)/2)]'>
      <div className='bg-base-0 mx-auto w-full xl:max-w-75 xl:bg-transparent'>
        <Image
          className='hidden xl:block xl:h-full xl:w-full'
          src='/suppon_logo_512.png'
          alt='鼈（すっぽん）ロゴ'
          width={300}
          height={300}
          priority
        />
        <Image
          className='block h-auto w-36 xl:hidden xl:w-auto'
          src='/suppon_logo_1024-512.png'
          alt='鼈（すっぽん）ロゴ'
          width={200}
          height={100}
          priority
        />
      </div>
    </div>
  );
}
