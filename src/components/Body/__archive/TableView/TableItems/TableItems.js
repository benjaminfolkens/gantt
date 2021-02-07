import React from 'react';

// import TaskView from './TaskView';

// import './TableView.css';

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

class TableItems extends React.Component {
  getDuration(start, end) {
    // ms to days
    const ms = end - start;
    const sec = ms / 1000;
    const min = sec / 60;
    const hr = min / 60;
    const day = hr / 24;
    return day;
  }

  render() {
    const entities = {
      tasks: {
        byId: {
          t1: {
            id: 't1',
            name: 'Task1',
            start: new Date(2021, 0, 1),
            end: new Date(2021, 0, 2),
          },
          t2: {
            id: 't2',
            name: 'Task2',
            start: new Date(2021, 0, 3),
            end: new Date(2021, 0, 5),
          },
          t3: {
            id: 't3',
            name: 'Task3',
            start: new Date(2021, 0, 6),
            end: new Date(2021, 0, 10),
          },
        },
        allIds: [1, 2, 3],
      },
    };

    const task = [entities.tasks.byId.t1, entities.tasks.byId.t2, entities.tasks.byId.t3];

    return (
      <>
        {task.map((item) => (
          <tr>
            <td>{item.name}</td> {/* Tasks */}
            <td>{item.start.toUTCString()}</td> {/* Start */}
            <td>{item.end.toUTCString()}</td> {/* End */}
            <td>{this.getDuration(item.start, item.end)}</td> {/* Duration */}
          </tr>
        ))}
      </>
    );
  }
}

export default TableItems;
