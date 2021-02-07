import React from 'react';

import TableContainer from './TableContainer';
import TestInput from './TestInput';

import './Body.css';

class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <main>
          <h2>Tasks App</h2>
          <TestInput />
          <TableContainer />
          {/* <TableContainer heads={heads} bodys={bodys} foots={foots} /> */}
        </main>
      </div>
    );
  }
}

export default Body;
