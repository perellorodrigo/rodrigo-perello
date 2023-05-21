import classNames from 'classnames';

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
  const classes = classNames('font-light text-gray-700', twSize[size || 'md']);

  if (props.asSpan) {
    const { asSpan, ...rest } = props;
    return (
      <span {...rest} className={classes}>
        {children}
      </span>
    );
  }

  return (
    <p {...props} className={classes}>
      {children}
    </p>
  );
};

export default Paragraph;
