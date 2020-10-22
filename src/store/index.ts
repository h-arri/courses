import {combineReducers} from 'redux';
import {CoursesReducer} from './reducers/courses';

export const rootReducer = combineReducers({
  courses: CoursesReducer
});

export type Rootstate = ReturnType<typeof rootReducer>;
