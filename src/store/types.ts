import {FETCH_COURSES, FETCH_COURSES_FAILURE, FETCH_COURSES_SUCCESS, UPDATE_WISH_FLAG} from './constants';
import {CourseModel} from '../api/course.model';

export interface CoursesState {
  courses: Array<CourseModel>;
  loading: boolean;
  error: Error | null;
}

interface FetchCoursesAction {
  type: typeof FETCH_COURSES
}

interface FetchCoursesSuccessAction {
  type: typeof FETCH_COURSES_SUCCESS,
  payload: Array<CourseModel>
}

interface FetchCoursesFailureAction {
  type: typeof FETCH_COURSES_FAILURE,
  error: Error
}

interface UpdateWishFlagAction {
  type: typeof UPDATE_WISH_FLAG,
  courseId: number
}

export type CoursesActions = FetchCoursesAction
  | FetchCoursesSuccessAction
  | FetchCoursesFailureAction | UpdateWishFlagAction;
