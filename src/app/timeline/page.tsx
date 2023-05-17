import Heading from '@/components/Text/Heading';
import RichText from '@/components/Text/RichText';
import { timelineContent } from '@/content/timeline';
import { classNames } from '@/utils';
import { ReactNode } from 'react';
import Image from 'next/image';
import Card from '@/components/Card';
import Line from '@/components/Line';

export default async function Home() {
  return (
    <div {...classNames('container', 'mx-auto py-10')}>
      <div {...classNames('grid grid-cols-12')}>
        <div {...classNames('col-start-2 col-span-10', 'space-y-4')}>
          <div
            className="grid grid-cols-[1fr_4px_0px] sm:grid-cols-[1fr_4px_1fr]"
            id="timeline"
          >
            {timelineContent.map(({ icon, ...restContent }, index) => {
              const ContentNode = (
                <Card
                  content={restContent}
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
