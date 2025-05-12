import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface ImageProps {
  name: string;
  imageUrl: string;
}

const Image: React.FC<ImageProps> = ({ name, imageUrl }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Image;
