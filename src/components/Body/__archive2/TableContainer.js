import React from 'react';

import TableRow from './TableRow';

class TableContainer extends React.Component {
  render() {
    const { heads, bodys, foots } = this.props;
    return (
      <table className="Grid">
        <thead>{heads.length > 0 && <TableRow variant="head" data={heads} />}</thead>
        <tbody>{bodys.length > 0 && <TableRow variant="body" data={bodys} />}</tbody>
        <tfoot>{foots.length > 0 && <TableRow variant="foot" data={foots} />}</tfoot>
      </table>
    );
  }
}

export default TableContainer;
