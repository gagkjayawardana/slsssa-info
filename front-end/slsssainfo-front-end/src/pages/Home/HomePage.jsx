import React from 'react';
import Header from '../../components/Header/Header';
import { styled } from 'styled-components';
import Typography from '@mui/material/Typography';
import nclogo from '../../assests/images/nclogo.png';
import Footer from '../../components/Footer/Footer';
import homeImage1 from '../../assests/images/homeImage1.jpeg';
import LectureViewer from '../../components/PdfViewer/LecurePdf';
import { useEffect } from 'react';

const Home_Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: fit-content;
`;

const Home_Body = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px 20px 40px 20px;
`;

const History_Contain = styled.div`
  width: 100%;
  min-height: 300px;
  height: fit-content;
  display: flex;

  @media (max-width: 768px) {
    display: block;
  }
`;
const History_Parah1 = styled.div`
  width: 70%;
  min-height: 320px;
  height: fit-content;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Home_Image1 = styled.div`
  width: 30%;
  height: 320px;
  padding-top: 60px;

  @media (max-width: 900px) {
    padding-top: 100px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: fit-content;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

const Nc_Logo = styled.img`
  width: 225px;
  height: 225px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 900px) {
    width: 200px;
    height: 200px;
  }
`;

const Welcome_h1 = styled.h1`
  @media (max-width: 600px) {
    font-size: 18pt;
  }
`;

const History_h2 = styled.h2`
  @media (max-width: 600px) {
    font-size: 15pt;
  }
`;

const History_Parah2 = styled.div`
  width: 100%;
  height: fit-content;
`;

const Home_Image = styled.img`
  max-width: 80%;
  height: auto;
  display: block;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;

const Instruction_h2 = styled.h2`
  margin-top: 50px;

  @media (max-width: 600px) {
    font-size: 15pt;
  }
`;

const InstructionPdfs = styled.div`
  margin-top: 30px;
`;

const Sub_Instruction_h3 = styled.h3`
  @media (max-width: 600px) {
    font-size: 12pt;
  }
`;

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function SportInstructions() {
    return (
      <InstructionPdfs>
        <Sub_Instruction_h3>Basic in Air Rifle & Air Pistol Shooting</Sub_Instruction_h3>
        <LectureViewer pdfUrl="pdfs/slsssa1.pdf" />
        <Sub_Instruction_h3>ISSF Official Statutes, Rules & Regulations</Sub_Instruction_h3>
        <LectureViewer pdfUrl="pdfs/issfRules.pdf" />
      </InstructionPdfs>
    );
  }
  return (
    <Home_Container>
      <div className="homeHeader">
        <Header />
      </div>
      <Home_Body>
        <Welcome_h1>Welcome</Welcome_h1>
        <History_h2>Histrory of Sri Lanka Schools Shooting Sports Association (SLSSSA)</History_h2>
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
        <History_Parah2>
          <Typography variant="body1" gutterBottom>
            When forming SLSSSA in 2011; Mr. M.S.K. Gunathilaka (Then deputy Principal - Nalanda
            College) was elected as the first president of Sri Lanka Schools Shooting Sports
            Association and in 2012 Mr. J.H.M.W. Ranjith (Principal - Nalanda College) was elected
            as the second president.
          </Typography>
        </History_Parah2>
        <Home_Image src={homeImage1} />
        <div className="sport_instructions">
          <Instruction_h2>Instructions about Air Gun Shooting</Instruction_h2>
          <Typography variant="body1" gutterBottom>
            Air gun shooting is an exciting sport that involves using air-powered rifles or pistols
            to shoot small pellets at targets. It is a discipline that emphasizes precision, focus,
            and skill. With its accessibility and inclusivity, air gun shooting welcomes
            participants of all backgrounds and ages. Safety is a top priority, and proper training
            and safety gear are essential. Whether you are a beginner or an experienced shooter, air
            gun sports offer a thrilling challenge and a vibrant community to join.
            <br />
            <br />
            For further details, you can use the below PDFs.
          </Typography>
          {SportInstructions()}
        </div>
      </Home_Body>
      <div className="homeFooter">
        <Footer />
      </div>
    </Home_Container>
  );
}

export default HomePage;
