import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';
import Courses from '../components/courses/Courses';

describe('App', () => {
  it('renders h1 and Courses', () => {
    const wrapper = shallow(<App/>)

    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find(Courses)).toHaveLength(1);
  })
})