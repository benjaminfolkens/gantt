import React from 'react';

import TableCells from './TableCells';

class TableRows extends React.Component {
  render() {
    return (
      <tr className="table-row">
        <TableCells />
      </tr>
    );
  }
}

export default TableRows;
