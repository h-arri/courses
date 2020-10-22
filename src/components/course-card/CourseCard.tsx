import React from 'react';
import {CourseModel} from '../../api/course.model';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {useDispatch} from 'react-redux';
import {updateWishFlag} from '../../store/actions/courses';

type CourseCardProps = {
  course: CourseModel
};

const useStyles = makeStyles(() => ({
  root: {
    height: '10vh',
    width: '70vw',
    backgroundColor: 'white',
    color: '#9b5cc4',
    margin: '2%',
    borderRadius: '10px',
    transition: 'all 0.3s cubic-bezier(.25, .8, .25, 1)',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    cursor: 'pointer',

    '&:hover': {
      boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)'
    }
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',

    '& h4': {
      fontWeight: 400
    }
  }
}));

const CourseCard: React.FC<CourseCardProps> = props => {
  const {course: {courseId, courseName, wishListFlag}} = props;
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleClick = () => {
    dispatch(updateWishFlag(courseId));
  }

  return <Card className={classes.root}>
    <CardContent className={classes.content}>
      <h4>{courseName}</h4>
      {wishListFlag ? <FavoriteIcon onClick={handleClick}/> : <FavoriteBorderIcon onClick={handleClick}/>}
    </CardContent>
  </Card>
};

CourseCard.displayName = 'CourseCard';

export default CourseCard;
