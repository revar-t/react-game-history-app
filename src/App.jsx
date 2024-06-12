import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Create from './pages/Create';
import Home from './pages/Home';
import Edit from './pages/Edit';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { amber, blue, blueGrey, cyan, grey, red } from '@mui/material/colors';

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: blue[500] },
      warning: { main: red[500] },
      platform: { main: blueGrey[100], contrastText: grey[900] },
      genre: { main: cyan[500], contrastText: grey[50] },
      seller: { main: amber[500], contrastText: grey[900] },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path='index.html' element={<Home />} />
              <Route path="create" element={<Create />} />
              <Route path="edit/:id" element={<Edit />} />
              <Route path="*" element={<h1>Page Not Found</h1>} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
