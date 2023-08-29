import React from 'react';
import styled from 'styled-components';
import Link from '@mui/material/Link';

const Footer_Container = styled.div`
  width: 100%;
  min-height: 350px;
  height: fit-content;
  background-color: #000000;
  padding: 30px 20px 30px 20px;
  color: #ffffff;
`;

const Contact_Us = styled.h2`
  color: white;
`;

const Footer_Email = styled.div`
  display: flex;
  margin-top: -15px;
`;

const All_Rights_Reserved = styled.div`
  width: 100%;
  height: fit-content;
  text-align: center;
  margin-top: 50px;
`;

function Footer() {
  const emailAddress = 'srilankaschoolsssa@hotmail.com';
  return (
    <Footer_Container>
      <Contact_Us>Contact Us</Contact_Us>
      <div className="footer_address">
        <p>Address: Administrational Office, Nalanda College, Colombo 10, Sri Lanka.</p>
      </div>
      <div className="footer_tel">
        <p>Telephone: +94 11 269 5227 </p>
      </div>
      <Footer_Email>
        <p>Email: </p>
        <Link
          href={`mailto:${emailAddress}`}
          sx={{
            color: '#ffffff',
            marginLeft: '5px',
            paddingTop: '15px'
          }}>
          srilankaschoolsssa@hotmail.com
        </Link>
      </Footer_Email>
      <All_Rights_Reserved>Sri Lanka School Schooting Sports Association</All_Rights_Reserved>
    </Footer_Container>
  );
}

export default Footer;
