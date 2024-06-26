import Heading from '@/components/Text/Heading';
import Paragraph, { type ParagraphProps } from '@/components/Text/Paragraph';

const headingNodes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
type HeadingTypes = (typeof headingNodes)[number];

type RichTextNode =
  | {
      nodeType: 'p' | 'ul' | 'ol' | 'li';
      value: string | RichTextNode[];
      size?: ParagraphProps['size'];
    }
  | {
      nodeType: HeadingTypes;
      value: string;
      className?: string;
    };

export type RichTextRoot = {
  content: RichTextNode[];
};

const OrderedList = ({ children }: { children: React.ReactNode }) => (
  <ol className="list-decimal list-inside space-y-2">{children}</ol>
);

const UnorderedList = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc list-inside space-y-2">{children}</ul>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="list-none">
    <Paragraph asSpan>{children}</Paragraph>
  </li>
);

const nodeElementLookup = {
  p: ({
    children,
    size,
    className,
  }: {
    children: React.ReactNode;
    size: ParagraphProps['size'];
    className: string;
  }) => (
    <Paragraph size={size} className={className}>
      {children}
    </Paragraph>
  ),
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
} as const;

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
    return (
      <Heading level={node.nodeType} className={node.className}>
        {node.value}
      </Heading>
    );

  const thisValue =
    typeof node.value === 'string'
      ? renderText(node.value)
      : node.value.map(NodeRenderer);

  const NodeElement = nodeElementLookup[node.nodeType];
  return (
    <NodeElement
      size={node.size}
      className="my-2 text-neutral-500 dark:text-neutral-400"
    >
      {thisValue}
    </NodeElement>
  );
};

const RichText = ({
  document,
  className,
}: {
  document: RichTextRoot;
  className?: string;
}) => {
  if (!Array.isArray(document.content)) return null;
  return <div className={className}>{document.content?.map(NodeRenderer)}</div>;
};

export default RichText;
