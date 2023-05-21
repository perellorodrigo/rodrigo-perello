import Text from '@/components/Text';
import classNames from 'classnames';

export default function Home() {
  return (
    <div className={classNames('container', 'mx-auto py-10')}>
      <div className={classNames('grid grid-cols-12')}>
        <div
          className={classNames(
            'col-start-2 col-span-10',
            'p-6 space-y-4',
            'shadow'
          )}
        >
          <Text.Heading level="h1">Hi 👋🏻, I’m Rod.</Text.Heading>
          <Text.Heading level="h3">
            I am a Full Stack Software Enginneer @ Koala.
          </Text.Heading>
          <Text.Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quos dolorum
            voluptatibus quas voluptatem quidem explicabo. Quisquam voluptatum,
            voluptate, quibusdam, quia voluptas quos dolorum voluptatibus quas
          </Text.Paragraph>

          <Text.Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quos dolorum
            voluptatibus quas voluptatem quidem explicabo. Quisquam voluptatum.
          </Text.Paragraph>
        </div>
      </div>
    </div>
  );
}
