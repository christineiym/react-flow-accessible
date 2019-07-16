import React, { PureComponent } from 'react';

import { Consumer } from '../GraphContext';
class NodeRenderer extends PureComponent {

  renderNode(d, onNodeClick) {
    const nodeType = d.data.type || 'default';
    const NodeComponent = this.props.nodeTypes[nodeType];

    return (
      <NodeComponent
        key={d.data.id}
        position={d.position}
        data={d.data}
        style={d.style || {}}
        onNodeClick={onNodeClick}
      />
    );
  }

  render() {
    return (
      <Consumer>
        {({ onNodeClick, state }) => (
          <div
            className="react-graph__nodes"
            style={{
              transform: `translate(${state.transform[0]}px,${state.transform[1]}px) scale(${state.transform[2]})`
            }}
          >
            {state.nodes.map(d => this.renderNode(d, onNodeClick))}
          </div>
        )}
      </Consumer>
    );
  }
}

export default NodeRenderer;