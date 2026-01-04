import Image from 'next/image';

// 深海生物の詰め放題
export const DeepSeaCreatures = () => {
  return (
    <section id='deep-sea-creatures' className='h-full w-full py-20 xl:py-28'>
      <Image src='/bg_top.webp' alt='背景TOP' width={500} height={140} priority />
      <div className='bg-base-sub-1 h-full w-full px-6'>
        {/* コンテンツ */}
        <div className='flex pt-[2%]'>
          <h2 className='diagonal-stripes diagonal-stripes-before diagonal-stripes-after px-4 [writing-mode:vertical-rl] before:top-0 before:h-2 after:bottom-0 after:h-2'>
            <p className='text-start text-[min(6vw,30px)] font-black'>深海生物の詰め放題</p>
            <p className='text-end text-[min(4vw,18px)] font-bold'>2023.12.10 RELEASE</p>
          </h2>
          <div className='pl-[8%]'>
            <div className='relative flex w-full justify-center'>
              <video
                className='w-full rounded-[2%]'
                width='810'
                height='1440'
                autoPlay
                loop
                muted
                playsInline
              >
                <source src='/movie_deep_sea_creatures.webm' type='video/webm' />
              </video>
              <Image
                className='absolute -top-[1.5%] w-[106%] max-w-none'
                src='/sp_frame.webp'
                alt=''
                aria-hidden='true'
                width={367}
                height={635}
                priority
              />
              <Image
                className='absolute -bottom-[13%] w-[120%] max-w-none'
                src='/sp_shadow.webp'
                alt=''
                aria-hidden='true'
                width={432}
                height={90}
                priority
              />
            </div>
          </div>
        </div>
        {/* AppStore/GooglePlayボタン */}
        <div className='flex min-h-[4vw] items-center justify-center gap-4 pt-[18%]'>
          <a
            className='h-full'
            href='https://apps.apple.com/jp/app/%E6%B7%B1%E6%B5%B7%E7%94%9F%E7%89%A9%E3%81%AE%E8%A9%B0%E3%82%81%E6%94%BE%E9%A1%8C/id6473884441'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='h-[min(12vw,64px)] w-auto'
              src='/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg'
              alt='深海生物の詰め放題のAppStoreボタン'
              width={108.85}
              height={40}
              priority
            />
          </a>
          <a
            className='h-full'
            href='https://play.google.com/store/apps/details?id=com.Suppon.DeepSeaCreatures'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='h-[min(12vw,64px)] w-auto'
              src='/GetItOnGooglePlay_Badge_Web_color_Japanese.png'
              alt='深海生物の詰め放題のGooglePlayボタン'
              width={135}
              height={40}
              priority
            />
          </a>
        </div>
        {/* メイン説明 */}
        <div className='text-base-1 py-[14%] text-center text-[min(4vw,18px)] leading-7 font-semibold'>
          <p>
            <span className='bg-base-1 font-dot text-base-sub-1 p-1 text-[min(5vw,20px)] font-medium'>
              「深海生物」×「詰め放題」
            </span>
          </p>
          <div className='pt-4 pl-2'>
            <p>日常では体験できない</p>
            <p>深海生物を網に詰めていくゲーム！</p>
          </div>
        </div>
        {/* スクリーンショット説明 */}
        <div className='relative'>
          <div className='flex items-center justify-center gap-[6%] py-6'>
            <Image
              className='border-base-sub-2 shadow-base-1 w-3/5 border-4 shadow-[10px_10px]'
              src='/deep_sea_creatures_0.png'
              alt='深海生物の詰め放題プレイ画面_1枚目'
              width={1242}
              height={2208}
              priority
            />
            <div className='self-start text-[min(4vw,18px)] font-semibold [writing-mode:vertical-lr]'>
              <p>
                <span className='bg-main text-base-sub-1 p-1'>
                  登場する深海生物は
                  <span className='text-accent font-dot text-[min(14vw,60px)] [text-combine-upright:all]'>
                    20
                  </span>
                  種類！
                </span>
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center gap-[6%] py-6'>
            <div className='self-start text-[min(4vw,18px)] leading-10 font-semibold [writing-mode:vertical-lr]'>
              <p>
                <span className='bg-main text-base-sub-1 p-1'>高得点を目指して</span>
              </p>
              <p className='text-end'>
                <span className='bg-main text-base-sub-1 p-1'>ランキングに挑戦しよう！</span>
              </p>
            </div>
            <Image
              className='border-base-sub-2 shadow-base-1 w-[55%] border-4 shadow-[8px_8px]'
              src='/deep_sea_creatures_1.png'
              alt='深海生物の詰め放題プレイ画面_2枚目'
              width={1242}
              height={2208}
              priority
            />
          </div>
        </div>
        {/* タグ */}
        <div className='flex gap-3 py-10'>
          <p className='bg-base-1 text-base-sub-1 py-1 pr-5 pl-2 [clip-path:polygon(0%_0%,calc(100%-1rem)_0%,100%_50%,calc(100%-1rem)_100%,0%_100%)]'>
            深海生物
          </p>
          <p className='bg-base-1 text-base-sub-1 py-1 pr-5 pl-2 [clip-path:polygon(0%_0%,calc(100%-1rem)_0%,100%_50%,calc(100%-1rem)_100%,0%_100%)]'>
            パズル
          </p>
          <p className='bg-base-1 text-base-sub-1 py-1 pr-5 pl-2 [clip-path:polygon(0%_0%,calc(100%-1rem)_0%,100%_50%,calc(100%-1rem)_100%,0%_100%)]'>
            カジュアル
          </p>
        </div>
      </div>
      <Image src='/bg_bottom.webp' alt='背景BOTTOM' width={500} height={140} priority />
    </section>
  );
};

