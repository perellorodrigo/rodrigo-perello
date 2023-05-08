import { classNames } from '@/utils';

type ParagraphProps = Omit<JSX.IntrinsicElements['p'], 'className'> & {
  size?: 'sm' | 'md' | 'lg';
};

const twSize = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

const Paragraph = ({ children, size, ...props }: ParagraphProps) => (
  <p
    {...props}
    {...classNames('font-light text-gray-700', twSize[size || 'md'])}
  >
    {children}
  </p>
);

export default Paragraph;
