import React, { useState, useContext } from 'react';
import _ from 'lodash';

import { TaskContext } from '../../context';

export default function TaskForm() {
  const name = useFormInput('');
  const parent = useFormInput('');
  const [state, dispatch] = useContext(TaskContext);

  const onSubmit = (e) => {
    // dispatch({ type: 'TASK', payload: { id: _.uniqueId(10), name: name.value, email: email.value } });
    const parentInt = parseInt(parent.value) || null;
    if (state.tasks.byId[parentInt] || parentInt === null) {
      dispatch({ type: 'ERROR', payload: null });
      dispatch({ type: 'ADD_TASK', payload: { name: name.value, parent: parentInt } });
      name.onReset();
      parent.onReset();
    } else {
      dispatch({ type: 'ERROR', payload: 'ID of Parent must be an existing Task ID!' });
    }
    e.preventDefault();
  };

  return (
    <Segment basic>
      <Form onSubmit={onSubmit}>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Task Name: </label>
            <Form.Input placeholder="Enter Name" {...name} required />
          </Form.Field>
          <Form.Field>
            <label>Parent Task ID: </label>
            <Form.Input error={state.error} fluid placeholder="Enter Parent ID" {...parent} type="number" />
          </Form.Field>
          {/* Dependency Tasks: <input placeholder="Enter Name" {...name} required /> */}
        </Form.Group>
        <Form.Button fluid primary>
          Add Task
        </Form.Button>
      </Form>
    </Segment>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue('');
  };

  return {
    value,
    onChange: handleChange,
    onReset: handleReset,
  };
}
