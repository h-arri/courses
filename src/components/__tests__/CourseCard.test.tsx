import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import CourseCard from '../course-card/CourseCard';
import {CourseModel} from '../../api/course.model';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const mockedCourse: CourseModel = {
  'courseId': 0,
  'courseName': 'Erste Cavaletti-Übungen für das 4-jährigen Pferdes',
  'wishListFlag': false
};

const mockStore = configureStore([thunk]);

describe('CourseCard', () => {

  let store;
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    store = mockStore({
      courses: [],
      loading: false,
      error: null
    });

    wrapper = shallow(<Provider store={store}>
      <CourseCard course={mockedCourse}/>
    </Provider>).dive();
  });

  it('should pass props properly', () => {
    expect(wrapper.prop('course')).toBe(mockedCourse);
  });
})