import classNames from 'classnames';

const HEADING_CLASSES = {
  // class="
  h1: 'text-4xl text-gray-900 font-semibold',
  h2: 'text-2xl text-gray-700',
  h3: 'text-xl text-gray-700',
  h4: 'text-lg text-gray-700',
  h5: 'text-base text-gray-700',
  h6: 'text-sm text-gray-700',
  // "
} as const;

type HeadingProps = JSX.IntrinsicElements[keyof typeof HEADING_CLASSES] & {
  level?: keyof typeof HEADING_CLASSES;
};

const Heading = ({ children, level, ...props }: HeadingProps) => {
  const HeadingComponent = level || 'h1';
  return (
    <HeadingComponent className={classNames(HEADING_CLASSES[HeadingComponent])}>
      {children}
    </HeadingComponent>
  );
};

export default Heading;
