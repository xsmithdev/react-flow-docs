import React from 'react';
import Link from '@docusaurus/Link';

const props = [
  {
    name: 'nodeId',
    type: 'string',
    default: 'the id of the custom node where the <NodeResizer> is rendered',
    description:
      'The id of the node that will be resizable, you only need to set this if you are using the resizer outside of a custom node',
  },
  {
    name: 'position',
    type: "'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",
    default: 'bottom-right',
    description: 'The position where the control should be placed',
  },
  {
    name: 'variant',
    type: "'handle' | 'line'",
    default: 'handle',
    description:
      'The type of the control. Handles are used for the corners of a node, the lines are used for the sides of a node.',
  },
  {
    name: 'minWidth',
    type: 'number',
    default: '10',
    description: 'The minimal width of the node to which it can be resized',
  },
  {
    name: 'minHeight',
    type: 'number',
    default: '10',
    description: 'The minimal height of the node to which it can be resized',
  },
  {
    name: 'color',
    type: 'string',
    default: 'undefined',
    description: 'The color of the resize control',
  },
  {
    name: 'style',
    type: 'CSSProperties',
    default: 'undefined',
    description: 'Styles that will be attached to the control component',
  },
  {
    name: 'className',
    type: 'string',
    default: 'undefined',
    description: 'Additional class name for the control component',
  },
  {
    name: 'children',
    type: 'ReactNode',
    default: 'null',
    description:
      'React children that will be rendered inside the control. Can be a custom icon for example.',
  },
  {
    name: 'onResizeStart',
    type: (
      <>
        (event: <Link to="/docs/api/types/#resizedragevent">ResizeDragEvent</Link>, params:{' '}
        <Link to="/docs/api/types/#resizeeventparams">ResizeEventParams</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called on resize start',
  },
  {
    name: 'onResize',
    type: (
      <>
        (event: <Link to="/docs/api/types/#resizedragevent">ResizeDragEvent</Link>, params:{' '}
        <Link to="/docs/api/types/#resizeeventparams">ResizeEventParams</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called on resize',
  },
  {
    name: 'onResizeEnd',
    type: (
      <>
        (event: <Link to="/docs/api/types/#resizedragevent">ResizeDragEvent</Link>, params:{' '}
        <Link to="/docs/api/types/#resizeeventparams">ResizeEventParams</Link>) =&gt; void
      </>
    ),
    default: 'undefined',
    description: 'Called on resize end',
  },
];

export default props;
