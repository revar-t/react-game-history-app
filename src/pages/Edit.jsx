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
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const [games, setGames] = useState(
    JSON.parse(localStorage.getItem('games')) || []
  );

  const navigate = useNavigate();

  const getGame = games.find((game) => game.id === id);

  const [activeTitle, setActiveTitle] = useState(getGame.title);
  const [activePratform, setActivePratform] = useState(getGame.platform);
  const [activeGenre, setActiveGenre] = useState(getGame.genre);
  const [activeSeller, setActiveSeller] = useState(getGame.seller);
  const [activeRating, setActiveRating] = useState(getGame.rating);
  const [activeImpression, setActiveImpression] = useState(getGame.impression);

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

    const newGame = {
      id,
      title,
      platform,
      genre,
      seller,
      rating: activeRating,
      impression,
    };
    // 更新するのを取り除く
    const newGames = games.filter((game) => game.id !== id);

    await setGames([...newGames, newGame]);
    navigate('/');
  };

  const handleDelete = (id) => {
    const filterGames = games.filter((game) => game.id !== id);
    localStorage.setItem('games', JSON.stringify(filterGames));
    console.log(filterGames);
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" sx={{ padding: '20px' }} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="ゲームのタイトル"
          placeholder="例：スーパーマリオブラザーズ ワンダー"
          defaultValue={activeTitle}
          onChange={(e, newTitle) => setActiveTitle(newTitle)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          id="platform"
          name="platform"
          label="機種"
          placeholder="例：Switch"
          defaultValue={activePratform}
          onChange={(e, newPratform) => setActivePratform(newPratform)}
          margin="normal"
        />
        <TextField
          fullWidth
          id="genre"
          name="genre"
          label="ジャンル"
          placeholder="例：アクション"
          defaultValue={activeGenre}
          onChange={(e, newGenre) => setActiveGenre(newGenre)}
          margin="normal"
        />
        <TextField
          fullWidth
          id="seller"
          name="seller"
          label="販売元"
          placeholder="例：任天堂"
          defaultValue={activeSeller}
          onChange={(e, newSeller) => setActiveSeller(newSeller)}
          margin="normal"
        />
        <Typography component="legend" sx={{ marginTop: '10px' }}>
          評価
        </Typography>
        <Rating
          name="simple-controlled"
          defaultValue={activeRating}
          precision={0.5}
          onChange={(e, newRating) => setActiveRating(newRating)}
        />
        <TextField
          multiline
          rows={5}
          fullWidth
          id="impression"
          name="impression"
          label="感想"
          defaultValue={activeImpression}
          onChange={(e, newImpression) => setActiveImpression(newImpression)}
          placeholder="例：配管工がワンダー"
          margin="normal"
        />
        <Stack
          direction="row"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            marginTop: '10px',
          }}
        >
          <Button variant="outlined" type="submit">
            変更
          </Button>
          <Button variant="contained" color="warning" onClick={() =>handleDelete(id)}>
            削除
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Edit;
