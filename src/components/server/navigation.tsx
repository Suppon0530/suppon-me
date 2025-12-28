import Image from 'next/image';

export default function Navigation() {
  return (
    <div className='flex h-full w-full items-center justify-center px-8 pt-32 xl:fixed xl:h-screen xl:w-[calc((100vw-500px)/2)] xl:pt-0'>
      <div className='grid w-full max-w-75 grid-cols-2 gap-x-12 gap-y-4'>
        <div>
          <Image
            className='mx-auto rounded-3xl border-2'
            src='/appicon_deep_sea_creatures.png'
            alt='深海生物の詰め放題'
            width={114}
            height={114}
            priority
          />
          <p className='text-base-sub-2 text-center text-sm'>深海生物の詰め放題</p>
          <p className='text-base-sub-2 text-center text-xs'>Deep Sea Creatures</p>
        </div>
        <div>
          <Image
            className='mx-auto rounded-3xl border-2'
            src='/appicon_kanji_shot.png'
            alt='漢字ショット'
            width={114}
            height={114}
            priority
          />
          <p className='text-base-sub-2 text-center'>漢字ショット</p>
          <p className='text-base-sub-2 text-center text-xs'>Kanji Shot</p>
        </div>
        <div>
          <Image
            className='mx-auto rounded-3xl border-2'
            src='/appicon_covered_with_mushrooms.png'
            alt='キノコまみれ'
            width={114}
            height={114}
            priority
          />
          <p className='text-base-sub-2 text-center'>キノコまみれ</p>
          <p className='text-base-sub-2 text-center text-xs'>Covered with Musurooms</p>
        </div>
        <div>
          <Image
            className='mx-auto rounded-3xl border-2'
            src='/appicon_yojijukugo_detective.png'
            alt='四字熟語探偵'
            width={114}
            height={114}
            priority
          />
          <p className='text-base-sub-2 text-center'>四字熟語探偵</p>
          <p className='text-base-sub-2 text-center text-xs'>Yojijukugo Detective</p>
        </div>
      </div>
    </div>
  );
}
