# Folder Structure

- /dist: **_production-ready files_**
- /public
- /scripts
- /src
  - /assets
  - /components: **_stateless components_**
  - /containers: **_stateful components_**
  - /context
  - /hoc
  - /store: **_state management w/ react-redux_**
- /tests
- /webpack

# Data Structure

        {
          tasks: {
            byId: {
              1: {
                id: 1,
                name: 'Task1',
                gantt: 'Gantt1',
              },
              2: {
                id: 2,
                name: 'Task2',
                gantt: 'Gantt2',
              },
              3: {
                id: 3,
                name: 'Task3',
                gantt: 'Gantt3',
              },
            },
            allIds: [1, 2, 3],
          },
        }

# Reducer Actions

## Task Actions

- [ ] ADD_TASK

- [ ] DELETE_TASK

## Loading Actions

- [ ] START

- [ ] COMPLETE
