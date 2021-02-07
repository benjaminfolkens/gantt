import React, { useState, useContext } from 'react';
import _ from 'lodash';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { Container, Paper, Typography, Divider } from '@material-ui/core';

import { TaskContext } from '../../context';

export default function GridComponent() {
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

  return (
    <>
      <Grid item>
        <Grid container direction="column" spacing={1} component={Paper}>
          <Grid item>
            <Typography variant="h6">ID</Typography>
          </Grid>
          <Divider />
          <Grid item>0</Grid>
          <Divider />
          <Grid item>1</Grid>
          <Divider />
          <Grid item>2</Grid>
          <Divider />
        </Grid>
      </Grid>

      <Grid item>
        <Grid container direction="column" spacing={1} component={Paper}>
          <Grid item>
            <Typography variant="h6">Name</Typography>
          </Grid>
          <Divider />
          <Grid item>Test1</Grid>
          <Divider />
          <Grid item>Test2</Grid>
          <Divider />
          <Grid item>Test3</Grid>
          <Divider />
        </Grid>
      </Grid>
    </>
  );
}
