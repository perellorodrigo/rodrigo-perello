import Heading from '@/components/Text/Heading';
import RichText from '@/components/Text/RichText';
import { timelineContent } from '@/content/timeline';
import { classNames } from '@/utils';
import { ReactNode } from 'react';
import Image from 'next/image';
import Card from '@/components/Card';

const stops = [
  {
    from: 'from-cyan-600',
    to: 'to-gray-400', // 'to-indigo-100'
    text: 'text-cyan-600',
    bg: 'bg-cyan-600',
  },
  {
    from: 'from-gray-900',
    to: 'to-sky-100',
    text: 'text-gray-900',
    bg: 'bg-gray-900',
  },
  {
    from: 'from-sky-600',
    text: 'text-sky-500',
    bg: 'bg-sky-500',
    to: 'to-cyan-100',
  },
  {
    from: 'from-cyan-600',
    to: 'to-cyan-100',
    text: 'text-cyan-600',
    bg: 'bg-cyan-600',
  },
];

const Dot = ({ index, children }: { index: number; children: ReactNode }) => (
  <div
    {...classNames(
      'absolute top-0 left-1/2 transform -translate-x-1/2 rounded-full',
      'bg-white',
      stops[index % stops.length].text
    )}
  >
    {children}
  </div>
);

const Line = ({
  className,
  index,
  children,
}: {
  className?: string;
  index: number;
  children: ReactNode;
}) => (
  <div
    {...classNames(
      'w-[4px] h-full bg-gradient-to-b relative',
      stops[index % stops.length].from,
      stops[index % stops.length].to,
      className
    )}
    style={{
      gridColumnStart: '2',
      gridRowStart: index + 1,
    }}
  >
    <Dot index={index}>{children}</Dot>
  </div>
);

export default async function Home() {
  return (
    <div {...classNames('container', 'mx-auto py-10')}>
      <div {...classNames('grid grid-cols-12')}>
        <div {...classNames('col-start-2 col-span-10', 'space-y-4')}>
          <div
            className="grid grid-cols-[1fr_4px_0px] sm:grid-cols-[1fr_4px_1fr]"
            id="timeline"
          >
            {timelineContent.map(({ description, image, icon }, index) => {
              const ContentNode = (
                <Card
                  content={{
                    image,
                    description,
                  }}
                  orientation={index % 2 === 0 ? 'left' : 'right'}
                  style={{
                    gridRowStart: index + 1,
                  }}
                />
              );

              const ComponentIcon = icon;

              const PlaceHolderNode = (
                <div
                  className="sm:block sm:even:col-start-auto even:col-start-3"
                  style={{
                    gridRowStart: index + 1,
                  }}
                />
              );

              const isEven = index % 2 === 0;

              if (isEven)
                return [
                  ContentNode,
                  <Line index={index} key={index}>
                    <ComponentIcon className="h-7 w-7" />{' '}
                  </Line>,
                  PlaceHolderNode,
                ];
              else
                return [
                  PlaceHolderNode,
                  <Line index={index} key={index}>
                    <ComponentIcon className="h-7 w-7" />{' '}
                  </Line>,
                  ContentNode,
                ];
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
