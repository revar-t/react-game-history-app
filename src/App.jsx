import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Create from './pages/Create';
import Home from './pages/Home';
import Edit from './pages/Edit';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />}/>
            <Route path="create" element={<Create />} />
            <Route path="edit/:id" element={<Edit />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
