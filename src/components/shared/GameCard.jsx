import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function GameCard(props) {
  const { cardImage, cardImageAltTxt, cardTitle, cardDescription, cardButtonLabel, cardButtonUrl } = props;
  
  const handleButtonClick = () => {
    window.location.pathname = cardButtonUrl;
  };

  return (
    <Card sx={{ maxWidth: 345, m: { xs: 4, md: 8 }}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={cardImage}
          alt={cardImageAltTxt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cardTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained" onClick={handleButtonClick}>
          {cardButtonLabel}
        </Button>
      </CardActions>
    </Card>
  );
}
