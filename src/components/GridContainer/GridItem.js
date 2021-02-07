import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function GridItem(props) {
  const useStyles = makeStyles((theme) => ({
    item: {
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      // border: '1px solid black',
      // borderRadius: 0,
      // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      // color: 'white',
      // height: 48,
      // padding: '0 30px',
    },
    header: { textAlign: 'center', justify: 'center', alignItems: 'center' },
    content: {},
  }));
  const classes = useStyles();
  const variant = props.variant;

  return (
    <Grid item container xs>
      {props.children}
    </Grid>
  );
}
