import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
// import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
