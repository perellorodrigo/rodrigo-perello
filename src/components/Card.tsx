'use client';
import type { TimelineContent } from '@/content/timeline';
import Image from 'next/image';
import RichText from './Text/RichText';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

type CardProps = {
  content: Pick<TimelineContent, 'image' | 'description'>;
  style: JSX.IntrinsicElements['div']['style'];
  orientation: 'left' | 'right';
};

const Card = ({ content, style, orientation }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const { current } = cardRef;
    const cb: IntersectionObserverCallback = ([{ isIntersecting }]) => {
      setIsIntersecting(isIntersecting);
    };

    const observer = new IntersectionObserver(cb, {
      rootMargin: '100px',
      threshold: 1,
    });

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      className={classNames(
        'transition-all duration-1000 ease-in-out',
        `relative overflow-hidden shadow-md rounded`,
        `flex flex-col items-center sm:even:col-start-auto even:col-start-1`,
        `m-4 p-6`,
        'bg-white',
        'space-y-2',
        isIntersecting
          ? 'opacity-100 translate-x-0'
          : `opacity-0 ${
              orientation === 'left' ? '-translate-x-10' : 'translate-x-10'
            }`
      )}
      style={style}
      ref={cardRef}
    >
      <div className={classNames('absolute top-0 left-0 right-0 h-2')} />
      <Image src={content.image} height={36} alt="" className="self-start" />
      {content.description && (
        <RichText document={content.description} className="space-y-2" />
      )}
    </div>
  );
};

export default Card;
