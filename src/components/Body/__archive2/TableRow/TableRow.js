import React from 'react';

import TableCell from './TableCell';

function rowVariant(variant, data) {
  switch (variant) {
    case 'head':
      return <tr>{data}</tr>;
    case 'foot':
      return <tr>{data}</tr>;
    case 'body':
      return (
        <>
          {data.map((item) => (
            <tr>
              <TableCell variant={variant} data={item.name} />
            </tr>
          ))}
        </>
      );
    default:
      return null;
  }
}

class TableRow extends React.Component {
  render() {
    const { variant, data } = this.props;
    return (
      <tr>
        {data.length > 0 && variant && (
          <tr>
            <TableCell variant={variant} data={data} />
          </tr>
        )}
      </tr>
    );
  }
}

export default TableRow;
