import React, { Fragment, useEffect, useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import { addTodo } from './store/tasks/actions';
import { TYPES } from './store/tasks/types';

import { Button } from '@blueprintjs/core';

export default function App() {
  const test = useSelector((state) => state);
  const dispatch = useDispatch();
  const { byId, allIds } = test;

  const handleClick = () => {
    dispatch({
      type: TYPES.ADD_TASK,
    });
  };

  return (
    <div>
      {/* <ThemeProvider theme={theme}>
        <TestComponent />
      </ThemeProvider> */}
      {/* <TestComponent /> */}
      <Button intent="success" text="button content" onClick={handleClick}>
        {allIds} test
      </Button>
    </div>
  );
}
