import React from 'react';

// import TaskView from './TaskView';

// import './TableView.css';

class TableTitle extends React.Component {
  render() {
    const { title } = this.props;
    return <th>{title}</th>;
  }
}

export default TableTitle;
