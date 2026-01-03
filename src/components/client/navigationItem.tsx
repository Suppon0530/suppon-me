'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function NavigationItem({
  sectionId,
  src,
  appNameJp,
  appNameEn,
}: {
  sectionId: string;
  src: string;
  appNameJp: string;
  appNameEn: string;
}) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const target = document.getElementById(sectionId);
      if (target) {
        const rect = target.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const inView = rect.top < windowHeight * 0.25 && rect.bottom > windowHeight * 0.25;
        setIsActive(inView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionId]);

  return (
    <a
      href={`#${sectionId}`}
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }}
    >
      <div className='relative'>
        <Image
          className='mx-auto w-[70%] rounded-[20%]'
          src={src}
          alt={appNameJp}
          width={512}
          height={512}
          priority
        />
        {isActive && <div className='bg-main absolute -top-1 right-3 h-6 w-6 rounded-full' />}
      </div>
      <p className='text-base-sub-2 pt-1 text-center text-[min(4vw,12px)]'>{appNameJp}</p>
      <p className='text-base-sub-2 text-center text-[min(3vw,10px)]'>{appNameEn}</p>
    </a>
  );
}
