'use client';
import type { TimelineContent } from '@/content/timeline';
import Image from 'next/image';
import RichText from './Text/RichText';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

type CardProps = {
  content: Pick<TimelineContent, 'image' | 'description' | 'tags'>;
  style: JSX.IntrinsicElements['div']['style'];
  orientation: 'left' | 'right';
};

const Card = ({ content, style, orientation }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const { current } = cardRef;
    const cb: IntersectionObserverCallback = (
      [{ isIntersecting }],
      observer
    ) => {
      setIsIntersecting(isIntersecting);
      if (isIntersecting) {
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(cb, {
      rootMargin: '100px',
      threshold: 0.5,
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
        'space-y-4',
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
      <Image src={content.image} height={40} alt="" className="self-start" />
      {content.description && (
        <RichText document={content.description} className="space-y-3" />
      )}

      {/* <div className="flex flex-row space-x-2 self-start flex-wrap"> */}
      <div className="flex flex-row flex-wrap -m-1 self-start">
        {content.tags?.map((tag, index) => (
          <span
            key={index}
            className="m-1 border-gray-300 border-2 rounded text-gray-500 text-xs p-1.5 text-st italic shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
