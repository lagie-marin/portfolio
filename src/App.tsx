import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './component/home/home';
import NavBar from './component/navbar/NavBar';

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/redirect" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;