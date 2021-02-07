import React, { useState, useContext } from 'react';
import _ from 'lodash';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { Container, Paper, Typography, Divider } from '@material-ui/core';

import GridColumn from './GridColumn';
import GridItem from './GridColumn/GridItem';

import { TaskContext } from '../../context';

export default function GridContainer(props) {
  const columns = props.columns;
  const rows = props.rows;
  const cols = [0, 1, 2];

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
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  const classes = useStyles();
  return (
    // <>
    //   <GridColumn>
    //     <GridItem value="Task ID" type="header" />
    //     <GridItem value="Name" type="header" />
    //     <GridItem value="Parent" type="header" />
    //     <GridItem value="Dependencies" type="header" />

    //     <GridItem value="Task ID" type="header" />
    //     <GridItem value="Name" type="header" />
    //     <GridItem value="Parent" type="header" />
    //     <GridItem value="Dependencies" type="header" />
    //   </GridColumn>
    //   <GridColumn>
    //     <GridItem value="Task ID" type="header" />
    //     <GridItem value="Name" type="header" />
    //     <GridItem value="Parent" type="header" />
    //     <GridItem value="Dependencies" type="header" />

    //     <GridItem value="Task ID" type="header" />
    //     <GridItem value="Name" type="header" />
    //     <GridItem value="Parent" type="header" />
    //     <GridItem value="Dependencies" type="header" />
    //   </GridColumn>
    //   <GridColumn>
    //     <GridItem value="Task ID" type="header" />
    //     <GridItem value="Name" type="header" />
    //     <GridItem value="Parent" type="header" />
    //     <GridItem value="Dependencies" type="header" />
    //     <GridItem value="Name" type="header" />
    //     <GridItem value="Parent" type="header" />
    //     <GridItem value="Dependencies" type="header" />
    //   </GridColumn>
    // </>
    <>
      <Grid container>
        <Grid item xs={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}></Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item xs={12}>
            asdfff
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
