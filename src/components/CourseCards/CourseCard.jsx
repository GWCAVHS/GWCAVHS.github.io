import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CourseDescriptionModal from '../Modal/CourseDescription';

const CourseCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <CourseDescriptionModal
          courseName="Math 101"
          credits={3}
          description="This is a math class."
          prereq="N/A"
          concurrent="N/A"
        />
      </CardActions>
    </Card>
  );
}

export default CourseCard;
