import {CoursesActions, CoursesState} from '../types';

const initialState: CoursesState = {
  courses: [],
  loading: false,
  error: null
};

export const CoursesReducer = (state: CoursesState = initialState, action: CoursesActions): CoursesState => {
  switch (action.type) {
    case 'FETCH_COURSES':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_COURSES_SUCCESS':
      return {
        ...state,
        courses: action.payload,
        loading: false
      };
    case 'FETCH_COURSES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

