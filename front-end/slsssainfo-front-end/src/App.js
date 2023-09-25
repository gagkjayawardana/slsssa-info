import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/Home/HomePage';
import SchoolRegistration from './pages/SchoolsEventRegistration/SchoolRegistration';
import UserLogin from './pages/Login/UserLoginPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshAction } from './redux/user/userSlice';

// import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshAction());
  }, []);
  return (
    <>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/schoolRegistration" element={<SchoolRegistration />} />
            <Route path="/userLogin" element={<UserLogin />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
