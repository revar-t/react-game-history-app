import {
  Card,
  CardActionArea,
  Chip,
  Container,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const MAX_STR_LENGTH = 140;
  const [games] = useState(JSON.parse(localStorage.getItem('games')) || []);

  return (
    <Container maxWidth="sm" sx={{ mt: '40px', mb: '40px' }}>
      <Typography
        component="h2"
        sx={{
          fontSize: '1.75rem',
          fontWeight: '700',
          textAlign: 'center',
          mb: '20px',
        }}
      >
        ゲームタイトル一覧
      </Typography>

      {games.map((game) => {
        return (
          <Card valiant="outlined" key={game.id} sx={{ p: '10px', mb: '20px' }}>
            <CardActionArea component={Link} to={`/edit/${game.id}`}>
              <Typography component="h3" sx={{ fontSize: '1.5rem' }}>
                {game.title}
              </Typography>
              <Stack direction="row" sx={{ mb: '10px' }}>
                <Typography component="legend">評価</Typography>
                <Rating value={game.rating} precision={0.5} readOnly />
              </Stack>
              <Stack direction="row" spacing={2} sx={{ mb: '10px' }}>
                {game.platform && (
                  <Chip
                    label={game.platform}
                    color="platform"
                    sx={{ fontSize: '0.675rem' }}
                  />
                )}
                {game.genre && (
                  <Chip
                    label={game.genre}
                    color="genre"
                    sx={{ fontSize: '0.675rem' }}
                  />
                )}
                {game.seller && (
                  <Chip
                    label={game.seller}
                    color="seller"
                    sx={{ fontSize: '0.675rem' }}
                  />
                )}
              </Stack>
              <Typography component="p">
                {game.impression.length < MAX_STR_LENGTH
                  ? game.impression
                  : game.impression.substring(0, MAX_STR_LENGTH) + ' ...'}
              </Typography>
            </CardActionArea>
          </Card>
        );
      })}
    </Container>
  );
};

export default Home;
