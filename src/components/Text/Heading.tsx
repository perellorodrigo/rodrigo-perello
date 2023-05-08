import { classNames } from '@/utils';

const HEADING_CLASSES = {
  h1: 'text-4xl font-semibold',
  h2: 'text-2xl',
  h3: 'text-xl',
  h4: 'text-lg',
  h5: 'text-base',
  h6: 'text-sm',
} as const;

type HeadingProps = JSX.IntrinsicElements[keyof typeof HEADING_CLASSES] & {
  level?: keyof typeof HEADING_CLASSES;
};

const Heading = ({ children, level, ...props }: HeadingProps) => {
  const HeadingComponent = level || 'h1';
  return (
    <HeadingComponent {...classNames(HEADING_CLASSES[HeadingComponent])}>
      {children}
    </HeadingComponent>
  );
};

export default Heading;
