import React from 'react';

import TaskContainer from './TaskContainer';

class Containers extends React.Component {
  render() {
    return (
      <table className="containers">
        <TaskContainer title="Test" />
      </table>
    );
  }
}

export default Containers;
