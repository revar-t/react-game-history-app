import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" components="h1" sx={{ fontSize: '2.5rem' }}>
            <Link to="/">My Game History</Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex' }}>
            <Tooltip title="ゲームを新規登録する">
              <IconButton sx={{ color: 'white' }} component={Link} to='/create'>
                <CreateIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="プロフィール">
              <IconButton sx={{ color: 'white' }}>
                <PersonIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
