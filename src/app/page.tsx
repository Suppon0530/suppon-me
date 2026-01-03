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
    </>
  );
}
