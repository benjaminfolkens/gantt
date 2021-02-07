import React from 'react';

// import TaskView from './TaskView';

import TableTitle from './TableTitle';
import TableItems from './TableItems';

import './TableView.css';

/* Data Structure

{
  entities: {
    tasks: {
      byId: {
        1: {
          id: 1,
          name: 'Task1',
          gantt: 'Gantt1',
        },
        2: {
          id: 2,
          name: 'Task2',
          gantt: 'Gantt2',
        },
        3: {
          id: 3,
          name: 'Task3',
          gantt: 'Gantt3',
        },
      },
      allIds: [1, 2, 3],
    },
  }
}

*/

class TableView extends React.Component {
  render() {
    const titles = ['Tasks', 'Start', 'End', 'Duration'];

    return (
      <table>
        <tr>
          {titles.map((title) => (
            <TableTitle key={title} title={title} />
          ))}
        </tr>
        {/* {items.map((item) => (
          <TableItems key={item} item={item} />
        ))} */}
        <TableItems />
      </table>
    );
  }
}

export default TableView;
