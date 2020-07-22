import { createStore } from 'redux';
import { doApp } from './reducer';

const store = createStore(doApp);

export default store;