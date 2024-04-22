import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Rating,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
  const [games, setGames] = useState(JSON.parse(localStorage.getItem('games')) || [])

  const [ratingValue, setRatingValue] = useState(2);

  const navigate = useNavigate();

  // JSON形式に変換してローカルストレージに保存
  useEffect(() => {
    localStorage.setItem('games', JSON.stringify(games));
  }, [games]);

  // TODO:エラー実装
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 入力欄の文字列を取得する（rating除く）
    const game = new FormData(e.target);
    const title = game.get('title');
    const platform = game.get('platform');
    const genre = game.get('genre');
    const seller = game.get('seller');
    const impression = game.get('impression');
    console.log(title, platform, genre, seller, ratingValue, impression);

    const newGame = {
      id: uuid(),
      title,
      platform,
      genre,
      seller,
      rating: ratingValue,
      impression,
    };
    console.log(newGame);
    await setGames([...games, newGame]);
    navigate('/');
  };
  console.log(games);
  return (
    <Container maxWidth="sm">
      <Box component="form" sx={{ padding: '20px' }} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="ゲームのタイトル"
          placeholder="例：スーパーマリオブラザーズ ワンダー"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          id="platform"
          name="platform"
          label="機種"
          placeholder="例：Switch"
          margin="normal"
        />
        <TextField
          fullWidth
          id="genre"
          name="genre"
          label="ジャンル"
          placeholder="例：アクション"
          margin="normal"
        />
        <TextField
          fullWidth
          id="seller"
          name="seller"
          label="販売元"
          placeholder="例：任天堂"
          margin="normal"
        />
        <Typography component="legend" sx={{ marginTop: '10px' }}>
          評価
        </Typography>
        <Rating
          name="simple-controlled"
          value={ratingValue}
          precision={0.5}
          onChange={(event, newRatingValue) => {
            setRatingValue(newRatingValue);
            console.log(newRatingValue);
          }}
        />
        <TextField
          multiline
          rows={5}
          fullWidth
          id="impression"
          name="impression"
          label="感想"
          placeholder="例：配管工がワンダー"
          margin="normal"
        />
        <Stack
          direction="row"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px',
          }}
        >
          <Button variant="outlined" type="submit">
            新規登録
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Edit;
