import React from 'react';

function cellVariant(variant, data) {
  if (data.length > 0) {
    switch (variant) {
      case 'head':
        return <th className="CellHead">{data}</th>;

      case 'body':
        return <td className="CellBody">{data}</td>;

      case 'foot':
        return <td className="CellFoot">{data}</td>;

      default:
        return null;
    }
  }
  return null;
}

class TableCell extends React.Component {
  render() {
    const { variant, data } = this.props;
    return <>{cellVariant(variant, data)}</>;
  }
}

export default TableCell;
