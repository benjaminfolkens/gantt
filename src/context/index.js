import React, { useReducer, createContext } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

export const TasksContext = createContext();

const initialTasks = {
  byId: {
    task1: { id: 'task1', name: 'Task 1' },
    task2: { id: 'task2', name: 'Task 2' },
    task3: { id: 'task3', name: 'Task 3' },
  },
  allIds: ['task1', 'task2', 'task3'],
};

/*
const getKeys = (obj) => _.keys(obj);
const getValues = (obj) => _.values(obj);
const getSize = (obj) => getKeys(obj).length;

const validByMatchesAll = (obj) => (_.xor(getKeys(obj.byId), getValues(obj.allIds)).length === 0 ? true : false);

const validKeyMatchesValue = (obj) => {
  let valid;
  _.forIn(obj.byId, (val, key) => {
    if (parseInt(key) !== val.id) {
      valid = false;
    }
    if (parseInt(key) === val.id) {
      valid = true;
    }
  });
  return valid;
};

const validateTasks = (obj) => {
  return validByMatchesAll(obj.allIds) && validKeyMatchesValue(obj);
};
*/

const convertTaskId = (id) => {
  if (!id.startsWith('task', 0)) {
    throw new Error('Task ID does not start with task!');
  }
  return id.replace('task', '');
};

const nextTaskId = (ids) => {
  const converted = ids.map((id) => convertTaskId(id));
  return Math.max(...converted) + 1;
};

const tasksReducer = (state, action) => {
  const byId = state.byId;
  const allIds = state.allIds;

  switch (action.type) {
    // case 'ADD_TASK':
    //   const newId = nextTaskId(allIds);

    //   return {
    //     ...state,
    //     byId: {
    //       ...byId,
    //       [newId]: {
    //         id: newId,
    //         name: action.payload.name,
    //       },
    //     },
    //     allIds: [...allIds, newId],
    //   };

    // case 'ADD_TASK':
    //   const nextId = nextTaskId(state.tasks.allIds);
    //   return {
    //     ...state,
    //     tasks: {
    //       ...state.tasks,
    //       byId: {
    //         ...state.tasks.byId,
    //         [nextId]: {
    //           id: nextId,
    //           name: action.payload.name,
    //           parent: action.payload.parent,
    //         },
    //       },
    //       allIds: [...state.tasks.allIds, nextId],
    //     },
    //   };

    default:
      throw new Error();
  }
};

export const TasksContextProvider = (props) => {
  const [state, dispatch] = useReducer(tasksReducer, initialTasks);
  // eslint-disable-next-line react/prop-types
  return <TasksContext.Provider value={[state, dispatch]}>{props.children}</TasksContext.Provider>;
};
