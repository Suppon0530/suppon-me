import Header from '@/components/server/header';
import Navigation from '@/components/client/navigationList';
import {
  DeepSeaCreatures,
  KanjiShot,
  CoveredwithMushrooms,
  YojijukugoDetective,
} from '@/components/server/content';

export default function Home() {
  return (
    <>
      <Header />
      <main className='h-full w-full'>
        <Navigation />
        <div className='mx-auto max-w-125'>
          <DeepSeaCreatures />
          <KanjiShot />
          <CoveredwithMushrooms />
          <YojijukugoDetective />
        </div>
      </main>
      <div className='text-base-sub-1 pb-6 text-center'>
        &copy; {new Date().getFullYear()} Suppon Game.
      </div>
    </>
  );
}
