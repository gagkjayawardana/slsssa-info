import React from 'react';
import { styled } from 'styled-components';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import EventCard from '../../components/EventCard/EventCard';
import { useSelector } from 'react-redux';
import { selectCompetition } from '../../redux/competition/competitionSlice';
import { selectUser } from '../../redux/user/userSlice';

const Events_Page_Content = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
`;

const Events_Container = styled.div`
  width: 100%;
  min-height: 500px;
  height: fit-content;
  padding: 50px 20px 50px 20px;
`;

const Create_Event_Div = styled.div`
  display: flex;
`;

function ShootingEvents() {
  const navigate = useNavigate();
  const competitionsDetails = useSelector(selectCompetition);
  const userDetails = useSelector(selectUser);

  const navigateToCreateEvent = () => {
    navigate('/createEvent');
  };
  return (
    <Events_Page_Content>
      <div className="eventPageHeader">
        <Header />
      </div>
      <Events_Container>
        {userDetails.role === 'admin' && (
          <Create_Event_Div>
            <Typography variant="h6" gutterBottom>
              Create New Event
            </Typography>
            <Button
              sx={{
                marginLeft: '10px',
                backgroundColor: '#ff0000',
                '&:hover': { backgroundColor: '#ff6666' },
                textTransform: 'none'
              }}
              variant="contained"
              onClick={navigateToCreateEvent}>
              Create
            </Button>
          </Create_Event_Div>
        )}
        <div className="eventsCardContainer">
          {competitionsDetails.map((competition, index) => (
            <EventCard
              key={`competition-${index}`}
              competitionName={competition.competitionName}
              competitionType={competition.competitionType}
              competitionDate={competition.competitionDate}
              competitionVenue={competition.competitionVenue}
              competitionStart={competition.competitionStart}
              competitionEnd={competition.competitionEnd}
              competitionDescription={competition.competitionDescription}
            />
          ))}
        </div>
      </Events_Container>
      <div className="eventPageFooter">
        <Footer />
      </div>
    </Events_Page_Content>
  );
}

export default ShootingEvents;
