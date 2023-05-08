type ParagraphProps = JSX.IntrinsicElements['p'];

const Paragraph = ({ children, ...props }: ParagraphProps) => (
  <p {...props} className="font-light">
    {children}
  </p>
);

export default Paragraph;
