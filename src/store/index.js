import { createStore } from 'redux';
import taskReducer from './tasks/reducer';

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(taskReducer, enableReduxDevTools);
