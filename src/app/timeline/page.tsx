import { timelineContent } from '@/content/timeline';
import Card from '@/components/Card';
import Line from '@/components/Line';
import classNames from 'classnames';

export default async function Home() {
  return (
    <div className={classNames('container', 'mx-auto py-10')}>
      <div className={classNames('grid grid-cols-12')}>
        <div className={classNames('col-start-2 col-span-10', 'space-y-4')}>
          <div
            className={classNames(
              'grid',
              'grid-cols-[1fr_4px_0px] sm:grid-cols-[1fr_4px_1fr]'
            )}
          >
            {timelineContent.map(
              ({ icon: IconComponent, colors, ...restContent }, index) => {
                const isEven = index % 2 === 0;

                const ContentArr = [
                  <Card
                    key={`${index}-card`}
                    content={restContent}
                    orientation={index % 2 === 0 ? 'left' : 'right'}
                    style={{
                      gridRowStart: index + 1,
                    }}
                  />,
                  <Line index={index} key={`${index}-line`} colors={colors}>
                    <IconComponent className="h-7 w-7" />{' '}
                  </Line>,
                  <div
                    key={`${index}-placeholder`}
                    className="sm:block sm:even:col-start-auto even:col-start-3"
                    style={{
                      gridRowStart: index + 1,
                    }}
                  />,
                ];

                return isEven ? ContentArr : [...ContentArr].reverse();
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
