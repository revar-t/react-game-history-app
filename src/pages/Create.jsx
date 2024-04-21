import { useState } from 'react';
import { Box, Container, Rating, TextField, Typography } from '@mui/material';
const Create = () => {
  const [ratingValue, setRatingValue] = useState(2);
  return (
    <Container maxWidth="sm">
      <Box component="form" sx={{ padding: '20px' }}>
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
        <Typography component="legend">評価</Typography>
        <Rating
          name="simple-controlled"
          value={ratingValue}
          precision={0.5}
          onChange={(event, newRatingValue) => {
            setRatingValue(newRatingValue);
            console.log(newRatingValue)
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
      </Box>
    </Container>
  );
};

export default Create;