// 漢字ショット
export const KanjiShot = () => {
  return (
    <section id='kanji-shot' className='h-full w-full py-20 xl:py-28'>
      <Image src='/bg_top.webp' alt='背景TOP' width={500} height={140} priority />
      <div className='bg-base-sub-1 h-full w-full px-6'>
        {/* コンテンツ */}
        <div className='flex pt-[2%]'>
          <div className='pr-[8%]'>
            <div className='relative flex w-full justify-center'>
              <video
                className='w-full rounded-[2%]'
                width='810'
                height='1440'
                autoPlay
                loop
                muted
                playsInline
              >
                <source src='/movie_kanji_shot.webm' type='video/webm' />
              </video>
              <Image
                className='absolute -top-[1.5%] w-[106%] max-w-none'
                src='/sp_frame.webp'
                alt=''
                aria-hidden='true'
                width={367}
                height={635}
                priority
              />
              <Image
                className='absolute -bottom-[13%] w-[120%] max-w-none'
                src='/sp_shadow.webp'
                alt=''
                aria-hidden='true'
                width={432}
                height={90}
                priority
              />
            </div>
          </div>
          <h2 className='diagonal-stripes diagonal-stripes-before diagonal-stripes-after px-4 [writing-mode:vertical-lr] before:top-0 before:h-2 after:bottom-0 after:h-2'>
            <p className='text-start text-[min(6vw,30px)] font-black'>漢字ショット</p>
            <p className='rotate-180 text-start text-[min(4vw,18px)] font-bold'>
              2023.11.23 RELEASE
            </p>
          </h2>
        </div>
        {/* AppStore/GooglePlayボタン */}
        <div className='flex min-h-[4vw] items-center justify-center gap-4 pt-[18%]'>
          <a
            className='h-full'
            href='https://apps.apple.com/jp/app/%E6%BC%A2%E5%AD%97%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88/id6472705787'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='h-[min(12vw,64px)] w-auto'
              src='/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg'
              alt='漢字ショットのAppStoreボタン'
              width={108.85}
              height={40}
              priority
            />
          </a>
          <a
            className='h-full'
            href='https://play.google.com/store/apps/details?id=com.Suppon.KanjiShot'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='h-[min(12vw,64px)] w-auto'
              src='/GetItOnGooglePlay_Badge_Web_color_Japanese.png'
              alt='漢字ショットのGooglePlayボタン'
              width={239}
              height={71}
              priority
            />
          </a>
        </div>
        {/* メイン説明 */}
        <div className='text-base-1 py-[14%] text-center text-[min(4vw,18px)] leading-7 font-semibold'>
          <p>
            <span className='bg-base-1 font-dot text-base-sub-1 p-1 text-[min(5vw,20px)] font-medium'>
              「漢字」×「シューティング」
            </span>
          </p>
          <div className='pt-4 pl-2'>
            <p>正しい部首を選択して</p>
            <p>敵を倒す漢字シューティングゲーム！</p>
          </div>
        </div>
        {/* スクリーンショット説明 */}
        <div className='relative'>
          <div className='flex items-center justify-center gap-[6%] py-6'>
            <div className='self-start text-[min(4vw,18px)] leading-10 font-semibold [writing-mode:vertical-lr]'>
              <p>
                <span className='bg-main text-base-sub-1 p-1'>小学生レベルの簡単な漢字から</span>
              </p>
              <p className='text-end'>
                <span className='bg-main text-base-sub-1 p-1'>
                  漢検１級レベルの難読漢字まで登場！
                </span>
              </p>
            </div>
            <Image
              className='shadow-base-1 border-base-sub-2 w-3/5 border-4 shadow-[10px_10px]'
              src='/kanji_shot_0.png'
              alt='漢字ショットプレイ画面_易'
              width={1242}
              height={2208}
              priority
            />
          </div>
          <div className='py-6'>
            <div className='pl-2 text-[min(4vw,18px)] font-semibold'>
              <p>
                <span className='bg-main text-base-sub-1 p-1'>
                  登場漢字は
                  <span className='text-accent font-dot text-[min(10vw,52px)]'>1500</span>
                  字以上！
                </span>
              </p>
            </div>
            <div className='grid grid-cols-2 place-content-center justify-items-center gap-[6%] pt-8'>
              <Image
                className='border-base-sub-2 shadow-base-1 w-5/6 border-4 shadow-[6px_6px]'
                src='/kanji_shot_level.png'
                alt='漢字ショットレベル選択画面'
                width={1242}
                height={2208}
                priority
              />
              <Image
                className='border-base-sub-2 shadow-base-1 w-5/6 border-4 shadow-[6px_6px]'
                src='/kanji_shot_1.png'
                alt='漢字ショットプレイ画面_並'
                width={1242}
                height={2208}
                priority
              />
              <Image
                className='border-base-sub-2 shadow-base-1 w-5/6 border-4 shadow-[6px_6px]'
                src='/kanji_shot_2.png'
                alt='漢字ショットプレイ画面_難'
                width={1242}
                height={2208}
                priority
              />
              <Image
                className='border-base-sub-2 shadow-base-1 w-5/6 border-4 shadow-[6px_6px]'
                src='/kanji_shot_3.png'
                alt='漢字ショットプレイ画面_極'
                width={1242}
                height={2208}
                priority
              />
            </div>
          </div>
        </div>
        {/* タグ */}
        <div className='flex gap-3 py-10'>
          <p className='bg-base-1 text-base-sub-1 py-1 pr-5 pl-2 [clip-path:polygon(0%_0%,calc(100%-1rem)_0%,100%_50%,calc(100%-1rem)_100%,0%_100%)]'>
            漢字
          </p>
          <p className='bg-base-1 text-base-sub-1 py-1 pr-5 pl-2 [clip-path:polygon(0%_0%,calc(100%-1rem)_0%,100%_50%,calc(100%-1rem)_100%,0%_100%)]'>
            難読漢字
          </p>
          <p className='bg-base-1 text-base-sub-1 py-1 pr-5 pl-2 [clip-path:polygon(0%_0%,calc(100%-1rem)_0%,100%_50%,calc(100%-1rem)_100%,0%_100%)]'>
            クイズ
          </p>
        </div>
      </div>
      <Image src='/bg_bottom.webp' alt='背景BOTTOM' width={500} height={140} priority />
    </section>
  );
};

