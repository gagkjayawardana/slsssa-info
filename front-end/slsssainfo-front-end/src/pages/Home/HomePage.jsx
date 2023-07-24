import React from 'react';
import Header from '../../components/Header/Header';
import { styled } from 'styled-components';
import Typography from '@mui/material/Typography';
import nclogo from '../../assests/images/nclogo.png';

const Home_Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
`;

const Home_Body = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px 20px 20px 20px;
  border: 1px solid black;
`;

const History_Contain = styled.div`
  width: 100%;
  min-height: 300px;
  height: fit-content;
  // border: 1px solid blue;
  display: flex;
`;
const History_Parah1 = styled.div`
  width: 70%;
  min-height: 350px;
  height: fit-content;
  // border: 1px solid red;
`;

const Home_Image1 = styled.div`
  width: 30%;
  height: 350px;
  // border: 1px solid green;
  padding-top: 60px;

  @media (max-width: 900px) {
    padding-top: 100px;
  }
`;

const Nc_Logo = styled.img`
  width: 225px;
  height: 225px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  // border: 1px solid black;

  @media (max-width: 900px) {
    width: 200px;
    height: 200px;
  }
`;

function HomePage() {
  return (
    <Home_Container>
      <div className="homeHeader">
        <Header />
      </div>
      <Home_Body>
        <h1 id="welcome_h1">Welcome</h1>
        <h2 id="history_h2">Histrory of Sri Lanka Schools Shooting Sports Association (SLSSSA)</h2>
        <History_Contain>
          <History_Parah1>
            <Typography variant="body1" gutterBottom>
              Nalanda College Rifle Shooters Association (NCRSA) was founded on 11 September 1990
              and Individual Qualifying Competitions in Air Rifle / Air Pistol (10 Meter) Shooting
              for School Students was launched by NCRSA in 21November 1992. With the backing of the
              National Rifle Association (NRA) Inter Schools Air Rifle & Air Pistol (10 Meter)
              Shooting Competitions in Sri Lanka was also pioneered by NCRSA on 25 January 1994.
              Basing the foundation laid by NCRSA; Sri Lanka Schools Shooting Sports Association
              (SLSSSA) was created and formed on 31 March 2011. In the history of Sri Lanka Schools
              Sports Shooting; following notable personalities have backed the forming up of NCRSA
              and had streamlined the related rules & regulations.
            </Typography>
            <Typography sx={{ paddingLeft: '30px' }} variant="body2" gutterBottom>
              Mr. D.G. Sumanasekara SLEAS (Then Principal- Nalanada College),
              <br /> Mr. V.G. Piyasiri (Master In Charge-NCRSA),
              <br /> Maj. Gen. H.N.W. Dias RWP RSP VSV USP ndc IG (Then President - NRA),
              <br /> Lt. Col. Daya Rajasinghe (Then National Coach),
              <br /> Commander Hemasiri Fernando (President National Olympic Committee),
              <br /> Maj. Gen. Kenath W. Edema (Then National Coach),
              <br /> Mr. Janaka Wickramasurendra (Then National Coach - Pistol ),
              <br /> Harsha S. Weerasuriya (Then Chief Student Instructor - NCRSA).
            </Typography>
          </History_Parah1>
          <Home_Image1>
            <Nc_Logo src={nclogo} />
          </Home_Image1>
        </History_Contain>
      </Home_Body>
    </Home_Container>
  );
}

export default HomePage;
