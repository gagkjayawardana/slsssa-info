import React from 'react';
import { styled } from 'styled-components';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SchoolsRegisterTable from '../../components/SchoolsRegistration/SchoolsRegisterTable';
import UploadReceipt from '../../components/PaymentReceipt/UploadReceipt';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { selectParticipants, selectReceipt } from '../../redux/school/schoolsSlice';
import { selectUser } from '../../redux/user/userSlice';
import TextField from '@mui/material/TextField';

const School_Register_Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
`;

const School_Register_Body = styled.div`
  padding: 20px 20px 40px 20px;
`;

const Schools_Register_h1 = styled.h1`
  @media (max-width: 600px) {
    font-size: 18pt;
  }
`;

const Schools_Registration_Introduction = styled.div`
  background-color: #ffff00;
  padding: 20px 20px 20px 20px;
`;

const Submit_Schools_Form = styled.div`
  margin-top: 50px;
`;

const Submit_Schools_Form_H2 = styled.h2`
  @media (max-width: 600px) {
    font-size: 15pt;
  }
`;

function SchoolRegistration() {
  const schoolsParticipants = useSelector(selectParticipants);
  const schoolsReceipt = useSelector(selectReceipt);
  const userDetails = useSelector(selectUser);
  const competitionName = localStorage.getItem('competitionName');
  const schoolName = userDetails.name;

  const completeSchoolRegistration = () => {
    if (schoolsParticipants && schoolsReceipt) {
      console.log('participants', schoolsParticipants);
      console.log('Receipt', schoolsReceipt);
    } else {
      alert('Please enter Participants Details and Payment Receipt');
    }
  };
  return (
    <School_Register_Container>
      <div className="schoolRegisterHeader">
        <Header />
      </div>
      <School_Register_Body>
        <Schools_Register_h1>Schools Registration</Schools_Register_h1>
        <div>
          <Typography variant="h6" gutterBottom>
            Competition: {competitionName}
          </Typography>
          {userDetails.role === 'school' ? (
            <Typography variant="h6" gutterBottom>
              School Name: {schoolName}
            </Typography>
          ) : (
            <TextField
              name="schoolName"
              sx={{ marginBottom: '20px' }}
              id="outlined-basic"
              label="Enter School Name"
              variant="outlined"
            />
          )}
        </div>
        <Schools_Registration_Introduction>
          <Typography variant="body1" gutterBottom>
            <b>Competitor Information:</b>
            <br />
            {"Please enter each competitor's name in BLOCK CAPITAL LETTERS."}
            <br />
            {"Provide the competitor's date of birth in DD-MM-YYYY format (e.g., 10-12-2005)."}
            <br />
            Select the category for each competitor: Rifle or Pistol.
            <br />
            Specify the gender category: Men or Women.
            <br />
            Competitors must be between 14 and 21 years of age.
            <br />
            <br />
            <b> Payment and Receipt:</b>
            <br />
            Complete the payment process by depositing LKR 1000.
            <br />
            Upload the payment receipt for verification.
            <br />
            <br />
            <b>Accout Details:</b>
            <br />
            Account Name: Sri Lanka Schools Shooting Sports Association
            <br />
            Bank: Bank of Ceylon (BOC)
            <br />
            Branch: Maradana
            <br />
            Account Number: 72937043
          </Typography>
        </Schools_Registration_Introduction>
        <div className="schoolsCompetitors">
          <SchoolsRegisterTable />
        </div>
        <div className="schoolsPayments">
          <UploadReceipt />
        </div>
        <Submit_Schools_Form>
          <Submit_Schools_Form_H2>
            {"Submit Participant's Details & Payement Details"}
          </Submit_Schools_Form_H2>
          <Button
            name="schoolRegisterBtn"
            sx={{
              width: '20%',
              backgroundColor: '#ff0000',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#ff6666' }
            }}
            variant="contained"
            size="large"
            onClick={completeSchoolRegistration}>
            Submit
          </Button>
        </Submit_Schools_Form>
      </School_Register_Body>
      <div className="schoolRegisterFooter">
        <Footer />
      </div>
    </School_Register_Container>
  );
}

export default SchoolRegistration;
