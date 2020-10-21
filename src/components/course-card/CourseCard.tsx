import React from 'react';
import {CourseModel} from '../../api/course.model';
import {ListItem} from '@material-ui/core';

type CourseCardProps = {
  course: CourseModel
};

const CourseCard: React.FC<CourseCardProps> = props => {
  const {course: {courseId, courseName, wishListFlag}} = props;

  return <ListItem>
    {courseName}
  </ListItem>
};

CourseCard.displayName = 'CoursesCard';

export default CourseCard;
