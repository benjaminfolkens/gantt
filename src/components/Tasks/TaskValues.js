import React, { useContext } from 'react';
import _ from 'lodash';

import { TaskContext } from '../../context';

export function TaskName(props) {
  const [state, dispatch] = useContext(TaskContext);
  const id = props.id;

  return state.tasks.byId[id].name;
}

export function TaskParentId(props) {
  const [state, dispatch] = useContext(TaskContext);
  const id = props.id;

  return state.tasks.byId[id].parent;
}

export function TaskParentName(props) {
  const [state, dispatch] = useContext(TaskContext);
  const id = props.id;
  const byId = state.tasks.byId;
  const parentid = byId[id].parent;
  const parent = byId[parentid];
}

export function TaskDepsIds(props) {
  const [state, dispatch] = useContext(TaskContext);
  const id = props.id;

  return state.tasks.byId[id].deps;
}

export function TaskDepsNames(props) {
  const [state, dispatch] = useContext(TaskContext);
  const id = props.id;
  const deps = state.tasks.byId[id].deps;

  return deps.map((id) => [state.tasks.byId[id].name]);
}
