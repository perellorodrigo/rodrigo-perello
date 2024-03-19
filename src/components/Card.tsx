'use client';
import type { TimelineContent } from '@/content/timeline';
import Image from 'next/image';
import RichText from './Text/RichText';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

type CardProps = {
  content: Pick<TimelineContent, 'image' | 'description' | 'tags'>;
};

const Card = ({ content }: CardProps) => {
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
        `relative overflow-hidden rounded`,
        `flex flex-col`,
        'space-y-4',
        isIntersecting
          ? 'opacity-100 translate-x-0 visible'
          : `opacity-0 translate-x-10 invisible`
      )}
      ref={cardRef}
    >
      {content.image && (
        <Image src={content.image} height={40} alt="" className="self-start" />
      )}
      {content.description && (
        <RichText document={content.description} className="space-y-3" />
      )}

      <div className="flex flex-row flex-wrap -m-1 self-start">
        {content.tags?.map((tag, index) => (
          <span
            key={index}
            className="m-2 outline outline-1 rounded text-neutral-400 text-xs p-1.5 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
