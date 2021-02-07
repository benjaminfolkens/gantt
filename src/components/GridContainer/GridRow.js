import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function GridRow(props) {
  const useStyles = makeStyles((theme) => ({
    header: {
      // border: '1px solid black',
      backgroundColor: 'black',
      color: 'white',
    },
    content: {
      color: 'black',
    },
  }));
  const classes = useStyles();

  return (
    <Grid container className={props.variant === 'header' ? classes.header : classes.content} variant="header">
      {props.children}
    </Grid>
  );
}
