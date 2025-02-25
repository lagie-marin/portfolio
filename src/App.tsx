import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from '@/components/home/home';
import NavBar from '@/components/navbar/NavBar';
import { CV } from '@/components/cv/cv';
import "./css/app.style.css"

function App() {
    return (
        <Router>
            <NavBar />
            <div className='app-container'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/redirect" element={<Navigate to="/" />} />
                    <Route path="/CV" Component={CV}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;