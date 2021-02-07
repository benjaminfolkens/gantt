const initialState = {
  byId: {
    task1: { id: 'task1', name: 'Task 1' },
    task2: { id: 'task2', name: 'Task 2' },
    task3: { id: 'task3', name: 'Task 3' },
  },
  allIds: ['task1', 'task2', 'task3'],
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK': {
      const { byId, allIds } = state;
      const newTaskId = 'task4';

      return {
        ...state,
        byId: {
          ...byId,
          [newTaskId]: {
            id: newTaskId,
            name: action.payload,
          },
        },
        allIds: [...allIds, newTaskId],
      };
    }

    default:
      return state;
  }
}
