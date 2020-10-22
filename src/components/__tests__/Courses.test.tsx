import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {shallow, ShallowWrapper} from 'enzyme';
import Courses from '../courses/Courses';
import {Provider} from 'react-redux';

const mockStore = configureStore([thunk]);

describe('Courses Component', () => {
  let store;
  let component: ShallowWrapper;

  beforeEach(() => {
    store = mockStore({
      courses: [],
      loading: false,
      error: null
    });

    component = shallow(<Provider store={store}>
      <Courses/>
    </Provider>).dive()
  });

  it('should render connected Courses component', () => {
    expect(component.find('Connect(Courses)')).toHaveLength(1);
  });
})