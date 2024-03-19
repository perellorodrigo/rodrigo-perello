import classNames from 'classnames';

export type ParagraphProps = {
  size?: 'sm' | 'md' | 'lg';
} & (
  | (JSX.IntrinsicElements['p'] & {
      readonly asSpan?: undefined | false | never;
    })
  | (JSX.IntrinsicElements['span'] & {
      readonly asSpan: true;
    })
);

const twSize = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

const Paragraph = ({ children, size, ...props }: ParagraphProps) => {
  const classes = classNames(
    'font-light',
    twSize[size || 'md'],
    props.className
  );

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