// キノコまみれ
export const CoveredwithMushrooms = () => {
  return (
    <section id='covered-with-mushrooms' className='h-full w-full py-20 xl:py-28'>
      <Image src='/bg_top.webp' alt='背景TOP' width={500} height={140} priority />
      <div className='bg-base-sub-1 h-full w-full px-6'>
        {/* コンテンツ */}
        <div className='flex pt-[2%]'>
          <h2 className='diagonal-stripes diagonal-stripes-before diagonal-stripes-after px-4 [writing-mode:vertical-rl] before:top-0 before:h-2 after:bottom-0 after:h-2'>
            <p className='text-start text-[min(6vw,30px)] font-black'>キノコまみれ</p>
            <p className='text-end text-[min(4vw,18px)] font-bold'>2024.3.8 RELEASE</p>
          </h2>
          <div className='pl-[8%]'>
            <div className='relative flex w-full justify-center'>
              <video
                className='w-full rounded-[2%]'
                width='810'
                height='1440'
                autoPlay
                loop
                muted
                playsInline
              >
                <source src='/movie_covered_with_mushrooms.webm' type='video/webm' />
              </video>
              <Image
                className='absolute -top-[1.5%] w-[106%] max-w-none'
                src='/sp_frame.webp'
                alt=''
                aria-hidden='true'
                width={367}
                height={635}
                priority
              />
              <Image
                className='absolute -bottom-[13%] w-[120%] max-w-none'
                src='/sp_shadow.webp'
                alt=''
                aria-hidden='true'
                width={432}
                height={90}
                priority
              />
            </div>
          </div>
        </div>
        {/* AppStore/GooglePlayボタン */}
        <div className='flex min-h-[4vw] items-center justify-center gap-4 pt-[18%]'>
          <a
            className='h-full'
            href='https://apps.apple.com/jp/app/%E3%82%AD%E3%83%8E%E3%82%B3%E3%81%BE%E3%81%BF%E3%82%8C/id6478805068'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='h-[min(12vw,64px)] w-auto'
              src='/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg'
              alt='キノコまみれのAppStoreボタン'
              width={174}
              height={64}
              priority
            />
          </a>
          <a
            className='h-full'
            href='https://play.google.com/store/apps/details?id=com.Suppon.CoveredwithMushrooms'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='h-[min(12vw,64px)] w-auto'
              src='/GetItOnGooglePlay_Badge_Web_color_Japanese.png'
              alt='キノコまみれのGooglePlayボタン'
              width={174}
              height={64}
              priority
            />
          </a>
        </div>
        {/* メイン説明 */}
        <div className='text-base-1 py-[14%] text-center text-[min(4vw,18px)] leading-7 font-semibold'>
          <p>
            <span className='bg-base-1 font-dot text-base-sub-1 p-1 text-[min(5vw,20px)] font-medium'>
              「冬虫夏草」×「シューティング」
            </span>
          </p>
          <div className='pt-4 pl-2'>
            <p>敵の攻撃を避けながらキノコを当てて</p>
            <p>冬虫夏草をGETするゲーム！</p>
          </div>
        </div>
        {/* スクリーンショット説明 */}
        <div className='relative'>
          <div className='flex items-center justify-center gap-[6%] py-6'>
            <Image
              className='border-base-sub-2 shadow-base-1 w-3/5 border-4 shadow-[10px_10px]'
              src='/covered_with_mushrooms_0.png'
              alt='キノコまみれプレイ画面_レベル3'
              width={1242}
              height={2208}
              priority
            />
            <div className='self-start text-[min(4vw,18px)] font-semibold [writing-mode:vertical-lr]'>
              <p>
                <span className='bg-main text-base-sub-1 p-1'>
                  登場する冬虫夏草は
                  <span className='text-accent font-dot text-[min(14vw,60px)] [text-combine-upright:all]'>
                    10
                  </span>
                  種類！
                </span>
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center gap-[6%] py-6'>
            <div className='self-start text-[min(4vw,18px)] leading-10 font-semibold [writing-mode:vertical-lr]'>
              <p>
                <span className='bg-main text-base-sub-1 p-1'>敵を一定数倒すとレベルが上がり</span>
              </p>
              <p className='text-end'>
                <span className='bg-main text-base-sub-1 p-1'>
                  出現する敵の数が増加！難易度もアップ！
                </span>
              </p>
            </div>
            <Image
              className='border-base-sub-2 shadow-base-1 w-[55%] border-4 shadow-[8px_8px]'
              src='/covered_with_mushrooms_1.png'
              alt='キノコまみれプレイ画面_レベル4'
              width={1242}
              height={2208}
              priority
            />
          </div>
        </div>
        {/* タグ */}
        <div className='flex gap-3 py-10'>
          <p className='bg-base-1 text-base-sub-1 py-1 pr-5 pl-2 [clip-path:polygon(0%_0%,calc(100%-1rem)_0%,100%_50%,calc(100%-1rem)_100%,0%_100%)]'>
            冬虫夏草
          </p>
          <p className='bg-base-1 text-base-sub-1 py-1 pr-5 pl-2 [clip-path:polygon(0%_0%,calc(100%-1rem)_0%,100%_50%,calc(100%-1rem)_100%,0%_100%)]'>
            キノコ
          </p>
          <p className='bg-base-1 text-base-sub-1 py-1 pr-5 pl-2 [clip-path:polygon(0%_0%,calc(100%-1rem)_0%,100%_50%,calc(100%-1rem)_100%,0%_100%)]'>
            シューティング
          </p>
        </div>
      </div>
      <Image src='/bg_bottom.webp' alt='背景BOTTOM' width={500} height={140} priority />
    </section>
  );
};

