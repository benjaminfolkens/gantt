import React from 'react';

import './Title.css';

class Title extends React.Component {
  render() {
    const titles = ['Tasks', 'Start', 'End', 'Duration'];

    return (
      <th>
        {titles.map((title) => (
          <TableTitle key={title} title={title} />
        ))}
      </th>
    );
  }
}

export default Title;
