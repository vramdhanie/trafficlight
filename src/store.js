import { createStore } from 'redux';
import lightReducer from './reducers';

export default createStore(lightReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
