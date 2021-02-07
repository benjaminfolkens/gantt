import React from 'react';

import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { Container, Paper, Typography, Divider } from '@material-ui/core';

export default function GridColumn(props) {
  return (
    <Grid container component={Paper}>
      {props.children}
    </Grid>
  );
}
