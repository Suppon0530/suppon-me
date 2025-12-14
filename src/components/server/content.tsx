import Image from 'next/image';

export default function Content() {
  return (
    <div className='py-20 xl:py-28'>
      <Image src='/bg_top.webp' alt='bg-top' width={500} height={140} priority />
      <div className='bg-base-sub-1'>アプリ紹介</div>
      <Image src='/bg_bottom.webp' alt='bg-bottom' width={500} height={140} priority />
    </div>
  );
}
