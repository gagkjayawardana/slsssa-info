import React from 'react';
import styled from 'styled-components';
import logo from '../../assests/images/logo.jpg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserAction, selectUser } from '../../redux/user/userSlice';

const HeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
  border: 2px solid black;
`;

const Header_Logo_Topic = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
`;

const Header_Logo = styled.div`
  width: 18%;
  height: fit-content;
  padding: 15px 20px 0 20px;

  @media (max-width: 600px) {
    padding-top: 5px;
  }

  @media (max-width: 480px) {
    padding-top: 5px;
  }
`;

const Header_Topic = styled.div`
  width: 82%;
  height: fit-content;
  text-align: left;
  padding: 0 40px 0 20px;
  margin-top: -10px;

  @media (max-width: 1024px) {
    margin-top: 0;
  }
`;

const Logo = styled.img`
  width: 130px;
  height: 130px;

  @media (max-width: 1024px) {
    width: 110px;
    height: 110px;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
  }
`;

const Name_slsssa = styled.h1`
  color: #e60000;
  font-size: 33pt;

  @media (max-width: 1024px) {
    font-size: 25pt;
  }

  @media (max-width: 768px) {
    font-size: 18pt;
  }

  @media (max-width: 600px) {
    font-size: 12pt;
  }

  @media (max-width: 480px) {
    font-size: 10pt;
  }
`;

const Navigationbar = styled.div`
  width: 100%;
  background-color: #000000;
  padding: 5px 20px 5px 20px;
  display: flex;
  justify-content: space-between;
`;

function Header() {
  const userDetails = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const NavigateToHome = () => {
    navigate('/');
  };

  const NavigateToEvents = () => {
    navigate('/shootingEvents');
  };

  const NavigateToUserLogin = () => {
    navigate('/userLogin');
  };

  const logoutFunction = () => {
    dispatch(logoutUserAction({ navigate }));
  };

  return (
    <HeaderContainer>
      <Header_Logo_Topic>
        <Header_Logo>
          <Logo src={logo} />
        </Header_Logo>
        <Header_Topic>
          <Name_slsssa>SRI LANKA SCHOOLS SHOOTING SPORTS ASSOCIATION</Name_slsssa>
        </Header_Topic>
      </Header_Logo_Topic>
      <Navigationbar>
        <Stack spacing={2} direction="row">
          <Button
            sx={{
              color: '#ffffff',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#cccccc' }
            }}
            variant="text"
            onClick={NavigateToHome}>
            Home
          </Button>
          <Button
            sx={{
              color: '#ffffff',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#cccccc' }
            }}
            variant="text"
            onClick={NavigateToEvents}>
            Events
          </Button>
          <Button
            sx={{
              color: '#ffffff',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#cccccc' }
            }}
            variant="text">
            News
          </Button>
        </Stack>
        <div>
          {userDetails?.userName ? (
            <Button
              sx={{
                color: '#000000',
                backgroundColor: '#ffffff',
                textTransform: 'none',
                '&:hover': { backgroundColor: '#cccccc' }
              }}
              variant="contained"
              onClick={logoutFunction}>
              Logout
            </Button>
          ) : (
            <Button
              sx={{
                color: '#000000',
                backgroundColor: '#ffffff',
                textTransform: 'none',
                '&:hover': { backgroundColor: '#cccccc' }
              }}
              variant="contained"
              onClick={NavigateToUserLogin}>
              Login
            </Button>
          )}
        </div>
      </Navigationbar>
    </HeaderContainer>
  );
}

export default Header;
