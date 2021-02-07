import React from 'react';

import TableRows from './TableRows';

class TableContainer extends React.Component {
  render() {
    return (
      <table className="container-table">
        <TableRows />
      </table>
    );
  }
}

export default TableContainer;
