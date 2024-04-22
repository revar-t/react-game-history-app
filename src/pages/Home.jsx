import {
  Card,
  CardContent,
  Chip,
  Container,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';

const Home = () => {
  const [games, setGames] = useState(
    JSON.parse(localStorage.getItem('games')) || []
  );

  console.log(games);
  return (
    <Container maxWidth="sm">
      <Typography
        component="h2"
        sx={{ fontSize: '1.75rem', fontWeight: '700', textAlign: 'center' }}
      >
        ゲームタイトル一覧
      </Typography>
      {games.map((game) => {
        console.log(game);
        return (
          <Card valiant="outlined" key={game.id}>
            <CardContent>
              <Typography component="h3" sx={{ fontSize: '1.5rem' }}>
                {game.title}
              </Typography>
              <Stack direction="row">
                <Typography component="legend">評価</Typography>
                <Rating value={game.rating} precision={0.5} readOnly />
              </Stack>
              <Stack direction="row" spacing={1}>
                <Chip label={game.platform} color="default" />
                <Chip label={game.genre} color="primary" />
                <Chip label={game.seller} color="info" />
              </Stack>
              <p>{game.impression}</p>
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
};

export default Home;
