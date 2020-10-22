import {CoursesActions, CoursesState} from '../types';
import {FETCH_COURSES, FETCH_COURSES_FAILURE, FETCH_COURSES_SUCCESS, UPDATE_WISH_FLAG} from '../constants';
import {CourseModel} from '../../api/course.model';

const initialState: CoursesState = {
  courses: [],
  loading: false,
  error: null
};

export const CoursesReducer = (state: CoursesState = initialState, action: CoursesActions): CoursesState => {
  switch (action.type) {
    case FETCH_COURSES:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.payload,
        loading: false
      };
    case FETCH_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case UPDATE_WISH_FLAG:
      return {
        ...state,
        courses: [...state.courses.map((course: CourseModel) => {
          if (course.courseId === action.courseId) {
            return {
              ...course,
              wishListFlag: !course.wishListFlag
            }
          }
          return course;
        })]
      };
    default:
      return state;
  }
};
