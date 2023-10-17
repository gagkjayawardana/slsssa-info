import React from 'react';
import { useEffect } from 'react';
import { styled } from 'styled-components';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ResultsTable from '../../components/CompetitorsTable/CompetitorsResults';
import { useDispatch } from 'react-redux';
import { getcompetitorAction } from '../../redux/competitor/competitorSlice';

const Add_Score_Page = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
`;

const Add_Score_Table = styled.div`
  padding: 50px 20px 50px 20px;
`;

function AddScores() {
  const dispatch = useDispatch();
  const competitionName = localStorage.getItem('competitionNameForResults');

  useEffect(() => {
    dispatch(getcompetitorAction(competitionName));
  });
  return (
    <Add_Score_Page>
      <div className="addSoreHeader">
        <Header />
      </div>
      <Add_Score_Table>
        <ResultsTable />
      </Add_Score_Table>
      <div className="addScoreFooter">
        <Footer />
      </div>
    </Add_Score_Page>
  );
}

export default AddScores;
