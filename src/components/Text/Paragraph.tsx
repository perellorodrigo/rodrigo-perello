import { classNames } from '@/utils';

type ParagraphProps = {
  size?: 'sm' | 'md' | 'lg';
} & (
  | (Omit<JSX.IntrinsicElements['p'], 'className'> & {
      readonly asSpan?: undefined | false | never;
    })
  | (Omit<JSX.IntrinsicElements['span'], 'className'> & {
      readonly asSpan: true;
    })
);

const twSize = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

const Paragraph = ({ children, size, ...props }: ParagraphProps) => {
  const classNamesObj = classNames(
    'font-light text-gray-700',
    twSize[size || 'md']
  );

  if (props.asSpan) {
    const { asSpan, ...rest } = props;
    return (
      <span {...rest} {...classNamesObj}>
        {children}
      </span>
    );
  }

  return (
    <p {...props} {...classNamesObj}>
      {children}
    </p>
  );
};

export default Paragraph;
