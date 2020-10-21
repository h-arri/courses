import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {CourseModel} from '../../api/course.model';
import {Rootstate} from '../../store';
import {initStore} from '../../store/actions/courses';
import List from '@material-ui/core/List';
import CourseCard from '../course-card/CourseCard';

const Courses: React.FC = () => {
  const dispatch = useDispatch();
  const courses: Array<CourseModel> = useSelector((state: Rootstate) => state.courses.courses);

  useEffect(() => {
    dispatch(initStore());
  }, []);

  return (<><h2>Meine Kurse</h2>
    <List>
      {courses.map(course => <CourseCard key={course.courseId} course={course}/>)}
    </List>
  </>);
};

Courses.displayName = 'Courses';

export default connect()(Courses);
