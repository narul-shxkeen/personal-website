import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ActionAreaCard(props) {
  return (
    <Link to={props.link} className='group'>
      <Card sx={{ maxWidth: 300 }} className='w-[300px] h-[340px] group'>
        <CardActionArea>
          <CardMedia
            className='h-[200px] w-full object-cover group-hover:hidden'
            component="img"
            image={props.image}
            alt={props.alt}
          />
          <CardContent
            className='group-hover:bg-[#80a8bd] py-3 group-hover:text-white text-[#574B60] transition duration-300 relative group-hover:w-[300px] group-hover:h-[340px] group-hover:flex group-hover:flex-col group-hover:justify-center'
            sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }} // Apply font family and weight here
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500, // SemiBold
                transition: 'font-size 0.3s ease-in-out',
                '.group:hover &': {
                  fontSize: '2rem', // Adjust the font size as needed
                },
              }}
            >
              {props.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 300,
                fontSize:'0.9rem', // SemiBold
                transition: 'font-size 0.3s ease-in-out',
                '.group:hover &': {
                  fontSize: '1.2rem', // Adjust the font size as needed
                },
              }}
            >
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
