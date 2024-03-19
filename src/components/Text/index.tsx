import Paragraph, { ParagraphProps } from './Paragraph';
import Heading from './Heading';

const Text = (props: ParagraphProps) => <Paragraph asSpan {...props} />;

Text.Heading = Heading;
Text.Paragraph = Paragraph;

export default Text;
