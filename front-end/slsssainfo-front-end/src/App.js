import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/Home/HomePage';
import SchoolRegistration from './pages/SchoolsEventRegistration/SchoolRegistration';
import UserLogin from './pages/Login/UserLoginPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshAction } from './redux/user/userSlice';
import CreateNewSchool from './pages/CreateSchool/CreateSchoolPage';
import ShootingEvents from './pages/Events/EventPage';
import CreateEvent from './pages/CreateEvent/CreateEvent';
import { getCompetitionAction } from './redux/competition/competitionSlice';
import AddScores from './pages/AddCompetitorsScores/AddScores';
import DisplayResults from './pages/DisplayResults/DisplayResults';

// import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshAction());
    dispatch(getCompetitionAction());
  }, []);
  return (
    <>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/schoolRegistration/:competitionName" element={<SchoolRegistration />} />
            <Route path="/userLogin" element={<UserLogin />} />
            <Route path="/createSchool" element={<CreateNewSchool />} />
            <Route path="/shootingEvents" element={<ShootingEvents />} />
            <Route path="/createEvent" element={<CreateEvent />} />
            <Route path="/addScores" element={<AddScores />} />
            <Route path="/displayResults" element={<DisplayResults />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
