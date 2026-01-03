'use client';

import NavigationItem from './navigationItem';

export default function NavigationList() {
  return (
    <div className='flex h-full w-full items-center justify-center px-0 py-12 xl:fixed xl:h-screen xl:w-[calc((100vw-500px)/2)] xl:px-8 xl:py-0'>
      <div className='grid w-full max-w-60 grid-cols-2 place-content-center justify-items-center gap-x-2 gap-y-5 xl:max-w-70 xl:gap-x-0'>
        <NavigationItem
          sectionId='deep-sea-creatures'
          src='/appicon_deep_sea_creatures.png'
          appNameJp='深海生物の詰め放題'
          appNameEn='Deep Sea Creatures'
        />
        <NavigationItem
          sectionId='kanji-shot'
          src='/appicon_kanji_shot.png'
          appNameJp='漢字ショット'
          appNameEn='Kanji Shot'
        />
        <NavigationItem
          sectionId='covered-with-mushrooms'
          src='/appicon_covered_with_mushrooms.png'
          appNameJp='キノコまみれ'
          appNameEn='Covered with Mushrooms'
        />
        <NavigationItem
          sectionId='yojijukugo-detective'
          src='/appicon_yojijukugo_detective.png'
          appNameJp='四字熟語探偵'
          appNameEn='Yojijukugo Detective'
        />
      </div>
    </div>
  );
}
