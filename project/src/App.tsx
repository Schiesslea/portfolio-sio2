import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CapWithStyle from './pages/CapWithStyle';
import BestMovie from './pages/BestMovie';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/capwithstyle" element={<CapWithStyle />} />
          <Route path="/projects/bestmovie" element={<BestMovie />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;