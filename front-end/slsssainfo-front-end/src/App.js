import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/Home/HomePage';
import SchoolRegistration from './pages/SchoolsEventRegistration/SchoolRegistration';
// import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/schoolRegistration" element={<SchoolRegistration />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
