import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/components/home/home';
import { CV } from '@/components/cv/cv';
import "./css/app.style.css";
import { LanguageProvider } from './config/langage';

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Navigate to="/fr" replace />} />
            <Route path="/fr" element={<Home />} />
            <Route path="/en" element={<Home />} />
            <Route path="/CV" Component={CV} />
            <Route path="*" element={<Navigate to="/fr" replace />} />
          </Routes>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;