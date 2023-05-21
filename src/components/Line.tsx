'use client';
import { TimelineContent } from '@/content/timeline';
import classNames from 'classnames';
import { ReactNode, useEffect, useRef, useState } from 'react';

const Dot = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => (
  <div
    className={classNames(
      'absolute top-0 left-1/2 transform -translate-x-1/2 rounded-full',
      'bg-white'
    )}
  >
    <div className={className}> {children}</div>
  </div>
);

const Line = ({
  index,
  children,
  colors,
}: {
  index: number;
  children: ReactNode;
  colors: TimelineContent['colors'];
}) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const previousRef = useRef({ y: 0, ratio: 0 });
  // const [isIntersecting, setIsIntersecting] = useState(false);
  const [intersectionState, setIntersectionState] = useState<
    'up_enter' | 'up_leave' | 'down_enter' | 'down_leave' | 'none'
  >();

  useEffect(() => {
    const { current } = lineRef;
    const cb: IntersectionObserverCallback = ([entry], observer) => {
      const currentY = entry.boundingClientRect.y;
      const currentRatio = entry.intersectionRatio;
      const isIntersecting = entry.isIntersecting;
      let newInterSectionState: typeof intersectionState = 'none';

      if (previousRef.current.y === 0 || currentY < previousRef.current.y) {
        if (isIntersecting) {
          newInterSectionState = 'down_enter';
        } else {
          newInterSectionState = 'down_leave';
        }
      } else {
        if (!isIntersecting) {
          newInterSectionState = 'up_leave';
        } else {
          newInterSectionState = 'up_enter';
        }
      }

      setIntersectionState(newInterSectionState);

      previousRef.current.y = currentY;
      previousRef.current.ratio = currentRatio;
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

  const isIntersecting =
    intersectionState === 'down_enter' || intersectionState === 'up_enter';

  return (
    <div
      className={classNames('w-[4px] h-full relative')}
      style={{
        gridColumnStart: '2',
        gridRowStart: index + 1,
      }}
      ref={lineRef}
    >
      <div
        className={classNames(
          'absolute bg-gradient-to-b top-0 left-0 right-0 h-full transform transition-transform duration-1000 rounded',
          colors.from,
          colors.to,

          {
            'origin-bottom':
              intersectionState === 'up_enter' ||
              intersectionState === 'down_leave',
            'origin-top':
              intersectionState === 'down_enter' ||
              intersectionState === 'up_leave',
          },
          isIntersecting ? 'scale-y-100' : 'scale-y-0'
        )}
      ></div>
      <Dot
        className={classNames(
          'transition-opacity duration-1000',
          isIntersecting ? 'opacity-100' : 'opacity-0',
          colors.text
        )}
      >
        {children}
      </Dot>
    </div>
  );
};

export default Line;
