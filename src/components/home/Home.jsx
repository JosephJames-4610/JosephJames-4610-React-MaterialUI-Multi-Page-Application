import * as React from 'react';
import Container from '@mui/material/Container';
import { GameCard } from '../shared/index.js';

const gameCardList = [
  {
    cardImage: 'http://localhost:4000/clientlibs/resource/gameCardImages/CardImage01.webp',
    cardImageAltTxt: 'Identify-Difference-Img',
    cardTitle: 'Identify Difference',
    cardDescription: 'Compare two images and identify the difference between them',
    cardButtonLabel: 'PLAY',
    cardButtonUrl: '/games/identify-difference',
  },
  {
    cardImage: 'http://localhost:4000/clientlibs/resource/gameCardImages/CardImage02.webp',
    cardImageAltTxt: 'Memory-Check-Img',
    cardTitle: 'Memory Check',
    cardDescription: 'Select two cells which produce same calculated result consecutively',
    cardButtonLabel: 'PLAY',
    cardButtonUrl: '/games/memory-check',
  }
]

const Home = () => {
  const renderGameCards = () => {
    return (
      <>
        <GameCard {...gameCardList[0]}></GameCard>
        <GameCard {...gameCardList[1]}></GameCard>
      </>
    )
  }

  return (
    <Container maxWidth={false} sx={{ display: { xs: 'flex' }, flexGrow: 1, flexDirection: { xs: 'column', md: 'row' }, m: 2, justifyContent: 'center', alignItems: 'center' }} >
      {renderGameCards()}
    </Container>
  );
};

export default Home;