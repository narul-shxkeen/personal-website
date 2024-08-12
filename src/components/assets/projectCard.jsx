import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom';

export default function ActionAreaCard(props) {
  return (
    <Link to={props.link}>
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia className='h-[200px] w-full object-cover'
          component="img"
          image={props.image}
          alt={props.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}
