import React from 'react';

import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { Container, Paper, Typography, Divider } from '@material-ui/core';

export default function GridItem(props) {
  const value = props.value;
  const type = props.type;

  const valueType = (type, value) => {
    switch (type) {
      case 'header':
        return <Typography variant="h6">{value}</Typography>;
      default:
        return value === (null || undefined) ? ' ' : value;
    }
  };

  return (
    <>
      <Grid item component={Paper}>
        {valueType(type, value)}
      </Grid>
    </>
  );
}
