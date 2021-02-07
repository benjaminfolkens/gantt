import React, { useContext, useState } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import _ from 'lodash';

import SaveIcon from '@material-ui/icons/Save';

import GridRow from './GridRow';
import GridItem from './GridItem';

import { TaskName, TaskParentId, TaskParentName, TaskDepsIds, TaskDepsNames } from '../Tasks/TaskValues';

import { TaskContext } from '../../context';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: '#F834',
    outlineColor: '#000',
  },
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: '1px solid black',
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white',
    // height: 48,
    padding: '10px 20px',
  },
  over: {
    backgroundColor: '#e6e6e6',
  },
  paper: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

// const [selectedCell, setSelectedCell] = useState();

export default function GridContainer() {
  const [state, dispatch] = useContext(TaskContext);
  const [selected, setSelected] = useState();
  const [over, setOver] = useState();

  const classes = useStyles();
  const allIds = state.tasks.allIds;
  const byId = state.tasks.byId;

  const handleSelect = (e, id) => {
    setSelected(id);
  };

  const handleOver = (e, id) => {
    setOver(id);
  };

  const getItems = (id) => {
    return (
      <>
        <GridItem>{id}</GridItem>
        <GridItem>
          <TaskParentName id={id} />
        </GridItem>
        <GridItem>{byId[id].parent}</GridItem>
        <GridItem>{byId[id].deps}</GridItem>
      </>
    );
  };

  const getRow = allIds.map((id) => {
    return (
      <div
        className={id === over ? classes.over : ''}
        key={id}
        onMouseOver={(e) => handleOver(e, id)}
        onClick={(e) => handleSelect(e, id)}
      >
        <GridRow key={id}>{getItems(id)}</GridRow>
      </div>
    );
  });

  return (
    <>
      <div className={classes.root}>
        <div>
          <GridRow variant="header">
            <GridItem>id</GridItem>
            <GridItem>name</GridItem>
            <GridItem>parent</GridItem>
            <GridItem>deps</GridItem>
          </GridRow>
        </div>
        {getRow}
        {/* <GridRow>
        <GridItem>{state.selected}</GridItem>
      </GridRow> */}
      </div>
    </>
  );
}
