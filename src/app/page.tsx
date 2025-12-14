import Header from '@/components/server/header';
import Navigation from '@/components/server/navigation';
import Content from '../components/server/content';

export default function Home() {
  return (
    <>
      <Header />
      <main className='bg-base h-full w-full'>
        <Navigation />
        <div className='mx-auto max-w-125'>
          <Content />
          <Content />
          <Content />
          <Content />
        </div>
      </main>
    </>
  );
}
