import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  getJuniorPistolMen,
  getJuniorPistolWomen,
  getJuniorRifleMen,
  getJuniorRifleWomen,
  getYouthPistolMen,
  getYouthPistolWomen,
  getYouthRifleMen,
  getyouthRifleWomen,
  selectJuniorPistolMen,
  selectJuniorPistolWomen,
  selectJuniorRifleMen,
  selectJuniorRifleWomen,
  selectYouthPistolMen,
  selectYouthPistolWomen,
  selectYouthRifleMen,
  selectYouthRifleWomen
} from '../../redux/competitor/competitorSlice';
import { useSelector } from 'react-redux';
import CompetitionResultsTable from '../../components/Results/CompetitionResults';
import { selectUser } from '../../redux/user/userSlice';

const Display_Results_Page = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
`;

const Display_Results_Container = styled.div`
  padding: 50px 20px 50px 20px;
`;

const Add_score_Button = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Junior_Rifle_Men_Table = styled.div`
  margin-top: 50px;
`;

const Youth_Rifle_Men_Table = styled.div`
  margin-top: 50px;
`;

const Youth_Rifle_Women_Table = styled.div`
  margin-top: 50px;
`;

const Junior_Pistol_Men_Table = styled.div`
  margin-top: 50px;
`;

const Junior_Pistol_Women_Table = styled.div`
  margin-top: 50px;
`;

const Youth_Pistol_Men_Table = styled.div`
  margin-top: 50px;
`;

const Youth_Pistol_Women_Table = styled.div`
  margin-top: 50px;
`;

function DisplayResults() {
  const competitionName = localStorage.getItem('competitionNameForResults');
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToAddScore = () => {
    navigate('/addScores');
  };

  useEffect(() => {
    dispatch(getJuniorRifleMen({ competitionName }));
    dispatch(getYouthRifleMen({ competitionName }));
    dispatch(getJuniorRifleWomen({ competitionName }));
    dispatch(getyouthRifleWomen({ competitionName }));
    dispatch(getJuniorPistolMen({ competitionName }));
    dispatch(getJuniorPistolWomen({ competitionName }));
    dispatch(getYouthPistolMen({ competitionName }));
    dispatch(getYouthPistolWomen({ competitionName }));
  }, []);

  const juniorRifleMen = useSelector(selectJuniorRifleMen);
  const youthRifleMen = useSelector(selectYouthRifleMen);
  const juniorRifleWomen = useSelector(selectJuniorRifleWomen);
  const youthRifleWomen = useSelector(selectYouthRifleWomen);
  const juniorPistolMen = useSelector(selectJuniorPistolMen);
  const juniorPistolWomen = useSelector(selectJuniorPistolWomen);
  const youthPistolMen = useSelector(selectYouthPistolMen);
  const youthPistolWomen = useSelector(selectYouthPistolWomen);
  return (
    <Display_Results_Page>
      <div className="displayResultsHeader">
        <Header />
      </div>
      <Display_Results_Container>
        <Typography variant="h4" gutterBottom>
          {competitionName} Results
        </Typography>
        {user.role === 'judge' && (
          <Add_score_Button>
            <Typography variant="h6" gutterBottom>
              Add Scores
            </Typography>
            <Button
              sx={{
                marginLeft: '10px',
                backgroundColor: '#ff0000',
                '&:hover': { backgroundColor: '#ff6666' },
                textTransform: 'none'
              }}
              variant="contained"
              onClick={navigateToAddScore}>
              Add
            </Button>
          </Add_score_Button>
        )}
        <Junior_Rifle_Men_Table>
          <Typography variant="h5" gutterBottom>
            Junior Rifle Men Category
          </Typography>
          <CompetitionResultsTable competitorsDetails={juniorRifleMen} />
        </Junior_Rifle_Men_Table>
        <Youth_Rifle_Men_Table>
          <Typography variant="h5" gutterBottom>
            Junior Rifle Women Category
          </Typography>
          <CompetitionResultsTable competitorsDetails={juniorRifleWomen} />
        </Youth_Rifle_Men_Table>
        <Youth_Rifle_Men_Table>
          <Typography variant="h5" gutterBottom>
            Youth Rifle Men Category
          </Typography>
          <CompetitionResultsTable competitorsDetails={youthRifleMen} />
        </Youth_Rifle_Men_Table>
        <Youth_Rifle_Women_Table>
          <Typography variant="h5" gutterBottom>
            Youth Rifle Women Category
          </Typography>
          <CompetitionResultsTable competitorsDetails={youthRifleWomen} />
        </Youth_Rifle_Women_Table>
        <Junior_Pistol_Men_Table>
          <Typography variant="h5" gutterBottom>
            Junior Pistol Men Category
          </Typography>
          <CompetitionResultsTable competitorsDetails={juniorPistolMen} />
        </Junior_Pistol_Men_Table>
        <Junior_Pistol_Women_Table>
          <Typography variant="h5" gutterBottom>
            Junior Pistol Women Category
          </Typography>
          <CompetitionResultsTable competitorsDetails={juniorPistolWomen} />
        </Junior_Pistol_Women_Table>
        <Youth_Pistol_Men_Table>
          <Typography variant="h5" gutterBottom>
            Youth Pistol Men Category
          </Typography>
          <CompetitionResultsTable competitorsDetails={youthPistolMen} />
        </Youth_Pistol_Men_Table>
        <Youth_Pistol_Women_Table>
          <Typography variant="h5" gutterBottom>
            Youth Pistol Women Category
          </Typography>
          <CompetitionResultsTable competitorsDetails={youthPistolWomen} />
        </Youth_Pistol_Women_Table>
      </Display_Results_Container>
      <div className="displayResultsFooter">
        <Footer />
      </div>
    </Display_Results_Page>
  );
}

export default DisplayResults;
