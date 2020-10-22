import {FETCH_COURSES, FETCH_COURSES_FAILURE, FETCH_COURSES_SUCCESS, UPDATE_WISH_FLAG} from '../constants';
import {ActionCreator} from 'redux';
import {CoursesActions} from '../types';
import {ThunkAction} from 'redux-thunk';
import {Rootstate} from '../index';
import {CourseModel} from '../../api/course.model';
import {getCourses} from '../../api/course.service';

const fetchCourses: ActionCreator<CoursesActions> = () => ({
  type: FETCH_COURSES
});

const fetchCoursesSuccess: ActionCreator<CoursesActions> = (courses: Array<CourseModel>) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses
});

const fetchCoursesFailure: ActionCreator<CoursesActions> = (error: Error) => ({
  type: FETCH_COURSES_FAILURE,
  error
});

const initStore: ActionCreator<ThunkAction<void, Rootstate, unknown, CoursesActions>> = () => {
  return dispatch => {
    dispatch(fetchCourses());
    getCourses()
      .then(data => dispatch(fetchCoursesSuccess(data.courseList)))
      .catch(error => dispatch(fetchCoursesFailure(error)));
  }
}

const updateWishFlag: ActionCreator<CoursesActions> = (courseId: number) => ({
  type: UPDATE_WISH_FLAG,
  courseId
});

export {initStore, fetchCourses, fetchCoursesSuccess, fetchCoursesFailure, updateWishFlag};
