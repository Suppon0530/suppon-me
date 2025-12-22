import Image from 'next/image';

export default function Content() {
  return (
    <section className='h-full w-full py-20 xl:py-28'>
      <Image src='/bg_top.webp' alt='bg-top' width={500} height={140} priority />
      <div className='bg-base-sub-1 h-full w-full px-6'>
        {/* 深海生物の詰め放題 */}
        <div className='flex py-4'>
          <h2 className='diagonal-stripes diagonal-stripes-before diagonal-stripes-after h-1/2 max-w-1/4 px-3.5 [writing-mode:vertical-rl] before:top-0 before:h-2 after:bottom-0 after:h-2'>
            <p className='text-3xl font-bold'>深海生物の詰め放題</p>
            <p className='sideways-rl text-end text-lg font-bold'>2023-12-10　RELEASE</p>
          </h2>
          <div className='pl-6'>
            <div className='relative flex w-full justify-center'>
              <video
                className='w-full rounded-2xl'
                width='347'
                height='616'
                autoPlay
                loop
                muted
                playsInline
              >
                <source src='/movie_deep_sea_creatures.webm' type='video/webm' />
              </video>
              <Image
                className='absolute -top-2 w-[106%] max-w-none'
                src='/sp_frame.webp'
                alt='bg-bottom'
                width={367}
                height={635}
                priority
              />
              <Image
                className='absolute -bottom-14 w-[120%] max-w-none sm:-bottom-20'
                src='/sp_shadow.webp'
                alt=''
                width={432}
                height={90}
                priority
              />
            </div>
          </div>
        </div>
        {/* AppStore/GooglePlayボタン */}
        <div className='flex justify-center gap-4 pt-14 pb-4 sm:pt-18 sm:pb-6'>
          <Image
            className='h-auto w-auto max-w-[45%]'
            src='/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg'
            alt='深海生物の詰め放題のAppStoreボタン'
            width={174}
            height={64}
            priority
          />
          <Image
            className='h-auto w-auto max-w-[55%]'
            src='/GetItOnGooglePlay_Badge_Web_color_Japanese.png'
            alt='深海生物の詰め放題のGooglePlayボタン'
            width={174}
            height={64}
            priority
          />
        </div>
        {/* メイン説明 */}
        <div className='py-10 text-center leading-9'>
          <p>
            <span className='bg-accent text-base-sub-1 p-2 text-xl font-bold'>
              深海生物 × 詰め放題
            </span>
          </p>
          <p className='pl-2 leading-7'>
            日常では体験できない深海生物を網に詰めていくゲームになります
          </p>
        </div>
        {/* スクリーンショット説明 */}
        <div className='relative'>
          <div className='flex items-center py-6'>
            <Image
              className='border-custom-white shadow-main w-3/5 border-4 shadow-[6px_6px]'
              src='/deep_sea_creatures_0.png'
              alt='深海生物の詰め放題スクリーンショット-0'
              width={1242}
              height={2208}
              priority
            />
            <div className='pl-4 text-center leading-8 font-bold'>
              <p>
                登場する深海生物は
                <br />
                <span className='diagonal-stripes diagonal-stripes-before before:-bottom-0.5 before:h-4'>
                  <span className='relative text-xl'>
                    <span className='text-accent text-5xl'>20</span>種類！
                  </span>
                </span>
              </p>
              <p className='pt-4'>深海生物はとても滑りやすくなっています！</p>
            </div>
          </div>
          <div className='flex items-center py-6'>
            <div className='w-full pr-4 text-center leading-8 font-bold'>
              <p>制限時間は60秒！</p>
              <p className='pt-4'>
                高得点を目指して
                <br />
                <span>
                  <span className='diagonal-stripes diagonal-stripes-before before:-bottom-1 before:h-4'>
                    <span className='text-accent relative text-2xl font-black sm:text-3xl'>
                      ランキング
                    </span>
                    <br />
                  </span>
                  に挑戦しよう！
                </span>
              </p>
            </div>
            <Image
              className='border-custom-white shadow-main w-1/2 border-4 shadow-[-6px_6px]'
              src='/deep_sea_creatures_1.png'
              alt='深海生物の詰め放題スクリーンショット-1'
              width={1242}
              height={2208}
              priority
            />
          </div>
        </div>
        {/* タグ */}
        <div className='flex gap-3 py-8'>
          <p className='bg-base text-custom-white py-1 pr-4 pl-2 [clip-path:polygon(0%_0%,85%_0%,100%_50%,85%_100%,0%_100%)]'>
            深海生物
          </p>
          <p className='bg-base text-custom-white py-1 pr-4 pl-2 [clip-path:polygon(0%_0%,85%_0%,100%_50%,85%_100%,0%_100%)]'>
            パズル
          </p>
          <p className='bg-base text-custom-white py-1 pr-4 pl-2 [clip-path:polygon(0%_0%,85%_0%,100%_50%,85%_100%,0%_100%)]'>
            カジュアル
          </p>
        </div>
      </div>
      <Image src='/bg_bottom.webp' alt='bg-bottom' width={500} height={140} priority />
    </section>
  );
}
