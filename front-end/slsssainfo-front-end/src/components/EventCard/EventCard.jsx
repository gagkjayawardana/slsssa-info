import React from 'react';
import { styled } from 'styled-components';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/user/userSlice';

const Event_Card = styled.div`
  width: 100%;
  min-height: 300px;
  height: fit-content;
  background-color: #f0f5f5;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px 20px 20px 20px;
`;
const Event_Details_Container = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 600px) {
    display: block;
  }
`;

const Event_Details = styled.div`
  width: 50%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Event_Card_Action = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

function EventCard({
  competitionName,
  competitionType,
  competitionDate,
  competitionVenue,
  competitionStart,
  competitionEnd,
  competitionDescription
}) {
  const navigate = useNavigate();
  const userDetails = useSelector(selectUser);

  const navigateToRegisterSchool = () => {
    if (userDetails.userName) {
      localStorage.setItem('competitionName', competitionName);
      localStorage.setItem('competitionDate', competitionDate);
      navigate(`/schoolRegistration/${competitionName}`);
    } else {
      alert('Please Login to the System');
      navigate('/userLogin');
    }
  };

  const navigateToResults = () => {
    localStorage.setItem('competitionNameForResults', competitionName);
    navigate('/addScores');
  };
  return (
    <Event_Card>
      <Typography variant="h4" gutterBottom>
        {competitionName}
      </Typography>
      <Event_Details_Container>
        <Event_Details>
          <Typography sx={{ marginLeft: '20px' }} variant="body1" gutterBottom>
            Competition Type: {competitionType}
          </Typography>
          <Typography sx={{ marginLeft: '20px' }} variant="body1" gutterBottom>
            Held On: {competitionDate}
          </Typography>
          <Typography sx={{ marginLeft: '20px' }} variant="body1" gutterBottom>
            Venue: {competitionVenue}
          </Typography>
          <Typography sx={{ marginLeft: '20px' }} variant="body1" gutterBottom>
            Time: {competitionStart} to {competitionEnd}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {competitionDescription}
          </Typography>
        </Event_Details>
        <Event_Card_Action>
          <div className="EvetSchoolsRegistrationButton">
            <Button
              sx={{
                backgroundColor: '#ff0000',
                '&:hover': { backgroundColor: '#ff6666' },
                textTransform: 'none'
              }}
              variant="contained"
              onClick={navigateToRegisterSchool}>
              School Registration
            </Button>
          </div>
          <div className="eventIndividualRegistrationButton">
            <Button
              sx={{
                marginTop: '20px',
                backgroundColor: '#ff0000',
                '&:hover': { backgroundColor: '#ff6666' },
                textTransform: 'none'
              }}
              variant="contained">
              Individual Registration
            </Button>
          </div>
          <div className="eventViewResultsButton">
            <Button
              sx={{
                marginTop: '20px',
                backgroundColor: '#ff0000',
                '&:hover': {
                  backgroundColor: '#ff6666'
                },
                textTransform: 'none'
              }}
              variant="contained"
              onClick={navigateToResults}>
              View Results
            </Button>
          </div>
        </Event_Card_Action>
      </Event_Details_Container>
    </Event_Card>
  );
}

export default EventCard;