// 四字熟語探偵
export const YojijukugoDetective = () => {
  return (
    <section id='yojijukugo-detective' className='h-full w-full py-20 xl:py-28'>
      <Image src='/bg_top.webp' alt='bg-top' width={500} height={140} priority />
      <div className='bg-base-sub-1 h-full w-full px-6'>
        {/* コンテンツ */}
        <div className='flex pt-[2%]'>
          <div className='pr-[8%]'>
            <div className='relative flex w-full justify-center'>
              <video
                className='w-full rounded-[2%]'
                width='810'
                height='1440'
                autoPlay
                loop
                muted
                playsInline
              >
                <source src='/movie_yojijukugo_detective.webm' type='video/webm' />
              </video>
              <Image
                className='absolute -top-[1.5%] w-[106%] max-w-none'
                src='/sp_frame.webp'
                alt=''
                aria-hidden='true'
                width={367}
                height={635}
                priority
              />
              <Image
                className='absolute -bottom-[13%] w-[120%] max-w-none'
                src='/sp_shadow.webp'
                alt=''
                aria-hidden='true'
                width={432}
                height={90}
                priority
              />
            </div>
          </div>
          <h2 className='diagonal-stripes diagonal-stripes-before diagonal-stripes-after px-4 [writing-mode:vertical-lr] before:top-0 before:h-2 after:bottom-0 after:h-2'>
            <p className='text-start text-[min(6vw,30px)] font-black'>四字熟語探偵</p>
            <p className='rotate-180 text-start text-[min(4vw,18px)] font-bold'>
              2024.10.5 RELEASE
            </p>
          </h2>
        </div>
        {/* AppStore/GooglePlayボタン */}
        <div className='flex min-h-[4vw] items-center justify-center gap-4 pt-[18%]'>
          <a
            className='h-full'
            href='https://apps.apple.com/jp/app/%E5%9B%9B%E5%AD%97%E7%86%9F%E8%AA%9E%E6%8E%A2%E5%81%B5/id6733244129'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='h-[min(12vw,64px)] w-auto'
              src='/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg'
              alt='四字熟語探偵のAppStoreボタン'
              width={174}
              height={64}
              priority
            />
          </a>
          <a
            className='h-full'
            href='https://play.google.com/store/apps/details?id=com.Suppon.YojijukugoDetective'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='h-[min(12vw,64px)] w-auto'
              src='/GetItOnGooglePlay_Badge_Web_color_Japanese.png'
              alt='四字熟語探偵のGooglePlayボタン'
              width={174}
              height={64}
              priority
            />
          </a>
        </div>
        {/* メイン説明 */}
        <div className='text-base-1 py-[14%] text-center text-[min(4vw,18px)] leading-7 font-semibold'>
          <p>
            <span className='bg-base-1 font-dot text-base-sub-1 p-1 text-[min(5vw,20px)] font-medium'>
              「四字熟語」×「推理」
            </span>
          </p>
          <div className='pt-4 pl-2'>
            <p>破れたイラストから</p>
            <p>四字熟語を推理するゲーム！</p>
          </div>
        </div>
        {/* スクリーンショット説明 */}
        <div className='relative'>
          <div className='flex items-center justify-center gap-[6%] py-6'>
            <div className='self-start text-[min(4vw,18px)] leading-10 font-semibold [writing-mode:vertical-lr]'>
              <p>
                <span className='bg-main text-base-sub-1 p-1'>正しい漢字を組み合わせて</span>
              </p>
              <p className='text-end'>
                <span className='bg-main text-base-sub-1 p-1'>
                  イラストが表す四字熟語を完成させよう！
                </span>
              </p>
            </div>
            <Image
              className='shadow-base-1 border-base-sub-2 w-3/5 border-4 shadow-[10px_10px]'
              src='/yojijukugo_detective_0.png'
              alt='四字熟語探偵プレイ画面_1枚目'
              width={1242}
              height={2208}
              priority
            />
          </div>
          <div className='py-6'>
            <div className='pl-2 text-[min(4vw,18px)] font-semibold'>
              <p>
                <span className='bg-main text-base-sub-1 p-1'>
                  ゲーム感覚で四字熟語を覚えよう！
                </span>
              </p>
            </div>
            <div className='grid grid-cols-2 place-content-center justify-items-center gap-[6%] pt-8'>
              <Image
                className='border-base-sub-2 shadow-base-1 w-5/6 border-4 shadow-[6px_6px]'
                src='/yojijukugo_detective_1.png'
                alt='四字熟語探偵プレイ画面_2枚目'
                width={1242}
                height={2208}
                priority
              />
              <Image
                className='border-base-sub-2 shadow-base-1 w-5/6 border-4 shadow-[6px_6px]'
                src='/yojijukugo_detective_2.png'
                alt='四字熟語探偵プレイ画面_3枚目'
                width={1242}
                height={2208}
                priority
              />
            </div>
          </div>
        </div>
        {/* タグ */}
        <div className='flex gap-3 py-10'>
          <p className='bg-base-1 text-base-sub-1 py-1 pr-5 pl-2 [clip-path:polygon(0%_0%,calc(100%-1rem)_0%,100%_50%,calc(100%-1rem)_100%,0%_100%)]'>
            四字熟語
          </p>
          <p className='bg-base-1 text-base-sub-1 py-1 pr-5 pl-2 [clip-path:polygon(0%_0%,calc(100%-1rem)_0%,100%_50%,calc(100%-1rem)_100%,0%_100%)]'>
            漢字
          </p>
          <p className='bg-base-1 text-base-sub-1 py-1 pr-5 pl-2 [clip-path:polygon(0%_0%,calc(100%-1rem)_0%,100%_50%,calc(100%-1rem)_100%,0%_100%)]'>
            推理
          </p>
        </div>
      </div>
      <Image src='/bg_bottom.webp' alt='bg-bottom' width={500} height={140} priority />
    </section>
  );
};
