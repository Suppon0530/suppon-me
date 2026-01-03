import Image from 'next/image';

export default function Header() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center py-8 xl:fixed xl:top-0 xl:right-0 xl:left-auto xl:h-screen xl:w-[calc((100vw-500px)/2)] xl:py-0'>
      <h1 className='w-full max-w-75'>
        <Image
          className='xl:block xl:h-full xl:w-full'
          src='/suppon_logo_512.png'
          alt='鼈（すっぽん）ロゴ'
          width={300}
          height={300}
          priority
        />
      </h1>
      <div className='flex w-full items-center justify-center gap-8'>
        <a
          className='h-full'
          href='https://x.com/Suppon0530'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            className='h-12 w-auto'
            src='/logo.svg'
            alt='Xロゴ'
            width={98}
            height={100}
            priority
          />
        </a>
        <a
          className='h-full'
          href='https://github.com/Suppon0530'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            className='h-12 w-auto'
            src='/github-mark-white.svg'
            alt='GitHubロゴ'
            width={98}
            height={96}
            priority
          />
        </a>
      </div>
    </div>
  );
}
