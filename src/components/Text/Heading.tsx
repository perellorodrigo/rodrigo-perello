import classNames from 'classnames';

const HEADING_CLASSES = {
  // class="
  h1: 'text-4xl  font-semibold dark:text-neutral-200',
  h2: 'text-2xl text-neutral-700 dark:text-neutral-200',
  h3: 'text-xl text-neutral-700 dark:text-neutral-200',
  h4: 'text-lg text-neutral-700 dark:text-neutral-200',
  h5: 'text-base text-neutral-700 dark:text-neutral-200',
  h6: 'text-sm text-neutral-700 dark:text-neutral-300',
  // "
} as const;

type HeadingProps = JSX.IntrinsicElements[keyof typeof HEADING_CLASSES] & {
  level?: keyof typeof HEADING_CLASSES;
};

const Heading = ({ children, level, ...props }: HeadingProps) => {
  const HeadingComponent = level || 'h1';
  return (
    <HeadingComponent
      className={classNames(HEADING_CLASSES[HeadingComponent], props.className)}
    >
      {children}
    </HeadingComponent>
  );
};

export default Heading;
