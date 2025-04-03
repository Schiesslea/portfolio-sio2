import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CapWithStyle from './pages/CapWithStyle';
import BestMovie from './pages/BestMovie';
import PluginAbecedaire from './pages/PluginAbecedaire';
import Assoboxe from './pages/Assoboxe';
import CommerceDetail from './pages/CommerceDetail';
import Sanctions from './pages/Sanctions';
import MaVideoEditor from './pages/MaVideoEditor';

function App() {
    return (
        <ThemeProvider>
            <Router basename="/">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects/capwithstyle" element={<CapWithStyle />} />
                    <Route path="/projects/bestmovie" element={<BestMovie />} />
                    <Route path="/projects/plugin-abecedaire" element={<PluginAbecedaire />} />
                    <Route path="/projects/assoboxe" element={<Assoboxe />} />
                    <Route path="/projects/commerce-detail" element={<CommerceDetail />} />
                    <Route path="/projects/sanctions" element={<Sanctions />} />
                    <Route path="/projects/ma-video-editor" element={<MaVideoEditor />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;