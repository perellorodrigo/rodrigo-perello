import Heading from '@/components/Text/Heading';
import Paragraph from '@/components/Text/Paragraph';

const headingNodes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
type HeadingTypes = (typeof headingNodes)[number];

type RichTextNode =
  | {
      nodeType: 'p' | 'ul' | 'ol' | 'li';
      value: string | RichTextNode[];
    }
  | {
      nodeType: HeadingTypes;
      value: string;
    };

export type RichTextRoot = {
  content: RichTextNode[];
};

const isHeading = (
  node: RichTextNode
): node is RichTextNode & {
  nodeType: HeadingTypes;
} => headingNodes.some((headingNode) => headingNode === node.nodeType);

const renderText = (text: string) =>
  text
    .split('\n')
    .map((t, index) => [t, index > 0 ? <br key={index} /> : null]);
const NodeRenderer = (node: RichTextNode) => {
  if (isHeading(node))
    return <Heading level={node.nodeType}>{node.value}</Heading>;

  const thisValue =
    typeof node.value === 'string'
      ? renderText(node.value)
      : node.value.map(NodeRenderer);

  if (node.nodeType === 'p') return <Paragraph>{thisValue}</Paragraph>;
  if (node.nodeType === 'ul') return <ul>{thisValue}</ul>;
  if (node.nodeType === 'ol') return <ol>{thisValue}</ol>;
  if (node.nodeType === 'li') return <li>{thisValue}</li>;

  return undefined;
};

const RichText = (rootNode: RichTextRoot) => {
  if (!Array.isArray(rootNode.content)) return null;
  return <>{rootNode.content?.map(NodeRenderer)}</>;
};

export default RichText;
