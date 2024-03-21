import classNames from 'classnames';

const DEFAULT_TEXT_H1_TO_H4_COLOR = 'dark:text-neutral-200';

const HEADING_CLASSES = {
  // class="
  h1: `text-4xl font-semibold`,
  h2: 'text-2xl',
  h3: 'text-xl',
  h4: 'text-lg',
  h5: 'text-base',
  h6: 'text-sm',
  // "
} as const;

type HeadingProps = JSX.IntrinsicElements[keyof typeof HEADING_CLASSES] & {
  level?: keyof typeof HEADING_CLASSES;
};

const Heading = ({ children, level, ...props }: HeadingProps) => {
  const HeadingComponent = level || 'h1';
  const textColor = `text-neutral-700 dark:text-neutral-300`;

  return (
    <HeadingComponent
      className={classNames(
        HEADING_CLASSES[HeadingComponent],
        textColor,
        props.className
      )}
    >
      {children}
    </HeadingComponent>
  );
};

export default Heading;
