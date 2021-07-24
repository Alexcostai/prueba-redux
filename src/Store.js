import { createStore } from 'redux';
import subjectsReducer from './SubjectsReducer';

const store = createStore(subjectsReducer);

export default store