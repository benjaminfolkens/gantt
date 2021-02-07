import React, { useState, useContext } from 'react';
import _ from 'lodash';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { Container, Paper, Typography, Divider } from '@material-ui/core';

import GridColumn from './GridColumn';
import GridItem from './GridColumn/GridItem';

import { TaskContext } from '../../context';

export default function TaskContainer() {
  const [state, dispatch] = useContext(TaskContext);
  const [selectedCell, setSelectedCell] = useState();

  const allIds = state.tasks.allIds;
  const byId = state.tasks.byId;

  const onSelectCell = (e, id) => {
    console.log('Selected ID: ' + id);
    setSelectedCell(id);
  };

  const rows = allIds.map((id) => {
    return (
      <div className="row" key={id} onClick={(e) => onSelectCell(e, id)}>
        <div className="column">{byId[id].id}</div>
        <div className="column">{byId[id].name}</div>
        <div className="column">{byId[id].parent}</div>
        <div className="column">{byId[id].deps}</div>
      </div>
    );
  });

  // return (
  //   <div className="grid-root">
  //     <Grid container spacing={3}>
  //       <Grid item>
  //         <div className="row">
  //           <div className="column">ID</div>
  //           <div className="column">Name</div>
  //           <div className="column">Parent Task</div>
  //           <div className="column">Dependencies</div>
  //         </div>
  //         {rows}
  //         <div className="center aligned one column row">
  //           <div className="column">
  //             {/* <button className="ui button"> */}

  //             {/* </button> */}
  //             {/* <ModalAddTask /> */}
  //           </div>
  //         </div>
  //       </Grid>
  //     </Grid>
  //   </div>
  // );
  const taskIdList = allIds.map((id) => {
    return <GridItem value={byId[id].id} key={byId[id].id} />;
  });
  const taskNameList = allIds.map((id) => {
    return <GridItem value={byId[id].name} key={byId[id].id} />;
  });
  const taskParentList = allIds.map((id) => {
    return <GridItem value={byId[id].parent} key={byId[id].id} />;
  });
  const taskDepsList = allIds.map((id) => {
    return <GridItem value={byId[id].deps} key={byId[id].id} />;
  });

  return (
    <>
      <GridColumn>
        <GridItem value="Task ID" type="header" />
        {taskIdList}
      </GridColumn>
      <GridColumn>
        <GridItem value="Name" type="header" />
        {taskNameList}
      </GridColumn>
      <GridColumn>
        <GridItem value="Parent" type="header" />
        {taskParentList}
      </GridColumn>
      <GridColumn>
        <GridItem value="Dependencies" type="header" />
        {taskDepsList}
      </GridColumn>
    </>
  );
}
